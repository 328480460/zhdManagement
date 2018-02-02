<template>
  <div id="accountEdit">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" label-width="120px">
          <el-form-item label="账号：">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="角色：">{{form.role_id}}
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="save" >保存</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getEmployeeDetail,
    updateEmployee,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "accountEdit",
    created() {
    },
    data() {
      return{
        form: {
          account: '',
          name: '',
          contacts: '',
          role_id: '',
        },
      }
    },
  mounted(){
    let params ={
      "id":1
    }
    this.initData(params);
  },
    methods: {
      initData(params){
        /**
         * 员工详情查询
         */
        getEmployeeDetail(params)
          .then(res =>{
//            console.log("员工详情---"+JSON.stringify(res))
            let employee = res.data.employee
            this.form.account = employee. account;
            this.form.name = employee. name;
            this.form.contacts = employee. contacts;
            this.form.role_id = employee. role_id;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      /**
       * 员工信息修改
       */
      save() {
        let params ={
          "account":this.form.account,
          "name":this.form.name,
          "contacts":this.form.contacts,
          "role_id":this.form.role_id,
        }
        updateEmployee(params)
          .then(res =>{
            if (res.status == 200) {
              this.$message.success("编辑成功!");
              this.$router.go(-1);
            }
            console.log("--res--"+JSON.stringify(res))
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      }
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#accountEdit {
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
