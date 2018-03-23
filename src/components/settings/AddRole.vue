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
      <div v-for="item in menuList">
        <el-table
          :data="item.menuList"
        >
          <el-table-column
            :label="item.menu"
            prop="menu">
          </el-table-column>
          <el-table-column
            label="查看"
            width="50"
          >
          </el-table-column>
          <el-table-column
            type="selection"
          >
          </el-table-column>
          <el-table-column
            label="编辑"
            width="50"
          >
          </el-table-column>
          <el-table-column
            type="selection"
          >
          </el-table-column>
          <el-table-column
            label="全选"
            width="50"
          >
          </el-table-column>
          <el-table-column
            type="selection"
          >
          </el-table-column>
        </el-table>
      </div>

      <!--<el-table-->
        <!--:data="menuList"-->
        <!--:default-expand-all="true"-->
       <!--&gt;-->
        <!--<el-table-column type="expand">-->
              <!--<template scope="props">-->
                <!--<el-table-->
                  <!--:data="props.row.menuList"-->
                <!--&gt;-->
                  <!--<el-table-column-->
                    <!--:label="props.row.menu"-->
                    <!--prop="menu">-->
                  <!--</el-table-column>-->
                  <!--<el-table-column-->
                    <!--label="查看"-->
                    <!--width="120"-->
                  <!--&gt;-->
                  <!--</el-table-column>-->
                  <!--<el-table-column-->
                    <!--label="编辑"-->
                    <!--width="120"-->
                  <!--&gt;-->
                  <!--</el-table-column>-->
                  <!--<el-table-column-->
                    <!--label="全选"-->
                    <!--width="120"-->
                    <!--type="selection"-->
                  <!--&gt;-->
                  <!--</el-table-column>-->
                <!--</el-table>-->
              <!--</template>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--&gt;-->
        <!--</el-table-column>-->
      <!--</el-table>-->

    </div>

    <el-button type="primary" class="btn-search" @click="createRole">保存</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    createRole,
    getListMenu,
  } from "../../assets/js/settings/ajax.js";

export default {
    name: "addrole",
  data() {
    return{
      form:{
        role_name:'',
      },
      menuList: [],
    }
  },
  mounted() {
    this.initData();
  },
  methods:{

//    createRole(){
//      let params ={
//        role_name: this.form.role_name,
//      }
//      if(this.form.role_name == ''){
//        this.$message.warning("请输入“角色名称”！");
//      }else{
//        createRole(params)
//          .then(res =>{
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
//    },
    //角色菜单查询查询
    getListMenu() {
      getListMenu()
        .then(res => {
//          console.log("getListMenu----"+JSON.stringify(res.status))
          this.menuList = res.data.menuList;

        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    initData(){
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
    margin-top: 10px;
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
