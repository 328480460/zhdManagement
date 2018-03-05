<template>
  <div id="addrole">
    <div class="traceCode-search">
      <el-row>
        <el-col :span="4" ><el-input placeholder="角色名称" v-model="form.role_name" style="padding-left: 20px"></el-input></el-col>
        <el-button type="primary" class="btn-search" @click="editRole">保存</el-button>
      </el-row>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    updateRole,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "addrole",
  data() {
    return{
      form:{
        role_name:'',
      },
    }
  },
  mounted() {
    let params ={
      "id":this.$route.query.roleId
    }
    console.log(JSON.stringify(params))
    this.initData(params);
  },
  methods:{
    editRole(){
      console.log("--编辑角色--")
//      let params ={
//        role_name: this.form.role_name,
//      }
//      if(this.form.role_name == ''){
//        this.$message.warning("请输入“角色名称”！");
//      }else{
//        createRole(params)
//          .then(res =>{
//            console.log("createRole---"+JSON.stringify(res))
//            if (res.status == 200) {
//              this.$message.success("添加成功!");
//              this.$router.go(-1);
//            }else{
//              this.$message.error(res.msg);
//            }
//          })
//          .catch(() => {
//            this.$message.error("出错啦!");
//          })
//      }
    },
    initData(){

    },
  },
  mounted(){

  },
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#addrole {
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
  .btn-search{
    margin-left: 40px;
    margin-top: 2px;
  }
}
</style>
