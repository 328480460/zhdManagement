<template>
  <div class="user_content">
    <div class="user">
      <!--<User></User>-->
      <img src="../../assets/image/icon1.png" alt="icon_inform" class="icon">
      <img src="../../assets/image/icon2.png" alt="icon_help" class="icon">
      <img src="../../assets/image/icon3.png" alt="icon_user" class="icon">
      <span @click="toggle" style="cursor: pointer;font-size: 15px">{{username}}<i class="el-icon-caret-bottom" style="color: #C4BDBD"></i></span>
    </div>
    <div v-show="userItemToggle" class="user_toggle">
      <table>
        <tr>
          <td>修改密码</td>
        </tr>
        <tr>
          <td @click="exit">退出</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {logout} from "../../assets/js/login/ajax.js";
    export default {
        name: "user",
        created() {
        },
      data() {
        return {
          userItemToggle:false,
          username:'',
        };
      },
      mounted(){
        this.username = JSON.parse(localStorage.username)
      },
      methods: {
        toggle(){
          this.userItemToggle = !this.userItemToggle;
        },
        exit(){
          logout()
            .then(res => {
              if (res.status == 200){
                window.location.href="/"
                sessionStorage.clear()
                window.close();
              } else{
                this.$message.error(res.msg);
              }
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
        },}
    };
</script>

<style rel="stylesheet/less" lang='less' scoped>
  .user_content{
    width: auto;
    height: auto;
    float: right;
    .user{
      text-align: center;
      display: flex;
      align-items: center;
      margin-right: 10px;
      position:relative;
    }
    .icon{
      cursor: pointer;
      margin: 10px 5px 10px 20px;
    }
    .user_toggle{
      position:absolute;
      right: 10px;
      float: right;
      z-index: 100;
      background: white;
      table {
        font-size: 15px;
        height: 40px;
        text-align: left;
        width: 120px;
        border: 2px solid #eeeeee;
        tr {
          td {
            cursor: pointer;
            font-weight: normal;
            line-height: 40px;
            padding-left: 15px;
            border-bottom: 2px solid #efefef;
          }
        }
      }
    }
  }
</style>
