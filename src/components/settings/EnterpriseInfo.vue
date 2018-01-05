<template>
  <div id="enterprise">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" :rules="rules" label-width="120px">
          <el-form-item label="企业名称：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="机构类型：">未提交认证
            <!--<span class="amend_logo" >立即认证</span>-->
            <el-button type="text" class="br_text">立即认证</el-button>
          </el-form-item>
          <el-form-item label="主体信息：">
            <el-input v-model="form.msg"></el-input>
          </el-form-item>
          <el-form-item label="所在地区：">
            <el-input v-model="form.area"></el-input>
            <el-input v-model="form.area" style="margin-top: 20px"></el-input>
          </el-form-item>
          <el-form-item label="开通日期：">2017-11-08 &nbsp 15:24:26
          </el-form-item>
          <el-form-item label="企业LOGO：">
            <img src="../../assets/image/enterprise_logo.png" alt="enterprise_logo" class="enterprise_logo">
            <!--<span class="amend_logo" >修改</span>-->
            <el-button type="text" class="br_text">修改</el-button>
          </el-form-item>
          <el-form-item label="企业简介：">
            <el-input v-model="form.intro" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名：">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系人手机号：">
            <el-input v-model="form.phonenum"></el-input>
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
    name: "enterprise",
    created() {
    },
    data() {
      return{
        form: {
          name: '',
          type: '',
          msg: '',
          area: '',
          date: '',
          intro: '',
          contacts: '',
          phonenum: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请输入企业类型', trigger: 'blur' }
          ],
          msg: [
            { required: true, message: '请输入主体信息', trigger: 'blur' }
          ],
          area: [
            { required: true, message: '请输入所在区域', trigger: 'blur' }
          ],
          date: [
            { required: true, message: '开通时间', trigger: 'blur' }
          ],
          intro: [
            { required: true, message: '企业简介', trigger: 'blur' }
          ],
          contacts: [
            { required: true, message: '联系人姓名', trigger: 'blur' }
          ],
          phonenum: [
            { required: true, message: '联系人手机号', trigger: 'blur' }
          ]
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
#enterprise {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      width: 600px;
      .enterprise_logo {
        width: 60px;
      }
      .br_text{
        margin-left: 15px;
      }
      .amend_logo{
        color: #409EFF;
        margin-left: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>
