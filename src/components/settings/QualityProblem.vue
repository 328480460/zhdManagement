<template>
  <div id="quality">
    <div class="btn-list">
      <el-button type="primary" size="medium">添加问题详情</el-button>
    </div>

    <el-table class="el-table"
              border
    >
      <el-table-column class="table-column"
                       prop="name"
                       label="问题详情"
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
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "quality",
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
#quality {
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
