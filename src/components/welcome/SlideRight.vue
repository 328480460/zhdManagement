<template>
  <div class="slide-right">
    <div class="slide_section">
      <img src="../../assets/image/welcome_1.png" alt="welcome_help" class="right-icon">
      <h4 class="right-text">帮助中心</h4>
      <!--<img src="../../assets/image/arrow_right.png" alt="arrow_right" class="arrow_right">-->
    </div>
    <div class="viewline">
    </div>
    <div class="slide_section">
      <img src="../../assets/image/welcome_2.png" alt="welcome_service" class="right-icon">
      <h4 class="right-text">服务中心</h4>
    </div>
    <div class="viewline">
    </div>
    <div class="slide_section">
      <img src="../../assets/image/welcome_3.png" alt="welcome_evaluate" class="right-icon">
      <h4 class="right-text">评价与反馈</h4>
    </div>
    <div class="viewline">
    </div>
    <div class="slide_section">
      <img src="../../assets/image/welcome_4.png" alt="welcome_inform" class="right-icon">
      <h4 class="right-text">产品动态</h4>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "slide-right",
        created() {
        },
        data() {
          return {};
        },
        methods: {}
    };
</script>

<style rel="stylesheet/less" lang='less' scoped>
  .slide-right{
    width: 20%;
    height: auto;
    background-color: white;
    .slide_section{
      height: 30px;
      padding:  10px 5px;
    }
    .viewline{
      border-bottom: 1px solid #eeeeee;
    }
    .right-icon{
      float: left;
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
    .arrow_right{
      float: right;
    }
    .right-text{
      float: left;
      line-height: 30px;
    }
  }

</style>
