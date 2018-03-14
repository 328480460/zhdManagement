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
          id: '',
          account: '',
          name: '',
          password: '',
          role_id: '',
        },
        userid:'',
      }
    },
  mounted(){
    let params ={
      "id":JSON.parse(localStorage.userid)
    }
    this.initData(params);
  },
    methods: {
      initData(params){
        //企业详情查询接口
        getEmployeeDetail(params)
          .then(res =>{
            let employee = res.data.employee
            this.form.account = employee. account;
            this.form.name = employee. name;
            this.form.password = employee.contacts;
            this.form.role_id = employee. role_id;
            this.form.id = employee. id;
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
          query: { id: this.form.id },
        });
      }
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#account {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      margin-top: 20px;
      width: 600px;
    }
  }
}
</style>
