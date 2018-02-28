<template>
  <div id="getGoodsInfo">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="applyTraceCode">申请溯源码</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">产品名称</div></el-col>
        <el-col :span="4">
            <el-select v-model="search.productName" clearable  placeholder="请输入产品名称" width="50px" >
                <el-option  v-for="item in productOption" :key="item.id" :label="item.product_name"  :value="item.id" >
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="2"><div class="sub-title">申请日期</div></el-col>
        <el-col :span="6">
          <el-date-picker v-model="search.time" type="daterange"
                          align="right" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                          :picker-options="pickerOptions2" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">审核状态</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.status" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in statusOption" :key="item.value" :label="item.label"  :value="item.value" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2"><div class="sub-title">申请单号</div></el-col>
        <el-col :span="4"><el-input v-model="search.applyCode" placeholder="请输入内容"></el-input></el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-button type="primary" size="medium"  @click="searchConditions" class="btn-search" >搜索</el-button>
        <span @click="clearConditions" class="span-clear">清空筛选条件</span>
      </el-row>
    </div>

    <el-table class="el-table"
              :data="dataList"
              style="width: 100%"
              >
        <!-- <el-table-column class="table-column" type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                </el-form-item>
                </el-form>
            </template>
        </el-table-column> -->

        <el-table-column class="table-column"
                       prop="code_apply_num"
                       label="申请单号"
        >
        </el-table-column>
        <el-table-column class="table-column"
                       prop="apply_date"
                       label="申请日期"
        >
        </el-table-column>
        <el-table-column class="table-column"
                       prop="product_name"
                       label="产品名称"
        >
        </el-table-column>
        <el-table-column class="table-column"
                       prop="used_count"
                       label="已用数量"
        >
        </el-table-column>
        <el-table-column class="table-column"
                       prop="count"
                       label="申请数量"
        >
        </el-table-column>
        <el-table-column class="table-column"
                        prop="status_desc"
                        label="审核状态"
        >
        </el-table-column>
    </el-table>

    <el-pagination
      background
      style="margin-top: 15px"
      layout="total,prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size= 10
      :current-page= 'currentPage'
      :total= 'totalcount'>
    </el-pagination>
    <div class="applyCode" v-show='openApplyModal'>
        <div class="content el-message-box">
            <h5 class="title">申请溯源码</h5>
            <el-row class="demo-autocomplete">
                <el-col :span="6"><div class="sub-title">产品名称</div></el-col>
                <el-col :span="12">
                    <el-select v-model="applyProductName" clearable  placeholder="请输入产品名称" width="50px" >
                        <el-option  v-for="item in productOption" :key="item.id" :label="item.product_name"  :value="item.id" >
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row class="demo-autocomplete">
                <el-col :span="6"><div class="sub-title">溯源码数量</div></el-col>
                <el-col :span="12"><el-input v-model="applyNum" placeholder="请输入申请数量"></el-input></el-col>
            </el-row>
            <div class="btn">
                <el-button type="primary" size="small" @click="confirm">确定</el-button>
                <el-button type="info" size="small" plain @click="cancle">取消</el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {
  codeApply,
  getProductList,
  createCodeApply
} from "../../assets/js/trace/ajax.js";
import { deepCopy } from "../../assets/js/api/util.js";

export default {
  data() {
    return {
      applyProductName: "",
      applyNum: "",
      openApplyModal: false,
      totalcount: 0,
      dataList: [],
      search: {
        productName: "",
        time: "",
        status: "",
        applyCode: ""
      },
      productOption: "",
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
      },
      statusOption: [
        { value: "0", label: "未审核" },
        { value: "1", label: "已审核" },
        { value: "2", label: "未通过" }
      ]
    };
  },
  mounted() {
    let params = {
      code_apply_num: "",
      pagenum: 1,
      pagesize: 10,
      product_id: "",
      apply_startdate: "",
      apply_enddate: "",
      status: ""
    };
    this.initData(params);
    this.ajaxSearch = deepCopy(this.search);
  },
  methods: {
    cancle() {
      this.openApplyModal = false;
    },
    confirm() {
      if (!this.applyProductName) {
        this.$message.warn("请选择产品");
        return;
      }
      if (!this.applyNum) {
        this.$message.warn("请输入数量");
        return;
      }
      let params = {
        count: this.applyNum,
        product_id: this.applyProductName
      };
      createCodeApply(params)
        .then(res => {
          if (res.status === 200) {
            this.openApplyModal = false;
            this.$message.success("申请成功");
            this.applyNum = "";
            this.applyProductName = "";
            Object.keys(this.search).forEach((key) => {
                this.search[key] = ''
            })
            let params = {
                code_apply_num: "",
                pagenum: 1,
                pagesize: 10,
                product_id: "",
                apply_startdate: "",
                apply_enddate: "",
                status: ""
            };
            this.initData(params);
          }
        })
        .catch(() => {
          this.$message.error("申请失败!");
        });
    },
    applyTraceCode() {
      this.openApplyModal = true;
    },
    searchConditions(current) {
      this.ajaxSearch = deepCopy(this.search);
      if (this.currentPage !== 1) {
        this.currentPage = 1;
        return;
      }
      this.getApplyCodeList();
    },
    clearConditions() {
      this.search.productName = "";
      this.search.time = "";
      this.search.status = "";
      this.search.applyCode = "";
    },
    // 分页跳转
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getApplyCodeList();
    },
    initData(params) {
      this.getDataAjax(params);
      this.loadProductionType();
    },
    loadProductionType() {
      getProductList({ pagesize: "100", pagenum: "1" })
        .then(res => {
          this.productOption = res.data.productList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    getApplyCodeList() {
      let params = {
        code_apply_num: this.ajaxSearch.applyCode,
        status: this.ajaxSearch.status,
        product_id: this.ajaxSearch.productName,
        apply_startdate: this.ajaxSearch.time[0],
        apply_enddate: this.ajaxSearch.time[1],
        pagenum: this.currentPage,
        pagesize: this.pageSize,
        
      };
      this.getDataAjax(params);
    },
    getDataAjax(params) {
      codeApply(params)
        .then(res => {
          this.dataList = res.data.applyCode;
          this.totalcount = res.data.totalcount;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    }
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#getGoodsInfo {
  margin: 10px;
  padding: 10px;
  height: 94%;
  background-color: #fff;
  .btn-search {
    background-color: transparent;
    color: #03b150;
  }
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
}
.applyCode {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99999;
  text-align: center;
  .content {
    margin-top: 200px;
    padding: 20px;
    .title {
      border-bottom: 1px solid #e5e6e7;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .btn {
      text-align: right;
      margin-top: 20px;
    }
  }
}
</style>
