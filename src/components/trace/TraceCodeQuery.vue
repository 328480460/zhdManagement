<template>
  <div id="traceCodeQuery" >
    <div class="traceCode-search">
      <el-row>
        <el-col :span="4"><el-input placeholder="请输入追溯码" v-model="search.code" style="padding-left: 20px"></el-input></el-col>
        <el-button type="primary" size="medium" @click="searchConditions" class="btn-search" >查询</el-button>
      </el-row>
    </div>
    <div v-show="searchContent">
      <div class="product-info">
        <div class="product-title">产品信息</div>
        <div class="product-line"></div>
        <div class="product-contain">
          <el-row class="product-row">
            <el-col :span="2"><div class="sub-title">产品名称：</div></el-col>
            <el-col :span="6"><div class="sub-title">{{search.productName}}</div></el-col>
            <el-col :span="2"><div class="sub-title">产品编码：</div></el-col>
            <el-col :span="6"><div class="sub-title">{{search.productNum}}</div></el-col>
            <el-col :span="2"><div class="sub-title">产品批次号：</div></el-col>
            <el-col :span="6"><div class="sub-title">{{search.batchNum}}</div></el-col>
          </el-row>
          <el-row class="product-row">
            <el-col :span="2"><div class="sub-title">产品分类：</div></el-col>
            <el-col :span="6"><div class="sub-title">{{search.productType}}</div></el-col>
            <el-col :span="2"><div class="sub-title">包装规格：</div></el-col>
            <el-col :span="6"><div class="sub-title">{{search.norms}}</div></el-col>
          </el-row>
        </div>
      </div>
      <div class="product-info">
        <el-collapse v-model="activeNames" class="collapse-cont">
          <el-collapse-item title="▼来源节点" name="1">
            <!--多个来源节点循环-->
            <div class="collapse-item" v-for="(item, key) in receiptNode" :key="key">
              <div class="item-title">{{item.node_name}}</div>
              <div class="product-contain">
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.node_type_name}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.contacts}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.contacts_phone}}</div></el-col>
                </el-row>
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                  <el-col :span="20"><div class="sub-title">{{item.node_address}}</div></el-col>
                </el-row>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="▼当前节点" name="2">
            <div class="collapse-item">
              <div class="item-title">{{search.nodeName}}</div>
              <div class="product-contain">
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{search.nodeType}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{search.contacts}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{search.contactPhone}}</div></el-col>
                </el-row>
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                  <el-col :span="20"><div class="sub-title">{{search.nodeAddress}}</div></el-col>
                </el-row>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="▼流向节点" name="3">
            <!--多个流向节点循环-->
            <div class="collapse-item" v-for="(item, key) in invoiceNode" :key="key">
              <div class="item-title">{{item.node_name}}</div>
              <div class="product-contain">
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.node_type_name}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.contacts}}</div></el-col>
                  <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                  <el-col :span="6"><div class="sub-title">{{item.contacts_phone}}</div></el-col>
                </el-row>
                <el-row class="product-row">
                  <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                  <el-col :span="20"><div class="sub-title">{{item.node_address}}</div></el-col>
                </el-row>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getDetailCode,
  } from "../../assets/js/trace/ajax.js";
export default {
  name: "traceCodeQuery",
  created() {
  },
  data() {
    return {
      search:{
        code:'',
        productName:'',
        productNum:'',
        batchNum:'',
        productType:'',
        norms:'',
        nodeName:'',
        nodeType:'',
        contacts:'',
        contactPhone:'',
        nodeAddress:'',
      },
      searchContent:false,
//      activeNames: ['1'],
      activeNames: [],
      receiptNode: [],
      this_node: [],
      invoiceNode: [],
    }
  },

  methods: {

    /*"搜索"---追溯码*/
    searchConditions() {
      let params={
        code:this.search.code
      }
      if(this.search.code == ''){
        this.$message.warning("请输入“追溯码”！");
      }else{
        this.getDetailCode(params)
      }
    },
    getDetailCode(params){
      getDetailCode(params)
        .then(res => {
          if (res.status == 200) {
            //显示v-show搜索内容
            this.searchContent=true
            //产品信息
            var product = res.data.code.product
            this.search.productName = product.product_name
            this.search.productNum = product.product
            this.search.batchNum = product.product_batch_num
            this.search.productType = product.product_type_name
            this.search.norms = product.norms
            //来源节点（多个）
            var receiptNode = res.data.code.receiptNode
            this.receiptNode = receiptNode
            //当前节点
            var this_node = res.data.code.this_node
            this.search.nodeName= this_node.node_name
            this.search.nodeType = this_node.node_type_name
            this.search.contacts = this_node.contacts
            this.search.contactPhone = this_node.contacts_phone
            this.search.nodeAddress = this_node.node_address
            //流向节点（多个）
            var invoiceNode = res.data.code.invoiceNode
            this.invoiceNode = invoiceNode
            this.$message.success(res.msg);
          }
          else if(res.status == 500){
            this.$message.warning(res.msg);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #traceCodeQuery {
    margin: 10px;
    padding: 10px;
    height: 100%;
    background-color: #fff;
    .traceCode-search{
    }
    .product-info {
      margin-top: 20px;
      width: 100%;
      height: auto;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      .product-title{
        width: 100%;
        padding: 10px;
        font-weight: bold;
      }
      .product-line{
        border-bottom: 1px solid #dcdfe6;;
      }
      .product-contain{
        padding: 10px;
        .product-row{
          padding: 10px;
        }
      }
    }
    .collapse-cont{
      padding-left: 10px;
      padding-right: 10px;
      .collapse-item{
        border: 1px solid #dcdfe6;
        .item-title{
          padding: 5px;
          font-weight: bold;
          border-bottom: 1px solid #dcdfe6;;
        }
      }
    }
    .btn-search{
      margin-left: 40px;
      margin-top: 2px;
    }
  }
</style>
