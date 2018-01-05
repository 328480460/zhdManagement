<template>
  <div id="staff">
    <div class="btn-list">
      <el-button type="primary" size="medium">添加员工</el-button>
      <el-button type="primary" size="medium" class="btn-search">邀请员工</el-button>
    </div>

    <el-table class="el-table"
              border
    >
      <el-table-column class="table-column"
                       prop="name"
                       label="账号"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="员工姓名"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="联系方式"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="角色"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="添加时间"
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
    name: "staff",
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

<style rel="stylesheet/less" lang='less' scoped>
#staff {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
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
