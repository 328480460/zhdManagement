<template>
  <div id="addrole">
    <div class="traceCode-search">
      <el-row  class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">角色名称</div></el-col>
        <el-col :span="4" ><el-input placeholder="请输入角色名称" v-model="form.role_name"></el-input></el-col>
      </el-row>
    </div>

    <div class="content">
      <!--"1"是选中；“0”是未选-->
      <div v-for="item in menuList.slice(1)">
        <el-table
          ref="table"
          :data="item.menuList"
          @selection-change="selsChange"
          @row-click="handleCurrentChange"
          :row-key="getRowKeys"
        >
          <el-table-column
            :label="item.menu"
            prop="menu">
          </el-table-column>
          <el-table-column label="查看" width="50">
            <template slot-scope="scope">
              <el-checkbox @click="handleSee(scope.$index, scope.row)"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="编辑" width="50">
            <template slot-scope="scope">
              <el-checkbox  @click="handleEdit(scope.$index, scope.row)"></el-checkbox>
            </template>
          </el-table-column>
，
          <!--<el-table-column-->
            <!--label="全选"-->
            <!--width="50"-->
          <!--&gt;-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--type="selection"-->
          <!--&gt;-->
          <!--</el-table-column>-->
        </el-table>
      </div>

    </div>

    <el-button type="primary" class="btn-search" @click="editRole">保存</el-button>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    updateRole,
    getDetailRole,
    getListMenu,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "addrole",
  data() {
    return{
      form:{
        role_name:'',
      },
      checkAll: false,
      isIndeterminate: true,
      checked: false,
      menuList: [],
      menuListSecond: [],
      multipleSelection: [],
    }
  },
  mounted() {
    let params ={
      "id":this.$route.query.roleId,
    }
    this.initData(params);
  },
  methods:{
    handleCheckAllChange(val) {
      this.menuList = val ? !this.bindsee : this.bindsee;
      this.isIndeterminate = false;
    },
    handleSee(index, row) {
//      console.log("---handleSee--"+JSON.stringify(index, row))
    },
    handleEdit(index, row) {
//      console.log("---handleEdit--"+JSON.stringify(index, row))
    },
    // 获取row的key值
    getRowKeys(row) {
      return row.id;
    },
    handleCurrentChange(row, event, column) {
    },
    selsChange(rows){
//      console.log("handle-----"+JSON.stringify(val))
      if (rows) {
        rows.forEach(row => {
          if (row) {
            var arr  =
            {
              "menu_id" :row.id,
              "see" :1,
              "edit" :1,
            }
            this.multipleSelection.push(arr)
          }
        });
      }
    },
    editRole(){
      this.$message.error("正在进行中，尽请期待!");
//      let params ={
//        id : this.$route.query.roleId,
//        role_name: this.form.role_name,
//      }
//      if(this.form.role_name == ''){
//        this.$message.warning("请输入“角色名称”！");
//      }else{
//        updateRole(params)
//          .then(res =>{
//            console.log("updateRole---"+JSON.stringify(res))
//            if (res.status == 200) {
//              this.$message.success("修改成功!");
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
    getDetailRole(params){
      getDetailRole(params).then(res =>{
          if (res.status == 200) {
            this.form.role_name = res.data.role.role_name
          }else{
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        })
    },
    //角色菜单查询查询
    getListMenu() {
      getListMenu()
        .then(res => {
          if(res.status == 200){
            this.menuList = res.data.menuList;
            for(let i = 0;i < this.menuList.length;i++ ){
              for(let j = 0;j < this.menuList[i].menuList.length;j++ ){
                this.menuListSecond.push(this.menuList[i].menuList[j])
              }
            }
          }else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    initData(params){
      this.getDetailRole(params)
      //角色菜单查询查询
      this.getListMenu();
    },
  },
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#addrole {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .demo-autocomplete {
    .sub-title {
      text-align: right;
      padding-right: 20px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
  .btn-search{
    margin-left: 40%;
    margin-top: 2px;
  }
  .content {
    margin: 20px;
    margin-top: 10px;
    .demo-table-expand{
      float: left;
    }
  }
}
</style>
