<template>
  <div id="addstaff">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form :model="form" ref="form" label-width="120px">
          <el-form-item label="账号：">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="员工姓名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="角色：">
            <el-select v-model="form.custom_mould_id" placeholder="无">
              <el-option v-for="item in roleList" :key="item.id" :label="item.role_name"  :value="item.id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="允许访问的节点：">
            <!--<el-input v-model="form.role_id"></el-input>-->
            <el-select
              v-model="value9"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请搜索已有节点名称"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" >保存</el-button>
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
    getListNode
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
          contacts: '',
          name: '',
          role_id: '',
        },

        value9: [],
        options4: [],
        list: [],
        nodeList: [],
        loading: false
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
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },

      onSubmit() {
        let params = {
          account: this.form.account,
          contacts: this.form.contacts,
          name: this.form.name,
          role_id: this.form.role_id,
        };
//      console.log("submit!新增员工--"+JSON.stringify(params));
        /**
         * 员工信息新增接口
         */
        saveEmployee(params)
          .then(res =>{
            this.$message.success("员工添加成功!");
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })

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
      //节点列表查询
      getListNode(params){
        getListNode(params)
          .then(res =>{
            this.nodeList = res.data.nodeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })

        this.list = this.nodeList.map(item => {
          return { value: item.id, label: item.node_name };
        });
      },
    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#addstaff {
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
