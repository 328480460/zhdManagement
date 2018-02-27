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
            <el-option  v-for="item in splittingList" :key="item.id" :label="item.type_name" :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><div class="sub-title">节点类型</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.nodeType" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in nodeTypeList" :key="item.id" :label="item.type_name" :value="item.id" >
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
                       prop="node_splitting_name"
                       label="节点分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="node_type_name"
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
            @click="nodeDetails(scope.$index, scope.row)">详情</el-button>
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
      :current-page= 'currentPage'
      @current-change="handleCurrentChange"
      :page-size=10
      :total= totalcount>
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getListNode,
    deleteNode,
    getlist
  } from "../../assets/js/node/ajax.js";
  import { deepCopy } from "../../assets/js/api/util.js";

export default {
    name: "",
    created() {
    },
    mounted(){
      let params = {
        node_number: "",
        node_name: "",
        node_splitting: "",
        node_type_id: "",
        pagenum: 1,
        pagesize: 10,
      };
      this.initData(params);
      this.ajaxSearch = deepCopy(this.search);
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
        },
        currentPage: 1,
        pageSize: 10,
        ajaxSearch: "",
        nodeList:[],
        nodeTypeList:[],
        splittingList:[],
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
      nodeDetails(index, row) {
        this.$emit("openExtraPage", {
          node:"node",
          page: "nodeDetails",
          name: "节点详情",
          id: "02010102",
          query: { nodeId: row.id },
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
        this.ajaxSearch = deepCopy(this.search);
        if (this.currentPage !== 1) {
          this.currentPage = 1;
          return;
        }
        this.getNodeList();
      },
      //节点分类查询
      getNodetupelist(){
        let params = {
          tables_name: "node_type",
        };
        getlist(params)
          .then(res => {
            this.nodeTypeList = res.data.typeTablesList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //节点类型查询
      getSplitlist(){
        let params = {
          tables_name: "node_splitting",
        };
        getlist(params)
          .then(res => {
            this.splittingList = res.data.typeTablesList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //节点列表查询
      getNodeList(){
        let params = {
          node_number: this.ajaxSearch.nodeNumber,
          node_name: this.ajaxSearch.nodeName,
          node_splitting: this.ajaxSearch.nodeSplitting,
          node_type_id: this.ajaxSearch.nodeType,
          pagenum: this.currentPage,
          pagesize: this.pageSize,
        };
        this.getDataAjax(params);
      },
      getDataAjax(params) {
        getListNode(params)
          .then(res =>{
//            console.log("getListNode--"+JSON.stringify(res));
            this.totalcount = res.data.totalcount;
            this.nodeList = res.data.nodeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      // 分页跳转
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getNodeList();
      },
      handleDelete(index, row) {
        this.delete(index,row)
      },
      delete(index,row) {
        this.$confirm('此操作将删除该节点信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            id: row.id,
          };
          /*删除接口*/
          deleteNode(params)
            .then(res => {
              if(res.status == 200){
                this.$message.success("删除成功!");
                this.nodeList.splice(index, 1);
                //重新请求节点列表数据
                this.getNodeList()
              }
              console.log("节点删除res---"+JSON.stringify(res))
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      initData(params) {
        //查询节点列表信息
        this.getDataAjax(params);

        //节点分类查询
        this.getNodetupelist();
        //节点类型查询
        this.getSplitlist();
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
