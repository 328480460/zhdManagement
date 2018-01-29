<template>
  <div id="nodetype">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newNodeType">添加节点类型</el-button>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="customAttributeList"
    >
      <el-table-column class="table-column"
                       prop="mould_name"
                       label="节点类型"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="text"
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
      :total= 'totalcount'>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getCustomAttributeList,
  } from "../../assets/js/settings/ajax.js";
  import { deepCopy } from "../../assets/js/api/util.js";

export default {
    name: "nodetype",
    created() {
    },
    data() {
      return{
        totalcount: 0,
        currentPage: 1,
        pageSize: 10,
        customAttributeList: [],
      }
    },
    mounted() {
      let params = {
        custom_mould_type: "2",
        pagenum: 1,
        pagesize: 10,
      };
      this.initData(params);
    },
    methods: {
      newNodeType() {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "addNodeType",
          name: "新建节点类型",
          id: "03040101",
        });
      },
      handleEdit(index, row) {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "editProductType",
          name: "修改节点类型",
          id: "03040202",
          query: { typeId: row.id },
        });
      },
      // 分页跳转
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getCustomAttributeList();
      },
      getCustomAttributeList(){
        let params = {
          custom_mould_type: "2",
          pagenum: this.currentPage,
          pagesize: 10,
        };
        this.getDataAjax(params);
      },
      getDataAjax(params) {
        getCustomAttributeList(params)
          .then(res => {
            console.log("res---"+JSON.stringify(res))
            this.totalcount = res.data.totalcount;
            this.customAttributeList = res.data.customAttributeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      initData(params){
        this.getDataAjax(params)
      },

    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#nodetype {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;

  }
}
</style>
