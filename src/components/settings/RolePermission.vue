<template>
  <div id="role">
    <div class="btn-list">
      <el-button type="primary" size="medium">添加角色</el-button>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="roleList"
    >
      <el-table-column class="table-column"
                       prop="role_name"
                       label="角色"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleEdit">修改</el-button>
          <el-button
            size="mini"
            type="text"
            style="margin-left: 50px"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getListRole,
  } from "../../assets/js/settings/ajax.js";
export default {
    name: "role",
    created() {
    },
    data() {
      return{
        totalcount: 0,
        roleList: [],
      }
    },
    mounted() {
      let params = {
  //      productName: "",
  //      time: "",
      };
      this.initData(params);
    },
    methods: {
      initData(params) {
        //查询产品列表
        this.searchConditions(params)
      },
      /*"搜索"---查询角色信息列表接口*/
      searchConditions(current){
//      this.search.pageNum = typeof current === 'number' ? current : 1;
        let params = {

        };
        this.getListRole(params);
      },
      //角色信息列表接口
      getListRole(params){
        getListRole(params)
          .then(res => {
            this.totalcount = res.data.totalcount;
            this.roleList = res.data.roleList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      handleEdit() {
//      this.$emit("openExtraPage", {
//        node:"production",
//        page: "editProduct",
//        name: "编辑产品",
//        id: "01010102"
//      });
      },
      handleDelete(index, row) {
      this.delete()
      },
      delete() {
        this.$confirm('此操作将删除该角色信息, 是否继续?', '提示', {
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

    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#role {
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
