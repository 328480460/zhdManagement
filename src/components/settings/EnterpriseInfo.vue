<template>
  <div id="enterprise">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" label-width="120px">
          <el-form-item label="企业名称：">{{form.name}}
          </el-form-item>
          <el-form-item label="机构类型：">{{form.type}}
          </el-form-item>
          <el-form-item label="主体信息：" >{{form.certificate}}
            <el-button type="text" class="br_text">立即认证</el-button>
          </el-form-item>
          <el-form-item label="所在地区：">{{form.area}}
          </el-form-item>
          <el-form-item label="开通日期：">{{form.date}}
          </el-form-item>
          <el-form-item label="企业LOGO：">
            <img src="../../assets/image/enterprise_logo.png" alt="enterprise_logo" class="enterprise_logo">
          </el-form-item>
          <el-form-item label="企业简介：">{{form.intro}}
          </el-form-item>
          <el-form-item label="联系人姓名：">{{form.contact}}
          </el-form-item>
          <el-form-item label="联系人手机号：">{{form.phonenum}}
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
    getEnterpriseDetail,
    updateEnterprise
  } from "../../assets/js/settings/ajax.js";

import { cityData } from "../../assets/js/api/cityData.js";
export default {
    name: "enterprise",
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
      }
    },
  mounted(){
    let params ={
      enterprise_id:1
    }
    this.initData(params);
  },
    methods: {
      initData(params){
        /**
         * 企业详情查询
         */
        getEnterpriseDetail(params)
          .then(res =>{
            let enterprise = res.data.enterprise
            this.form.name = enterprise.enterprise_name;
            this.form.type = enterprise.enterprise_type;
            this.form.certificate = enterprise.certificate;
            this.form.area = enterprise.address;
//            this.form.date = enterprise.creat_date;
            this.form.intro = enterprise.introduction;
            this.form.contact = enterprise.contact;
            this.form.phonenum = enterprise.contact_phone;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },

      editPage() {
        this.$emit("openExtraPage", {
          node: "settings",
          page: "enterpriseInfoEdit",
          name: "编辑企业信息",
          id: "03010102",
          query: { enterprise_id: 1 },
        });
      }
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#enterprise {
  margin: 10px;
  padding: 10px;
  height: auto;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      margin-left: 20px;
      margin-top: 20px;
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
