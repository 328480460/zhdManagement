<template>
  <div class="welcome" id="welcome">
    <div class="custom-name">
      <div class="welcom_title">北京顺鑫鑫源食品有限公司</div>
      <User ></User>
    </div>
    <div class="content-wrapper">
      <div class="general-wrapper">
        <div class="section">
          <div class="header">
            <h4 class="title">概况</h4>
            <div class="time">更新时间：2017-12-25  17:10</div>
          </div>
          <div class="box-wrapper">
            <div class="box-item">
              <div class="name">产品数量</div>
              <div class="num">{{product_num}}<span class="unit">个</span></div>
            </div>
            <div class="box-item">
              <div class="name">节点数量</div>
              <div class="num">{{node_num}}<span class="unit">个</span></div>
            </div>
            <div class="box-item">
              <div class="name">文档数量</div>
              <div class="num">{{file_num}}<span class="unit">个</span></div>
            </div>
            <div class="box-item">
              <div class="name">数据量</div>
              <div class="num">{{data_num}}<span class="unit">个</span></div>
            </div>
          </div>
        </div>
        <div class="section">
          <h4 class="title">常用功能</h4>
          <div class="func-wrapper">
            <div class="func-item" @click="newGetGoodsInfo"><i class="el-icon-document"></i>新增收货</div>
            <div class="func-item" @click="newProduct"><i class="el-icon-document"></i>新增产品</div>
            <div class="func-item"  @click="newNode"><i class="el-icon-document"></i>添加节点</div>
            <div class="func-item"  @click="chainSynthesis"><i class="el-icon-document"></i>链条合成</div>
          </div>
        </div>
        <div class="section">
          <h4 class="title">近7天追溯数据量趋势</h4>
          <div class="echars-wrapper" id="echars" style="width: 95%;height:500px;"></div>
        </div>
      </div>

      <SlideRight ></SlideRight>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
import User from '../userCenter/User';
import SlideRight from '../welcome/SlideRight.vue';
import {
  getViewCount,
} from "../../assets/js/welcome/ajax.js";

export default {
  data() {
    return {
      product_num:'',
      node_num:'',
      file_num:'',
      data_num:'',
      menu:''
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("echars"));
    this.$nextTick(() => {
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: ["12月12日", "12月12日", "12月12日", "12月12日", "12月12日", "12月12日", "12月12日"]
        },
        grid: {
          left: "3%",
          right: "1%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "log",
          name: "y"
        },
        series: [
          {
            name: "数据量",
            type: "line",
            data: [1, 50, 9, 27, 81, 247, 741, 654, 6669],
            color: ['#409eff'],
          }
        ]
      });
    });
    this.menu = JSON.parse(localStorage.getItem("menu"));
    this.initData();       
  },  
  methods:{
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
    newProduct() {
      this.menu.forEach((element,index)=>{
        if(element.node == "production"){
          if(element.menuList[0].menuList[0].edit == 1){
            this.$emit("openExtraPage", {
              node: "production",
              page: "newProduct",
              name: "新建产品",
              id:"697a81d9-7bc0-4856-acd4-81f35ef460e8"
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      })  
    },
    newNode() {
      this.menu.forEach((element,index)=>{
        if(element.node == "node"){
          if(element.menuList[0].menuList[0].edit == 1){
            this.$emit("openExtraPage", {
              node: 'node',
              page: "newNode",
              name: "添加节点",
              id:"f0869847-ff06-44b4-b3bf-bee23f17decd"
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      })       
    },
    chainSynthesis() {
      this.menu.forEach((element,index)=>{
        if(element.node == "trace"){
          if(element.menuList[0].menuList[0].edit == 1){
             this.$emit("openExtraPage", {
              node: 'trace',
              page: "chainSynthesis",
              name: "链条合成",
              id:"7b9e89b5-cd0e-57a3-a2d7-82bb03544239"
            });
          }else{
            this.$message('权限不足,请联系管理员')
            return
          }
        }
      })
    },
    getViewCount(){
      getViewCount()
        .then(res => {
          if (res.status == 200){
            this.product_num = res.data.viewBean.product_num
            this.node_num = res.data.viewBean.node_num
            this.file_num = res.data.viewBean.file_num
            this.data_num = res.data.viewBean.data_num
          }else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    initData(){
      // 概况数据查询接口
      this.getViewCount()
    }
  },
  components: {
    User,
    SlideRight
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.custom-name {
  height: 70px;
  line-height: 70px;
  padding-left: 30px;
  font-size: 22px;
  border-bottom: 1px solid #e4e4e4;
  .welcom_title{
    float: left;
  }
}
.content-wrapper{
  height: auto;
  display: flex;
.general-wrapper {
  float: left;
  padding: 10px 20px;
  background-color: #f9f9f9;
  width: 80%;
  .section {
    box-sizing: border-box;
    padding: 10px 20px 10px 30px;
    background-color: #fff;
    margin-bottom: 20px;
    .header {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      .title {
        position: relative;
        &::before {
          content: "";
          display: block;
          height: 20px;
          width: 2px;
          background-color: #28b505;
          position: absolute;
          top: 50%;
          margin-top: -10px;
          left: -10px;
        }
      }
    }
    .box-wrapper {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      .box-item {
        width: 20%;
        height: 100px;
        border: 1px solid #e4e4e4;
        position: relative;
        text-align: center;
        .name {
          padding: 10px 20px 5px 20px;
          text-align: left;
          font-size: 16px;
        }
        .num {
          font-size: 36px;
          .unit {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }
    .title {
      position: relative;
      font-size: 16px;
      &::before {
        content: "";
        display: block;
        height: 20px;
        width: 2px;
        background-color: #28b505;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        left: -10px;
      }
    }
    .func-wrapper {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      .func-item {
        cursor: pointer;
        width: 20%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border: 1px solid #e4e4e4;
        position: relative;
        text-align: center;
        i {
          padding-right: 5px;
        }
      }
    }
  }
}

}

</style>
