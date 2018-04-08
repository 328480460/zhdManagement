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
              @selection-change="selChange"
              row-key="id"
            >
              <el-table-column
                :label="item.menu"
                prop="menu">
              </el-table-column>

              <el-table-column
                width="80"
                label="查看"
                prop="see">
                <template slot-scope="scope">
                  <el-checkbox  @change="handleSee(scope.$index, scope.row)" ></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column
                width="80"
                label="编辑"
                prop="edit">
                <template slot-scope="scope">
                  <el-checkbox @change="handleEdit(scope.$index, scope.row)"  ></el-checkbox>
                </template>
              </el-table-column>

              <!--<el-table-column-->
                  <!--label="查看 编辑"-->
                  <!--width="200"-->
                  <!--&gt;-->
                  <!--<template slot-scope="scope">-->
                      <!--<el-checkbox @change="handleSee(scope.$index, scope.row)" ></el-checkbox>-->
                      <!--<el-checkbox @change="handleEdit(scope.$index, scope.row)" ></el-checkbox>-->
                  <!--</template>-->
                <!--</el-table-column>-->

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
      groups:[],
      form:{
        role_name:'',
      },
      menuList: [],//一级菜单
      menuListSecond: [],//二级菜单
      seeSelection: [],//“查看”数组
      editSelection: [],//“编辑”数组

      multipleSelection: [],//所选择的菜单添加到该数组
//      checkedSee:false,
//      checkedEdit:false,
      see:0,
      edit:0,
    }
  },
  mounted() {
    this.initData();
  },
  computed:{

  },
    methods:{
    handleSee(index, row){
      var that = this;
      if(typeof row.seeChecked == 'undefined'){
        console.log("see11111")
        //首次选择
        this.$set(row,'seeChecked',true);
        this.see =1
        var arr  =
        {
          "edit" :this.edit,
          "menu_id" :row.id,
//          "menu" :row.menu,
          "see" :this.see,
        }
        this.see_1(arr)
      }else{
        row.seeChecked = !row.seeChecked;
          //选择已取消的项
          if(row.seeChecked){
            console.log("see22222")
            this.see =1
            var arr  =
            {
              "edit" :this.edit,
              "menu_id" :row.id,
//              "menu" :row.menu,
              "see" :this.see,
            }
            that.see_1(arr)
        }else{
            //添加后取消选择-----判断另一列筛选框
            console.log("see33333-----")
            this.see =0
            var arr  =
            {
              "edit" :this.edit,
              "menu_id" :row.id,
//              "menu" :row.menu,
              "see" :this.see,
            }
            that.see_0(arr)
        }
      }
      console.log("handleSee-----"+JSON.stringify(this.multipleSelection));
    },

    //选择“查看”
    see_1(arr){
      var that = this
      if(that.multipleSelection.length == 0){
        that.multipleSelection.unshift(arr)
      }else {
        for(var i=0;i<that.multipleSelection.length;i++){
          if(that.multipleSelection[i].menu_id == arr.menu_id){//已添加该menu_id
            that.multipleSelection[i].see = 1
            break;
          }else {
            this.multipleSelection.unshift(arr)
            break;
          }
        }
      }
    },
    //取消选择“查看”
    see_0(arr){
      var that = this
      for(var i=0;i<that.multipleSelection.length;i++){
        if(that.multipleSelection[i].menu_id == arr.menu_id && that.multipleSelection[i].edit == 1){//已添加该menu_id
          that.multipleSelection[i].see = 0
          console.log("see = 0")
          break;
        }else {
          that.multipleSelection.splice(i, 1);
          console.log("see splice")
          break;
        }
      }
    },
    //选择“编辑”
    edit_1(arr){
      var that = this
      if(that.multipleSelection.length == 0){
        console.log("IFIFIFIFIF")
        that.multipleSelection.unshift(arr)
      }else {
        for(var i=0;i<that.multipleSelection.length;i++){
          if(that.multipleSelection[i].menu_id == arr.menu_id){//已添加该menu_id
            console.log("IF====")
            that.multipleSelection[i].edit = 1
            break;
          }else {
            this.multipleSelection.unshift(arr)
            break;
          }
        }
      }
    },
    //取消选择“编辑”
    edit_0(arr){
      var that = this
      for(var i=0;i<that.multipleSelection.length;i++){
        if(that.multipleSelection[i].menu_id == arr.menu_id && that.multipleSelection[i].see == 1){ //已添加该menu_id
          that.multipleSelection[i].edit = 0
          console.log("edit = 0")
          break;
        }else {
          that.multipleSelection.splice(i, 1);
          console.log("edit splice")
          break;
        }
      }
    },
    handleEdit(index, row){
      var that = this;
      if(typeof row.editChecked == 'undefined'){
        console.log("edit11111")
            //首次选择
            this.$set(row,'editChecked',true);
            this.edit =1
            var arr  =
            {
              "edit" :this.edit,
              "menu_id" :row.id,
//              "menu" :row.menu,
              "see" :this.see,
            }
            this.edit_1(arr)
      }else{
          row.editChecked = !row.editChecked;
          //选择已取消的项
          if(row.editChecked){
            console.log("edit22222")
            this.edit =1
            var arr  =
            {
              "edit" :this.edit,
              "menu_id" :row.id,
//              "menu" :row.menu,
              "see" :this.see,
            }
            that.edit_1(arr)
        }else{
            console.log("edit33333---"+JSON.stringify(row))
            this.edit =0
            var arr  =
            {
              "edit" :this.edit,
              "menu_id" :row.id,
//              "menu" :row.menu,
              "see" :this.see,
            }
            //添加后取消选择
            that.edit_0(arr)
        }
      }
      console.log("handleEdit-----"+JSON.stringify(this.multipleSelection));
    },

    //“全选”变化监听
    selChange(rows){
      console.log("全选selChange-----"+JSON.stringify(rows))
//      if (rows) {//全选
//        rows.forEach(row => {
//          if (row) {
////            this.$set(row,'checked',true);
//            var arr  =
//            {
//              "edit" :1,
//              "menu_id" :row.id,
////              "menu" :row.menu,
//              "see" :1,
//            }
//            if(this.multipleSelection.length == 0){
//              this.multipleSelection.unshift(arr)
//            }else{
//              for(var i=0;i<this.multipleSelection.length;i++){
//                if(this.multipleSelection[i].menu_id != arr.menu_id){
//                  console.log("全选不重复的添加-----")
//                  this.multipleSelection.unshift(arr)
//                  break;
//                }
//              }
//            }
//
//          }
//        });
//      }else{//全不选
//
//      }
//      console.log("multipleSelection-----"+JSON.stringify(this.multipleSelection))
    },

    createRole(){
      if( this.multipleSelection.length == 0 ){
        this.$message.warning("请选择权限列表！");
      }else if(this.form.role_name == ''){
        this.$message.warning("请输入“角色名称”！");
      }else {
        let params ={
          role_name: this.form.role_name,
          roleMenuList: this.multipleSelection,
        }
        createRole(params)
          .then(res =>{
            if (res.status == 200) {
              this.$message.success("添加成功!");
              this.$router.go(-1);
            }else{
              this.$message.error(res.msg);
            }
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      }
    },
    //角色菜单查询查询
    getListMenu() {
      var arr  =
      {
        "edit" :this.edit,
        "see" :this.see,
      }
      getListMenu()
        .then(res => {
          if(res.status == 200){
            this.menuList = res.data.menuList;
            //给原来menuList添加两个属性‘see’和‘edit’
            for(let i = 0;i < this.menuList.length;i++ ){
              this.menuList[i].edit = this.edit
              this.menuList[i].see = this.see

              for(let j = 0;j < this.menuList[i].menuList.length;j++ ){
                this.menuListSecond.unshift(this.menuList[i].menuList[j])
                //添加两个属性‘see’和‘edit’
                this.menuList[i].menuList[j].edit = this.edit
                this.menuList[i].menuList[j].see = this.see
              }
            }
//            console.log("newmenuList---"+JSON.stringify(this.menuListSecond))
          }else {
            this.$message.error(res.msg);
          }
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
