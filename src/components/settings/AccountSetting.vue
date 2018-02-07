<template>
  <div id="account">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" label-width="120px">
          <el-form-item label="账号：">{{form.account}}
            <!--<el-input v-model="form.phonenum"></el-input>-->
          </el-form-item>
          <el-form-item label="姓名：">{{form.name}}
            <!--<el-input v-model="form.contacts"></el-input>-->
          </el-form-item>
          <el-form-item label="联系方式：">{{form.password}}
            <!--<el-input v-model="form.phonenum"></el-input>-->
          </el-form-item>
          <el-form-item label="角色：">{{form.role_id}}
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="editPage" >编辑</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getEmployeeDetail,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "account",
    created() {
    },
    data() {
      return{
        form: {
          account: '',
          name: '',
          password: '',
          role_id: '',
        },
        userid:'',
      }
    },
  mounted(){
//    var userid = JSON.parse(localStorage.userid)
    console.log("accountSetting-userid--???--"+JSON.stringify(localStorage.userid))
    let params ={
      "id":1,
      //？？？userid解析问题？？
//      "id":userid
    }
    this.initData(params);
  },
    methods: {
      initData(params){
        /**
         * 企业详情查询
         */
        getEmployeeDetail(params)
          .then(res =>{
//            console.log("员工详情---"+JSON.stringify(res))
            let employee = res.data.employee
            this.form.account = employee. account;
            this.form.name = employee. name;
            this.form.password = employee.contacts;
            this.form.password = employee.contacts;
            this.form.role_id = employee. role_id;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      editPage() {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "accountSettingEdit",
          name: "编辑账号信息",
          id: "03020102",
          query: { id: 1 },
        });
      }
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#account {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      margin-top: 20px;
      width: 600px;
    }
  }
}
</style>
