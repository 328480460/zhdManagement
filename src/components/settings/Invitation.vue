<template>
  <div id="invitation">
    <el-table class="el-table"
    >
      <el-table-column class="table-column"
                       prop="name"
                       label="姓名"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="电话"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="邮箱"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="邀请已发送"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "invitation",
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
#invitation {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;

  }
}
</style>
