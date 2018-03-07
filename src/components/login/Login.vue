<template >
  <div id="login">
    <div class="navbar_login">
      <div class="navbar-logo">
        <img src="../../assets/image/logo_t.png" alt="logo_title" class="logo">
      </div>
    </div>

    <div class="content">
      <div class="login-box">
        <form class="form-field">
          <div class="form-title">系 统 登 录</div>
          <div class="inner">
            <img src="../../assets/image/account_icon.png" alt="account_icon">
            <input class="form-control"
               type="text" v-model="accountName" placeholder="输入账号" @keyup.enter="loginBt"/>
          </div>
          <div class="form-line">
          </div>
          <div class="inner">
            <img src="../../assets/image/password_icon.png" alt="account_icon">
            <input class="form-control" type="password" v-model="password" placeholder="输入密码" @keyup.enter="loginBt"/>
          </div>
          <div class="form-line">
          </div>
          <div class="rememeber-pwd">
            <el-checkbox v-model="checked">记住账号</el-checkbox>
          </div>
          <div class="submit-button">
            <el-button type="success" @click="loginBt" class="button">登录</el-button>
          </div>
        </form>
      </div>
    </div>

    <div class="footer">
      <div class="form-line">
      </div>
      <p class="copyright">版权所有©北京志恒达科技有限公司-京ICP备05030152号</p>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
import {login} from "../../assets/js/login/ajax.js";
import PointLine from '../../assets/js/login/canvas.js';
export default {
  name: 'login',
  data(){
    return{
      checked:false,
      accountName: '',
      password: '',
      enterprise_id: '',
      isLogin:true,
    };
  },
  mounted() {
    const pointLine = new PointLine();
    if(JSON.stringify(localStorage.checked) != null){
        // console.log("checked---"+JSON.stringify(localStorage.checked))
      var userid = JSON.stringify(JSON.parse(localStorage.userid))
      this.accountName = JSON.parse(localStorage.account)
      // this.password = JSON.parse(localStorage.password)
      this.enterprise_id = JSON.parse(localStorage.enterprise_id)
      this.checked = JSON.parse(localStorage.checked)
    }else {
      console.log("unchecked---")
    }
  },
  methods:{
    loginBt(){
      if(this.accountName == ''){
          this.warn1()
      }else if(this.password == ''){
          this.warn2()
      }else{
          /*登录接口*/
        let param = {
          account: this.accountName,
          password: this.password,
          enterprise_id:1
        }
        login(param)
          .then(res => {
            if (res.status == 200){
              //userid存本地
              localStorage.setItem('userid',JSON.stringify(res.data.user.id));
              sessionStorage.setItem('isLogin', 1);
              // console.log("login的userid---"+JSON.stringify(res.data.user.id))
              // 命名的路由
              this.$router.push({ name: 'Home'})

              //记住账号
              if(this.checked == true){
                localStorage.setItem('account',JSON.stringify(this.accountName))
                // localStorage.setItem('password',JSON.stringify(this.password))
                localStorage.setItem('enterprise_id',JSON.stringify(1))
                localStorage.setItem('checked',JSON.stringify(true))
              }else {
                //清除本地缓存
                localStorage.clear()
              }
              //本地存储-----进入系统内需要使用
              localStorage.setItem('userid',JSON.stringify(res.data.user.id))
              localStorage.setItem('username',JSON.stringify(res.data.user.name))
              localStorage.setItem('enterprise_id',JSON.stringify(res.data.user.enterprise_id))

              // 命名的路由
              this.$router.push({ name: 'Home'})
            }
            else if (res.status == 201){
              this.$message.error(res.msg);
            }
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      }
    },
    warn1() {
      this.$message.error('账号不能为空！');
    },
    warn2() {
      this.$message.error('密码不能为空！');
    },
  }
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#login {
  background-attachment: fixed;
  background-size: cover;
  .navbar_login {
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 76px;
    background-color: transparent;
    z-index: 1;
    .navbar-logo{
      float: left;
      margin-top: 15px;
      margin-left: 10%;
      .navbar-title{
        color: white;
        font-size: 22px;
        line-height: 52px;
      }
    }
  }
  .content{
    box-shadow: 0 0 10px 4px #E7E7E7;
    width: 460px;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -230px 0 0 -230px;
    background-color: white;
    border-radius: 4px;
    .login-box{
      display: block;
      margin-left: 8%;
      margin-right: 8%;
      .form-field{
        display: block;
        width: 100%;
        color: #333333;
        .form-title{
          color: #22ab38;
          font-size: 28px;
          line-height: 54px;
          margin-top: 50px;
          margin-bottom: 50px;
          font-weight: bold;
          text-align: center;
        }
        .inner{
          font-size: 18px;
          margin-top: 15px;
          margin-bottom: 15px;
          margin-left: 10px;
          .form-control{
            background-color: transparent;
            border-bottom: 1px solid transparent;
            border: 0;
            font-size: 18px;
            padding-left: 15px;
            outline: none;
            color: #999999;
          }
          .form-control :focus{
            border-bottom: 1px solid #22ab38;
            border-top:0;
            border-left:0;
            border-right:0;
            outline: none;
          }
        }
        .submit-button{
          height: 50px;
          border:none;
          text-align: center;
          border-radius:5px;
          color: white;
          font-size: 18px;
          line-height: 50px;
          margin-top: 40px;
          button{
            border: none;
            color: white;
            width: 100%;
            font-size: 18px;
            background-color: #22ab38;
          }
        }
        .rememeber-pwd{
          text-align: center;
          width: 100%;
          height: 38px;
          line-height: 38px;
          font-size: 16px;
          margin: 15px;
        }
        .rememeber-pwd label{
          float: left;
          color: #666666;
        }
      }
    }
  }
  .form-line{
    border-bottom: 1px solid #ededed;
  }
  #canvas {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .footer{
    position: fixed; /*or前面的是absolute就可以用*/
    bottom: 18px;
    text-align: center;
    width:100%;
    .copyright{
      font-size: 14px;
      color: #989898;
    }
  }
}
</style>
