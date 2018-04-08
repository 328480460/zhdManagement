<template>
  <div id="enterprise-edit">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" :rules="rules" ref="form" label-width="120px">
          <el-form-item label="企业名称：" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="机构类型：">{{form.type}}
          </el-form-item>
          <el-form-item label="主体信息：" >{{form.certificate}}
            <el-button type="text" class="br_text">立即认证</el-button>
          </el-form-item>
          <el-form-item label="所在地区："  prop="area">
            <!--<el-cascader  :options="cityDataList" change-on-select  v-model="selectedCity" ></el-cascader>-->
            <el-input v-model="form.area" style="margin-top: 20px"></el-input>
          </el-form-item>
          <el-form-item label="开通日期：">{{form.date}}
          </el-form-item>
          <el-form-item label="企业LOGO：">
            <img src="../../assets/image/enterprise_logo.png" alt="enterprise_logo" class="enterprise_logo">
            <el-button type="text" class="br_text">修改</el-button>
          </el-form-item>
          <el-form-item label="企业简介：">
            <el-input v-model="form.intro" type="textarea" autosize></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名：" prop="contact">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
          <el-form-item label="联系人手机号：" prop="phonenum">
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
  import {
    getEnterpriseDetail,
    updateEnterprise
  } from "../../assets/js/settings/ajax.js";

import { cityData } from "../../assets/js/api/cityData.js";
export default {
    name: "enterprise-edit",
    created() {
    },
    data() {
      return{
        // 城市列表数据
        cityDataList: cityData,
        // 选中的城市
        selectedCity: [],
        form: {
          name: '',
          type: '',
          certificate: '',
          msg: '',
          area: '',
          date: '',
          intro: '',
          contact: '',
          phonenum: ''
        },
        rules: {
          name: [
            { required: true, message: '请填写企业名称', trigger: 'blur' }
          ],
          area: [
            { required: true, message: '请填写所属地区', trigger: 'blur' }
          ],
          contact: [
            { required: true, message: '请填写联系人姓名', trigger: 'blur' }
          ],
          phonenum: [
            { required: true, message: '请填写联系人电话', trigger: 'blur' },
            {validator:function(rule,value,callback){
              if(/^1[34578]\d{9}$/.test(value) == false){
                callback(new Error("请输入正确的手机号"));
              }else{
                callback();
              }
            }, trigger: 'blur'}
          ],
        }
      }
    },
  mounted(){
    let params ={
      enterprise_id:this.$route.query.enterprise_id
    }
    this.initData(params);
  },
    methods: {
      initData(params){
        /**
         * 企业详情查询接口
         */
        getEnterpriseDetail(params)
          .then(res =>{
            let enterprise = res.data.enterprise
            this.form.area = enterprise.address;
            this.form.name = enterprise.enterprise_name;
            this.form.type = enterprise.enterprise_type;
            this.form.certificate = enterprise.certificate;
//            this.form.date = enterprise.creat_date;
            this.form.intro = enterprise.introduction;
            this.form.contact = enterprise.contact;
            this.form.phonenum = enterprise.contact_phone;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      /**
       * 企业信息修改接口
       * @param form
         */
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid){
            let params = {
              enterprise_id:this.$route.query.enterprise_id,
              address: this.form.area,
              enterprise_name: this.form.name,
              enterprise_type: this.form.type,
              certificate: this.form.certificate,
//          creat_date: this.form.date,
              enterprise_logo: "http://fsdf.jpg",
              introduction: this.form.intro,
              contact: this.form.contact,
              contact_phone: this.form.phonenum,
            };
            //企业信息修改接口
            updateEnterprise(params)
              .then(res =>{
                if (res.status == 200) {
                  this.$message.success("修改成功!");
                  this.$router.go(-1);
                }
              })
              .catch(() => {
                this.$message.error("出错啦!");
              })
          }else {
            return false;
          }
        });
      },
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#enterprise-edit {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      margin-top: 20px;
      margin-left: 20px;
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
