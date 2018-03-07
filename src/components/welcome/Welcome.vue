<template>
  <div class="welcome" id="welcome">
    <div class="custom-name">
      <div class="welcom_title">北京顺鑫鑫源食品有限公司</div>
      <User ></User>
    </div>
    <div class="general-wrapper">
      <div class="section">
        <div class="header">
          <h4 class="title">概况</h4>
          <div class="time">更新时间：2017-12-25  17:10</div>
        </div>
        <div class="box-wrapper">
          <div class="box-item">
            <div class="name">产品数量</div>
            <div class="num">18<span class="unit">个</span></div>
          </div>
          <div class="box-item">
            <div class="name">产品数量</div>
            <div class="num">18<span class="unit">个</span></div>
          </div>
          <div class="box-item">
            <div class="name">产品数量</div>
            <div class="num">18<span class="unit">个</span></div>
          </div>
          <div class="box-item">
            <div class="name">产品数量</div>
            <div class="num">18<span class="unit">个</span></div>
          </div>
        </div>

      </div>
      <div class="section">
        <h4 class="title">常用功能</h4>
        <div class="func-wrapper">
          <div class="func-item"><i class="el-icon-document"></i>新建收货</div>
          <div class="func-item"><i class="el-icon-document"></i>新增产品</div>
          <div class="func-item"><i class="el-icon-document"></i>添加节点</div>
          <div class="func-item"><i class="el-icon-document"></i>链条合成</div>
        </div>
      </div>
      <div class="section">
        <h4 class="title">近7天追溯数据量趋势</h4>
        <div class="echars-wrapper" id="echars" style="width: 1200px;height:500px;"></div>
      </div>
    </div>
    <div class="help-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
import User from '../userCenter/User';

export default {
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
  },
  data() {
    return {};
  },
  components: {
    User
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
.general-wrapper {
  padding: 10px 20px 10px 30px;
  background-color: #c0c4cc12;
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
        width: 10%;
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
</style>
