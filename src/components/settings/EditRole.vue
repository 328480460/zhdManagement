<template>
  <div id="addrole">
    <div class="traceCode-search">
      <div class="sub-title">角色名称</div>
      <el-input class="role-input" placeholder="请输入角色名称" v-model="form.role_name"></el-input>      
    </div>

    <div class="content">
      <div v-for="item in menuList.slice(1,2)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="productAllSelectAll" v-model="productSelectAll" @change="productSelectAllChange">
            <label for="productAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
              <input class="item-checkbox" type="checkbox" :value="i.id" v-model="productEdit">
            </span>
            <span class="all-select-input search">
              <input class="item-checkbox" type="checkbox" :value="i.id" v-model="productSearch">
            </span>            
          </li>
        </ul>
      </div>

      <div v-for="item in menuList.slice(2,3)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="nodeAllSelectAll" v-model="nodeSelectAll" @change="nodeSelectAllChange">
            <label for="nodeAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="nodeEdit">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="nodeSearch">
            </span>            
          </li>
        </ul>
      </div>

      <div v-for="item in menuList.slice(3,4)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="traceAllSelectAll" v-model="traceSelectAll" @change="traceSelectAllChange">
            <label for="traceAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="traceEdit">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="traceSearch">
            </span>            
          </li>
        </ul>
      </div>

      <div v-for="item in menuList.slice(4,5)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="businessAllSelectAll" v-model="businessSelectAll" @change="businessSelectAllChange">
            <label for="businessAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="businessEdit">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="businessSearch">
            </span>            
          </li>
        </ul>
      </div>

       <div v-for="item in menuList.slice(5,6)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="documentAllSelectAll" v-model="documentSelectAll" @change="documentSelectAllChange">
            <label for="documentAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="documentEdit">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="documentSearch">
            </span>            
          </li>
        </ul>
      </div>

      <div v-for="item in menuList.slice(6,7)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox">
            <label >全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id">
            </span>            
          </li>
        </ul>
      </div>

     <div v-for="item in menuList.slice(7,8)" :key="item.id">
        <div class="item-title">
          <span class="span node-name">{{item.menu}}</span>          
          <span class="span edit">编辑</span>
          <span class="span search">查看</span>
          <span class="all-select-input">
            <input class="checkbox" type="checkbox" id="settingsAllSelectAll" v-model="settingsSelectAll" @change="settingsSelectAllChange">
            <label for="settingsAllSelectAll">全选</label>
          </span>
        </div>
        <ul>
          <li class="node-list" v-for="i in item.menuList" :key="i.id">
            <span class="node-name">{{i.menu}}</span>
            <span class="all-select-input edit">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="settingsEdit">
            </span>
            <span class="all-select-input search">
               <input class="item-checkbox" type="checkbox" :value="i.id" v-model="settingsSearch">
            </span>            
          </li>
        </ul>
      </div>


    </div>    

    <el-button type="primary" class="btn-search" @click="editRole">保存</el-button>

  </div>
</template>

<script type="text/ecmascript-6">
import {updateRole,getDetailRole,getListMenu,} from "../../assets/js/settings/ajax.js";

export default{
  name:"addrole",
  data(){
    return{
      form:{
        role_name:'',
      },
      menuList: [],

      productSelectAll:false,
      productEdit:[],
      productSearch:[],
      nodeSelectAll:false,
      nodeEdit:[],
      nodeSearch:[],
      traceSelectAll:false,
      traceEdit:[],
      traceSearch:[],
      businessSelectAll:false,
      businessEdit:[],
      businessSearch:[],
      documentSelectAll:false,
      documentEdit:[],
      documentSearch:[],
      settingsSelectAll:false,
      settingsEdit:[],
      settingsSearch:[],
    }
  },
  mounted(){
    let params ={
      "id":this.$route.query.roleId,
    }
    this.initData(params);    
  },
  methods:{
    // 初始加载
    initData(params){
      this.getDetailRole(params)
      //角色菜单查询查询
      this.getListMenu();
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
            console.log(res.data.menuList)
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
    productSelectAllChange(){
      if (this.productSelectAll) {
        this.productEdit = this.menuList.slice(1,2)[0].menuList.map((item,index) => { return item.id });
        this.productSearch = this.menuList.slice(1,2)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.productEdit= [];
        this.productSearch = [];
      }
    },
    nodeSelectAllChange(){
      if (this.nodeSelectAll) {
        this.nodeEdit = this.menuList.slice(2,3)[0].menuList.map((item,index) => { return item.id });
        this.nodeSearch = this.menuList.slice(2,3)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.nodeEdit= [];
        this.nodeSearch = [];
      }
    },
    traceSelectAllChange(){
      if (this.traceSelectAll) {
        this.traceEdit = this.menuList.slice(3,4)[0].menuList.map((item,index) => { return item.id });
        this.traceSearch = this.menuList.slice(3,4)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.traceEdit= [];
        this.traceSearch = [];
      }
    },
    businessSelectAllChange(){
      if (this.businessSelectAll) {
        this.businessEdit = this.menuList.slice(4,5)[0].menuList.map((item,index) => { return item.id });
        this.businessSearch = this.menuList.slice(4,5)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.businessEdit= [];
        this.businessSearch = [];
      }
    },
    documentSelectAllChange(){
      if (this.documentSelectAll) {
        this.documentEdit = this.menuList.slice(5,6)[0].menuList.map((item,index) => { return item.id });
        this.documentSearch = this.menuList.slice(5,6)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.documentEdit= [];
        this.documentSearch = [];
      }
    },
     settingsSelectAllChange(){
      if (this.settingsSelectAll) {
        this.settingsEdit = this.menuList.slice(7,8)[0].menuList.map((item,index) => { return item.id });
        this.settingsSearch = this.menuList.slice(7,8)[0].menuList.map((item,index) => {  return item.id });
      } else {
        this.settingsEdit= [];
        this.settingsSearch = [];
      }
    },
    // 保存
    editRole(){
      console.log(this.productEdit)
      console.log(this.productSearch)
    }
    
  },
  watch: {
    productEdit() {
      let len = this.productEdit.length + this.productSearch.length;
      len === this.menuList.slice(1,2)[0].menuList.length * 2 ? this.productSelectAll = true : this.productSelectAll = false ;    
    },
    productSearch(){
      let len = this.productEdit.length + this.productSearch.length;
      len === this.menuList.slice(1,2)[0].menuList.length * 2 ? this.productSelectAll = true : this.productSelectAll = false  ;   
    },
    nodeEdit() {
      let len = this.nodeEdit.length + this.nodeSearch.length;
      len === this.menuList.slice(2,3)[0].menuList.length * 2 ? this.nodeSelectAll = true : this.nodeSelectAll = false ;    
    },
    nodeSearch(){
      let len = this.nodeEdit.length + this.nodeSearch.length;
      len === this.menuList.slice(2,3)[0].menuList.length * 2 ? this.nodeSelectAll = true : this.nodeSelectAll = false  ;   
    },
    traceEdit() {
      let len = this.traceEdit.length + this.traceSearch.length;
      len === this.menuList.slice(3,4)[0].menuList.length * 2 ? this.traceSelectAll = true : this.traceSelectAll = false ;    
    },
    traceSearch(){
      let len = this.traceEdit.length + this.traceSearch.length;
      len === this.menuList.slice(3,4)[0].menuList.length * 2 ? this.traceSelectAll = true : this.traceSelectAll = false  ;   
    },
    businessEdit() {
      let len = this.businessEdit.length + this.businessSearch.length;
      len === this.menuList.slice(4,5)[0].menuList.length * 2 ? this.businessSelectAll = true : this.businessSelectAll = false ;    
    },
    businessSearch(){
      let len = this.businessEdit.length + this.businessSearch.length;
      len === this.menuList.slice(4,5)[0].menuList.length * 2 ? this.businessSelectAll = true : this.businessSelectAll = false;     
    },    
    documentEdit() {
      let len = this.documentEdit.length + this.documentSearch.length;
      len === this.menuList.slice(5,6)[0].menuList.length * 2 ? this.documentSelectAll = true : this.documentSelectAll = false ;    
    },
    documentSearch(){
      let len = this.documentEdit.length + this.documentSearch.length;
      len === this.menuList.slice(5,6)[0].menuList.length * 2 ? this.documentSelectAll = true : this.documentSelectAll = false ;    
    },
    settingsEdit() {
      let len = this.settingsEdit.length + this.settingsSearch.length;
      len === this.menuList.slice(7,8)[0].menuList.length * 2 ? this.settingsSelectAll = true : this.settingsSelectAll = false;     
    },
    settingsSearch(){
      let len = this.settingsEdit.length + this.settingsSearch.length;
      len === this.menuList.slice(7,8)[0].menuList.length * 2 ? this.settingsSelectAll = true : this.settingsSelectAll = false;     
    }
  }
  
}

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
    color:#606266;
    .demo-table-expand{
      float: left;
    }
  }
}
.sub-title{
  float: left;
  width: 80px;
  padding-right: 20px;
  text-align: right;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.role-input{
  width: 120px;
}
.item-title{
  background-color: #e4e4e4;
  overflow: hidden;
  .node-name{  
    float: left;
    display: block;
    padding: 12px 10px; 
  }  
  .all-select-input{
    float: right;
    display: block;
    padding: 13px 20px 10px 0;
    .checkbox{
      display: block;
      float: left;
      margin-top: 3px;
      margin-right: 5px;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
  .search,.edit{
    float: right;
    display: block;
    width: 50px;
    padding: 12px 0; 
  }
}
.node-list{
  border-bottom: 1px solid #ebeef5;
  overflow: hidden;
  &:hover{
    background-color: #f5f7fa;
  }
  .node-name{
    float: left;
    display: block;
    padding: 12px 10px;
  }
  .all-select-input{
    float: right;
    display: block;
    padding: 12px 0;
    width: 50px;
    .el-checkbox{
      left: 10px;
    }
    .item-checkbox{
      position: relative;
      left: 8px;
      display: block;
      width: 15px;
      height: 15px;
      background: #fff;
      cursor: pointer;
    }
  }
}
</style>
