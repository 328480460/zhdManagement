<template>
  <div id="producttype">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newProductType">添加产品类型</el-button>
    </div>

    <el-table class="el-table"
              border
    >
      <el-table-column class="table-column"
                       prop="name"
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
  import {
    getListProductType,
    getProductList,
    deleteProduct
  } from "../../assets/js/production/ajax.js";
  import { deepCopy } from "../../assets/js/api/util.js";

export default {
    name: "producttype",
    created() {
    },
    data() {
      return{

      }
    },
    methods: {
      newProductType() {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "addProductType",
          name: "新建产品类型",
          id: "03040101",
          query: { userId: "lalal" }
        });
      },

    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#producttype {
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
