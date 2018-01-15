<template>
  <div id="setting">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newNode">添加节点</el-button>
      <el-button type="primary" size="medium" class="btn-search">导出</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">节点编码</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入节点编码" v-model="search.nodeNumber" ></el-input></el-col>
        <el-col :span="3"><div class="sub-title">节点名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入节点名称" v-model="search.nodeName" ></el-input></el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">节点分类</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.nodeSplitting" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in nodeSplittings" :key="item.id" :label="item.label"  :value="item.label" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><div class="sub-title">节点类型</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.nodeType" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in nodeTypes" :key="item.id" :label="item.label"  :value="item.label" >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-button type="primary" size="medium" @click="searchConditions" class="btn-search" >搜索</el-button>
        <span @click="clearConditions" class="span-clear">清空筛选条件</span>
      </el-row>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="nodeList"
    >
      <el-table-column class="table-column"
                       prop="node_number"
                       label="节点编码"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="node_name"
                       label="节点名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="node_splitting"
                       label="节点分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="node_type_id"
                       label="节点类型"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="contacts"
                       label="联系人"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="contacts_phone"
                       label="联系电话"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="node_address"
                       label="节点地址"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="nodeDetails">详情</el-button>
          <el-button
            size="mini"
            type="text"
            style="margin-left: 50px"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      style="margin-top: 15px"
      layout="total,prev, pager, next"
      :current-page= search.pageNum
      @current-change="handleCurrentChange"
      :page-size=10
      :total= totalcount>
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "",
    created() {
    },
    mounted(){
      let params = {
        nodeNumber: "",
        nodeName: "",
        nodeSplitting: "",
        nodeType: "",
        pagenum: 1,
        pagesize: 10,
      };
      this.initData(params);
    },
    data() {
      return {
        totalcount: 123,
        search: {
          nodeNumber: "",
          nodeName: "",
          nodeSplitting: "",
          nodeType: "",
          contacts: "",
          contactsPhone: "",
          nodeAddress: "",
          pageNum: 1,
          pageSize: 10
        },
        nodeList:[],
        nodeSplittings: [
          {
            id: "1",
            label: "text全部分类"
          },
          {
            id: "2",
            label: "餐饮"
          },
          {
            id: "3",
            label: "超市"
          },
          {
            id: "4",
            label: "批发商"
          },
          {
            id: "5",
            label: "零售商"
          }
        ],
        nodeTypes: [
          {
            id: "1",
            label: "text全部类型"
          },
          {
            id: "2",
            label: "生产类型"
          },
          {
            id: "3",
            label: "流向节点"
          }
        ],
      }
    },
    methods: {
      newNode() {
        this.$emit("openExtraPage", {
          node: 'node',
          page: "newNode",
          name: "添加节点",
          id: "02010101"
        });
      },
      clearConditions(){
        this.search.nodeNumber = "";
        this.search.nodeName = "";
        this.search.nodeSplitting = "";
        this.search.nodeType = "";
      },
      /*"搜索"---查询节点列表接口*/
      searchConditions(current){
        this.search.pageNum = typeof current === 'number' ? current : 1;
        let params = {
          nodeNumber: this.search.nodeNumber,
          nodeName: this.search.nodeName,
          nodeSplitting: this.search.nodeSplitting,
          nodeType: this.search.nodeType,
          pagenum: this.search.pageNum,
          pagesize: this.search.pageSize,
        };
        this.getNodeList(params);
      },
      //节点列表查询
      getNodeList(params){
        let that = this
        axios.post('http://47.92.149.109:7108/mockjsdata/2/Node/getListNode', {params})
          .then(function (response) {
//          console.log("getNodeList获取的节点列表参数信息=="+JSON.stringify(params));
            that.totalcount = response.data.data.totalcount;
            that.nodeList = response.data.data.nodeList;
          })
          .catch(function (error) {
            that.$message({type: 'error', message: '出错啦!'});
          });
      },
      // 分页跳转
      handleCurrentChange(val) {
        this.searchConditions(val);
      },
      nodeDetails() {
            this.$emit("openExtraPage", {
              node:"node",
              page: "nodeDetails",
              name: "节点详情",
              id: "02010102"
            });
      },
      handleDelete(index, row) {
        this.delete()
      },
      delete() {
        this.$confirm('此操作将删除该节点信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /*删除接口*/
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      initData(params) {
        //查询节点列表
        this.searchConditions(params)
        //??????查询“节点分类”

        //??????查询“节点类型”

      }
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#setting {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .demo-autocomplete {
    margin-top: 10px;
    .btn-search{
      background-color: transparent;
      color: #03b150;
      margin-left: 8.33333%;
      margin-top: 2px;
    }
    .span-clear{
      color: #999999;
      margin-left: 15px;
      cursor: pointer;
    }
  }
  .sub-title {
    text-align: right;
    padding-right: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .el-col-4 {
    .el-autocomplete {
      width: 100%;
    }
  }
  .el-table{
    width: 100%;
    margin-top: 24px;

  }
  .btn-search{
    background-color: transparent;
    color: #03b150;
    margin-left: 15px;
    margin-top: 2px;
  }
}
</style>
