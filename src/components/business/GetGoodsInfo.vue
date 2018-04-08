<template>
  <div id="getGoodsInfo">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newGetGoodsInfo">新建收货信息</el-button>
      <el-button type="primary" size="medium" class="btn-search">导出</el-button>
    </div>
    <el-form :model="search" :rules="rules" ref="search">
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">信息编号</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入信息编号" prop="serialNumber"  v-model="search.infoNo"></el-input></el-col>
        <el-col :span="2"><div class="sub-title">收货日期</div></el-col>
        <el-col :span="6">
          <el-date-picker v-model="search.time" type="daterange"
                          align="right" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                          :picker-options="pickerOptions2" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">当前节点</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.currentNode" clearable  placeholder="请选择当前节点" width="50px" >
            <el-option  v-for="item in thisNodeOption" :key="item.id" :label="item.node_name"  :value="item.id" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2"><div class="sub-title">来源节点</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.resourceNode" clearable  placeholder="请选择来源节点" width="50px" >
            <el-option  v-for="item in sourceNodedOption" :key="item.id" :label="item.node_name"  :value="item.id" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2"><div class="sub-title">产品名称</div></el-col>
        <el-col :span="4"><el-input v-model="search.productName" placeholder="请输入产品名称"></el-input></el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-button type="primary" size="medium"  @click="searchConditions" class="btn-search" >搜索</el-button>
        <span @click="clearConditions" class="span-clear">清空筛选条件</span>
      </el-row>
    </div>
    </el-form>
    <el-table class="el-table"
              :data="dataList"
              style="width: 100%"
              :default-sort = "{prop: 'receipt_date', order: 'descending'}"
    >
      <el-table-column class="table-column"
                       prop="receipt_num"
                       label="信息编号"
                       align="center"
                       width="120"
    >
    </el-table-column>
      <el-table-column class="table-column"
                       prop="receipt_date"
                       label="收货日期"
                       align="center"
                       width="120"
                       sortable
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="this_node_name"
                       label="当前节点"
                       align="center"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="source_node_name"
                       label="来源节点"
                       align="center"
      >
      </el-table-column>  
      <el-table-column class="table-column"
                       label="产品内容" 
                       align="center"       
                       width="240"            
      >    
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>共计{{scope.row.productList.length}}条,可点击详情查看</p>
            <div slot="reference" >
              <span>{{scope.row.productList[0]}}{{scope.row.productList.length>1?"...":""}}</span>
            </div>
          </el-popover>    
        </template>
      </el-table-column>
      <el-table-column class="table-column"
                       label="操作"
                       align="center"
                       width="100"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="getGoodsInfoDetail(scope.row)">详情</el-button>
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
      @current-change="handleCurrentChange"
      :page-size= 10
      :current-page= 'currentPage'
      :total= 'totalcount'>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import { getReceiptList, getListNode, deleteReceipt } from "../../assets/js/business/ajax.js";
import { deepCopy } from "../../assets/js/api/util.js";

export default {
  data() {
    return {  
      menu: '',
      totalcount: 0,
      dataList: [],
      search: {
        infoNo: "",
        time: "",
        currentNode: "",
        resourceNode: "",
        productName: "",

        serialNumber:""
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
      },
      thisNodeOption: [],
      sourceNodedOption: [],
      rules:{
        serialNumber:[
          { required: true, message: '请输入信息编号', trigger: 'blur' }
        ]        
      }
    };
  },
  mounted() {
    let params = {
      this_node_id: "",
      resource_nodeid: "",
      info_no: "",
      pagenum: 1,
      pagesize: 10,
      product_name: "",
      receiptdate_start: "",
      receiptdate_end: ""
    };
    this.initData(params);
    this.ajaxSearch = deepCopy(this.search);
    this.menu = JSON.parse(localStorage.getItem("menu"));
  },
  methods: {   
    newGetGoodsInfo() {
      this.menu.forEach((element,index)=>{
        if(element.node == "business"){
          if(element.menuList[0].menuList[0].edit == 1){            
            this.$emit("openExtraPage", {
              node: "business",
              page: "newGetGoodsInfo",
              name: "新建收货信息",
              id:"5fdec987-991e-440c-9dda-51c8ec953236"
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      })   
    },
    getGoodsInfoDetail(item) {
      this.menu.forEach((element,index)=>{
        if(element.node == "business"){
          if(element.menuList[0].menuList[0].edit == 1){            
            this.$emit("openExtraPage", {
              page: "getGoodsInfoDetail",
              node: "business",
              name: "收货信息详情",
              id:"97728609-9717-48d9-92ff-1d7bcc48dfa2",
              query: { id: item.id }
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      })  
    },
    handleDelete(index, item) {
      this.menu.forEach((element,index)=>{
        if(element.node == "business"){
          if(element.menuList[0].menuList[0].edit == 1){            
            this.$confirm("此操作将删除该产品信息, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              /*删除接口*/
              deleteReceipt({ id: item.id }).then(res => {
                if (res.status == 200) {
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  });
                  // 重新请求当前页当前条件数据
                  this.getProductList()
                }
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除"
              });
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      }) 
      
    },
    searchConditions(current) {
      this.ajaxSearch = deepCopy(this.search);
      if (this.currentPage !== 1) {
        this.currentPage = 1;
        return;
      }
      this.getProductList();
    },
    clearConditions() {
      this.search.infoNo = "";
      this.search.time = "";
      this.search.currentNode = "";
      this.search.resourceNode = "";
      this.search.productName = "";
    },
    // 分页跳转
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getProductList();
    },
    // format  产品字段
    formatProductList(productGoodsList) {      
      productGoodsList.forEach(element => {
        let _productionList = "",dataArr=[];
        let productList = element.productList;        
        productList.forEach((ele, index) => {
          _productionList += `${ele["product_name"]}(${ele["product"]})`          
          if(ele["product_num"]){
            _productionList += `-${ele["product_batch_num"]}`;
            _productionList += `-${ele["product_num"]} `;
          }else{
            _productionList += `-${ele["product_batch_num"]} `;
          }          
        });
       
        // element.productList = _productionList;
        dataArr = _productionList.split(" ");
        dataArr.length>1?dataArr.pop():dataArr;        
        element.productList = dataArr;
      });      
      return productGoodsList;
    },
    initData(params) {
      this.getDataAjax(params);
      this.loadNodeData();
    },
    getProductList() {
      let params = {
        this_node_id: this.ajaxSearch.currentNode,
        resource_nodeid: this.ajaxSearch.resourceNode,
        info_no: this.ajaxSearch.infoNo,
        product_name: this.ajaxSearch.productName,
        receiptdate_start: this.ajaxSearch.time[0],
        receiptdate_end: this.ajaxSearch.time[1],
        pagenum: this.currentPage,
        pagesize: this.pageSize
      };
      this.getDataAjax(params);
    },
    loadNodeData() {
      // 请求当前节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.thisNodeOption = res.data.nodeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
      // 请求来源节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.sourceNodedOption = res.data.nodeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    getDataAjax(params) {
      getReceiptList(params)
        .then(res => {
          this.dataList = this.formatProductList(res.data.receiptList) ;          
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

</style>
<style rel="stylesheet/less" lang='less'>
.el-table{
  .sort-caret {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    position: absolute;
    left: 7px;    
  }
  .sort-caret.ascending {
    border-bottom-color: #ccc;
    top: 5px;
  }
  .ascending .sort-caret.ascending {
    border-bottom-color: #28B505;
  }
  .sort-caret.descending {
    border-top-color: #ccc;
    bottom: 7px;
  }
  .descending .sort-caret.descending {
    border-top-color: #28B505;
  }
}
</style>
