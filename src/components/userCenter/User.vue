<template>
    <div class="user">
      <img src="../../assets/image/icon1.png" alt="icon_inform" class="icon">
      <img src="../../assets/image/icon2.png" alt="icon_help" class="icon">
      <img src="../../assets/image/icon3.png" alt="icon_user" class="icon">

      <span @click="userEvent" style="cursor: pointer;">管理员<i class="el-icon-caret-bottom" style="color: #C4BDBD"></i></span>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "user",
        created() {
        },
        data() {
        },
        methods: {}
    };
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #user{
    background: repeat;
    width: auto;
    float: right;
    text-align: center;
    display: flex;
    align-items: center;
    margin-right: 10px;
    .icon{
      cursor: pointer;
      margin: 10px 5px 10px 20px;
    }
  }
</style>
