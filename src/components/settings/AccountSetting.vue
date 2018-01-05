<template>
  <div id="account">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" :rules="rules" label-width="120px">
          <el-form-item label="账号：">
            <el-input v-model="form.phonenum"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.phonenum"></el-input>
          </el-form-item>
          <el-form-item label="角色：">超级管理员
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('form')" >保存</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "account",
    created() {
    },
    data() {
      return{
        form: {
          contacts: '',
          phonenum: ''
        },
        rules: {
//          contacts: [
//            { required: true, message: '联系人姓名', trigger: 'blur' }
//          ],
//          phonenum: [
//            { required: true, message: '联系人手机号', trigger: 'blur' }
//          ]
        }
      }
    },
    methods: {
      /**
       * 表单验证？？？无效
       * @param form
         */
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {

            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
      width: 600px;
    }
  }
}
</style>
