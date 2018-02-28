<template>
  <div id="documenttype">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newDocumentType">添加文档类型</el-button>
    </div>

    <el-table class="el-table"
              :data="customAttributeList"
    >
      <el-table-column class="table-column"
                       prop="mould_name"
                       label="产品类型"
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
  deleteCustomAttribute,
} from "../../assets/js/settings/ajax.js";
import { deepCopy } from "../../assets/js/api/util.js";

export default {
    name: "documenttype",
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
        custom_mould_type: "4",
        pagenum: 1,
        pagesize: 10,
      };
      this.initData(params);
    },
    methods: {
      newDocumentType() {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "addDocumentType",
          name: "新建文档类型",
          id: "03040401",
        });
      },
      handleEdit(index, row) {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "editDocumentType",
          name: "修改文档类型",
          id: "03040402",
          query: { typeId: row.id },
        });
      },
      handleDelete(index, row) {
        this.delete(index,row);
        console.log("4要删除的那条信息---"+JSON.stringify(row))
      },
      delete(index,row) {
        this.$confirm("此操作将删除该产品信息, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            let params = {
              id: row.id,
            };
            /*删除接口*/
            deleteCustomAttribute(params)
              .then(res => {
                if(res.status == 200){
                  this.$message.success("删除成功!");
                  this.customAttributeList.splice(index, 1);
                  this.getCustomAttributeList()
                }else {
                  this.$message.error(res.msg);
                }
              })
              .catch(() => {
                this.$message.error("出错啦!");
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      // 分页跳转
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getCustomAttributeList();
      },
      getCustomAttributeList(){
        let params = {
          custom_mould_type: "4",
          pagenum: this.currentPage,
          pagesize: 10,
        };
        this.getDataAjax(params);
      },
      getDataAjax(params) {
        getCustomAttributeList(params)
          .then(res => {
//            console.log("res---"+JSON.stringify(res))
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
#documenttype {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .el-table{
    width: 100%;
    margin-top: 24px;

  }
}
</style>
