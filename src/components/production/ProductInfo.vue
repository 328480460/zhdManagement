<template>
  <div id="productinfo">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProduct">新建产品</el-button>
      <el-button type="primary" size="medium" class="btn-search">导出</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">产品名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入产品名称" v-model="search.productName" ></el-input></el-col>
        <el-col :span="3"><div class="sub-title">创建日期</div></el-col>
        <el-col :span="6">
          <el-date-picker v-model="search.time" type="daterange"
                          align="right" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                          :picker-options="pickerOptions2" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.customType" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in customTypeList" :key="item.id" :label="item.type_name"  :value="item.id" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><div class="sub-title">产品编码</div></el-col>
        <el-col :span="4"><el-input v-model="search.productCode" placeholder="请输入内容" ></el-input></el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-button type="primary" size="medium"  @click="searchConditions" class="btn-search" >搜索</el-button>
        <span @click="clearConditions" class="span-clear">清空筛选条件</span>
      </el-row>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="productList"
    >
      <el-table-column class="table-column"
                       prop="product"
                       label="产品编码"
    >
    </el-table-column>
      <el-table-column class="table-column"
                       prop="product_name"
                       label="产品名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="product_type_name"
                       label="产品分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="custom_type_name"
                       label="自定义分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="metering_name"
                       label="单位"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="editProduct(scope.$index, scope.row)">编辑</el-button>
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
      :total= 'totalcount'>
    </el-pagination>

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
  name: "productinfo",
  data() {
    return {
      totalcount: 0,
      customListCount: 0,
      productList: [],
      customTypeList: [],
      search: {
        productName: "",
        time: "",
        customType: "",
        productCode: "",
      },
      currentPage: 1,
      pageSize: 10,
      ajaxSearch: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  created() {},
  mounted() {
    let params = {
      product_name: "",
      custom_type_id: "",
      product: "",
      pagenum: 1,
      pagesize: 10,
      createdate_start: "",
      createdate_end: ""
    };
    this.initData(params);
    this.ajaxSearch = deepCopy(this.search);
  },
  methods: {
    newProduct() {
      this.$emit("openExtraPage", {
        node: "production",
        page: "newProduct",
        name: "新建产品",
        id: "01010101",
        query: { userId: "lalal" }
      });
    },
    editProduct(index, row) {
      this.$emit("openExtraPage", {
        node: "production",
        page: "editProduct",
        name: "编辑产品",
        id: "01010102",
        query: { productId: row.id },
      });
    },
    handleDelete(index, row) {
      this.delete(row);
    },
    delete(row) {
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
          deleteProduct(params)
            .then(res => {
              console.log("删除成功---"+JSON.stringify(res))
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /*"搜索"---查询产品列表接口*/
    searchConditions(current) {
      this.ajaxSearch = deepCopy(this.search);
      if (this.currentPage !== 1) {
        this.currentPage = 1;
        return;
      }
      this.getProductList();
    },
    //产品列表查询接口
    getProductList() {
      let params = {
        product_name: this.ajaxSearch.productName,
        custom_type_id: this.ajaxSearch.customType,
        product: this.ajaxSearch.productCode,
        pagenum: this.currentPage,
        pagesize: this.pageSize,
        createdate_start: this.ajaxSearch.time[0],
        createdate_end: this.ajaxSearch.time[1]
      };
      this.getDataAjax(params);
    },
    getDataAjax(params) {
       getProductList(params)
        .then(res => {
          this.totalcount = res.data.totalcount;
          this.productList = res.data.productList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    clearConditions() {
      this.search.productName = "";
      this.search.time = "";
      this.search.customType = "";
      this.search.productCode = "";
    },
    // 分页跳转
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getProductList();
    },
    //产品自定义分类列表查询接口
    getListProductType() {
      let params = {
        custom_mould_type: 1,
        pagenum: 1,
        pagesize: 20,
      };
      getListProductType(params)
        .then(res => {
//          this.customListCount = res.data.totalcount;
          this. customTypeList = res.data. customTypeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    initData(params) {
      //查询产品列表信息
      this.getDataAjax(params);
      //查询自定义分类列表
      this.getListProductType();
    }
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#productinfo {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .demo-autocomplete {
    margin-top: 10px;
    .btn-search {
      background-color: transparent;
      color: #03b150;
      margin-left: 8.33333%;
      margin-top: 2px;
    }
    .span-clear {
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
  .el-table {
    width: 100%;
    margin-top: 24px;
  }
  .btn-search {
    background-color: transparent;
    color: #03b150;
    margin-left: 15px;
    margin-top: 2px;
  }
}
</style>
