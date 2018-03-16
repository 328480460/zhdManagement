<template>
  <div id="addstaff">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" :rules="rules" ref="form" label-width="120px">
          <el-form-item label="账号："  prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码："  prop="password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="员工姓名："  prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式："  prop="contacts">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="角色：" prop="role_id">
            <el-select v-model="form.role_id" placeholder="无" >
              <el-option v-for="item in roleList" :key="item.id" :label="item.role_name"  :value="item.id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')" >保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    saveEmployee,
    getListRole,
    getListNode,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "addstaff",
    created() {
    },
    data() {
      return{
        roleList: [],
        form: {
          account: '',
          password: '',
          contacts: '',
          name: '',
          email: '',
          role_id: '',
          nodeName: '',
        },
        options: [],
        nodeList: [],
        loading: false,
        rules: {
          account: [
            { required: true, message: '请填写账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请填写员工姓名', trigger: 'blur' }
          ],
          contacts: [
            { required: true, message: '请填写联系方式', trigger: 'blur' },
            {validator:function(rule,value,callback){
              if(/^1[34578]\d{9}$/.test(value) == false){
                callback(new Error("请输入正确的手机号"));
              }else{
                callback();
              }
            }, trigger: 'blur'}
          ],
          role_id: [
            { required: true, message: '请选择角色', trigger: 'change' },
          ],
        }
      }
    },
  mounted(){
    let params = {
      pagenum: 1,
      pagesize: 10,
    };
    this.initData(params);
  },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid){
            let params = {
              account: this.form.account,
              password: this.form.password,
              contacts: this.form.contacts,
              name: this.form.name,
              email: this.form.email,
              role_id: this.form.role_id,
            };
            //员工信息新增接口
            saveEmployee(params)
              .then(res =>{
                if (res.status == 200) {
                  this.$message.success("添加成功!");
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
      initData(params){
        this.getListRole(params)
        this.getListNode(params)
      },
      //角色信息列表接口
      getListRole(params){
        getListRole(params)
          .then(res => {
            this.roleList = res.data.roleList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //节点列表查询接口
      getListNode(params){
        getListNode(params)
          .then(res =>{
            this.nodeList = res.data.nodeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#addstaff {
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
