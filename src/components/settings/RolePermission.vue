<template>
  <div id="role">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProductType">添加角色</el-button>
    </div>

    <el-table class="el-table"
              border
              :data="tableData"

    >
      <el-table-column class="table-column"
                       prop="name"
                       label="角色"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit">编辑</el-button>
          <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "role",
    created() {
    },
    data() {
      return{

      }
    },
    methods: {

    }
};
</script>

<style rel="stylesheet/scss" lang='less' scoped>
#role {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;

  }
}
</style>
