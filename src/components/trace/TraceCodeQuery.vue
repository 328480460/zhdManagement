<template>
  <div id="traceCodeQuery" >
    <div class="traceCode-search">
      <el-row>
        <el-col :span="4"><el-input placeholder="请输入追溯码" v-model="search.code" style="padding-left: 20px"></el-input></el-col>
        <el-button type="primary" size="medium" @click="searchConditions" class="btn-search" >查询</el-button>
      </el-row>
    </div>
    <div class="product-info">
      <div class="product-title">产品信息</div>
      <div class="product-line"></div>
      <div class="product-contain">
        <el-row class="product-row">
          <el-col :span="2"><div class="sub-title">产品名称：</div></el-col>
          <el-col :span="6"><div class="sub-title">顺鑫·鑫源·牛肉{{search.productName}}</div></el-col>
          <el-col :span="2"><div class="sub-title">产品编码：</div></el-col>
          <el-col :span="6"><div class="sub-title">0100006{{search.productNum}}</div></el-col>
          <el-col :span="2"><div class="sub-title">产品批次号：</div></el-col>
          <el-col :span="6"><div class="sub-title">20170930{{search.batchNum}}</div></el-col>
        </el-row>
        <el-row class="product-row">
          <el-col :span="2"><div class="sub-title">产品分类：</div></el-col>
          <el-col :span="6"><div class="sub-title">牛肉{{search.productType}}</div></el-col>
          <el-col :span="2"><div class="sub-title">包装规格：</div></el-col>
          <el-col :span="6"><div class="sub-title">箱{{search.norms}}</div></el-col>
        </el-row>
      </div>
    </div>
    <div class="product-info">
      <el-collapse v-model="activeNames" @change="handleChange" class="collapse-cont">
        <el-collapse-item title="▼来源节点" name="1">
          <!--多个来源节点循环-->
          <div class="collapse-item">
            <div class="item-title">顺鑫鑫源正蓝旗肉牛养殖基地{{search.productName}}</div>
            <div class="product-contain">
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                <el-col :span="6"><div class="sub-title">养殖场1{{search.nodeType}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                <el-col :span="6"><div class="sub-title">马云1{{search.contact}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                <el-col :span="6"><div class="sub-title">13579246810{{search.contactPhone}}</div></el-col>
              </el-row>
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                <el-col :span="20"><div class="sub-title">内蒙古自治区锡林郭勒盟正蓝旗哈比日嘎镇朝阳村1{{search.nodeAddress}}</div></el-col>
              </el-row>
          </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="▼当前节点" name="2">
          <div class="collapse-item">
            <div class="item-title">顺鑫鑫源正蓝旗肉牛养殖基地{{search.productName}}</div>
            <div class="product-contain">
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                <el-col :span="6"><div class="sub-title">养殖场2{{search.nodeType}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                <el-col :span="6"><div class="sub-title">马云2{{search.contact}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                <el-col :span="6"><div class="sub-title">13579246810{{search.contactPhone}}</div></el-col>
              </el-row>
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                <el-col :span="20"><div class="sub-title">内蒙古自治区锡林郭勒盟正蓝旗哈比日嘎镇朝阳村2{{search.nodeAddress}}</div></el-col>
              </el-row>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="▼流向节点" name="3">
          <div class="collapse-item">
            <div class="item-title">顺鑫鑫源正蓝旗肉牛养殖基地{{search.productName}}</div>
            <div class="product-contain">
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点分类：</div></el-col>
                <el-col :span="6"><div class="sub-title">养殖场3{{search.nodeType}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系人：</div></el-col>
                <el-col :span="6"><div class="sub-title">马云3{{search.contact}}</div></el-col>
                <el-col :span="2"><div class="sub-title">联系电话：</div></el-col>
                <el-col :span="6"><div class="sub-title">13579246810{{search.contactPhone}}</div></el-col>
              </el-row>
              <el-row class="product-row">
                <el-col :span="2"><div class="sub-title">节点地址：</div></el-col>
                <el-col :span="20"><div class="sub-title">内蒙古自治区锡林郭勒盟正蓝旗哈比日嘎镇朝阳村3{{search.nodeAddress}}</div></el-col>
              </el-row>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
        nodeType:'',
        contact:'',
        contactPhone:'',
        nodeAddress:'',
      },
      activeNames: ['1']
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
        console.log("code---"+JSON.stringify(params))

      }
    },
    handleChange(val) {
//      console.log("折叠面板---"+val);
    }
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
