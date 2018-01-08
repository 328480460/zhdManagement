<template>
  <div id="productinfo">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProduct">新建产品</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">产品名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入产品名称"  v-model="search.productName" :fetch-suggestions="querySearch" ></el-input></el-col>
        <el-col :span="3"><div class="sub-title">创建日期</div></el-col>
        <el-col :span="6">
          <el-date-picker v-model="search.time" type="daterange"
                          align="right" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                          :picker-options="pickerOptions2"  ></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.userDefineType" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in userDefineType" :key="item.value" :label="item.label"  :value="item.value" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><div class="sub-title">产品编码</div></el-col>
        <el-col :span="4"><el-input v-model="search.productCode" placeholder="请输入内容"></el-input></el-col>
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
                       prop="id"
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
            @click="editProduct">编辑</el-button>
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size=10
      :total= totalcount>
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: "productinfo",
  data() {
    return {
      totalcount: 0,
      productList: [],
      pagenum:1,
      search: {
        productName: '',
        time: '',
        userDefineType: '',
        productCode: ''
      },
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
      },
      userDefineType: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

    };
  },
  created() {

  },
  mounted() {
    this.loadAll();
  },
  methods: {
    newProduct() {
      this.$emit("openExtraPage", {
        node: 'production',
        page: "newProduct",
        name: "新建产品",
        id: "01010101"
      });
    },
    querySearch(queryString, cb) {
      this.productName = queryString
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    editProduct() {
      this.$emit("openExtraPage", {
        page: "EditProduct",
        name: "编辑产品",
        id: "01010102"
      });
    },
    handleDelete(index, row) {
      this.delete()
    },
    delete() {
      this.$confirm('此操作将删除该产品信息, 是否继续?', '提示', {
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
    searchConditions(){
      /*"搜索"---查询产品列表接口*/
      let that = this
      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
          pagenum: that.pagenum,
          pagesize: 10,
          product_code:'',
          product_name:that.productName,
        })
        .then(function (response) {
          console.log("input产品名称==="+that.productName);

          that.totalcount = response.data.data.totalcount;
          that.productList = response.data.data.productList;

        })
        .catch(function (error) {
          console.log(error);
        });

    },
    clearConditions(){
      console.log("清空筛选条件");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pagenum = val
      console.log(`当前页: ${this.pagenum}`);
    },
    loadAll() {
      let that = this;
      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
          pagenum: that.pagenum,
          pagesize: 10,
          product_code:'',
          product_name:'',
        })
        .then(function (response) {
          // console.log("查询产品列表==="+JSON.stringify(response.data));
          // console.log(response.data.data);
          that.totalcount = response.data.data.totalcount ;
          that.productList = response.data.data.productList;
        })
        .catch(function (error) {
          console.log(error);
        });
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
    text-align: center;
    margin-top: 24px;
    .table-column{
    }
  }
}
</style>
