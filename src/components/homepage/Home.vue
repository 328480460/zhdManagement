<template>
  <div id="home">    
    <div class="left-menu">
      <!-- logo -->
      <div class="logo-wrapper">
        <img src="../../assets/image/logo_03.png" alt="logo" class="logo">
      </div>
      <div class="main-menu">  
        <!-- 一级菜单 -->
          <div class="main-menu-item" v-for="(first,key) in menu" :key="key" v-if="first.see == 1" 
            :class="{'active': currentTabInfo.main.id === first.id}">
          <div class="main-menu-item-name" @click.self="turnPage(first.id)">
            <i class="icon-font" :class="first.icon" ></i>{{first.menu}}
          </div>
          <!-- 二级菜单 -->
          <div class="second-menu" v-if="first.menuList != 0">
            <div class="title">{{first.menu}}中心</div>
            <div v-for="(second, key) in first.menuList" :key="key">
              <div class="second-menu-item" v-if="second.see == 1" :class="{'active': currentTabInfo.second.id === second.id}" >
                <div class="second-menu-item-name" @click.self="turnPage(second.id)">{{second.menu}} </div>
                <!-- 三级菜单 -->
                <div class="third-menu" v-if="!Object.keys(extraTabInfo).length">
                  <div class="third-menu-item-wrapper" >                      
                    <div class="third-menu-item"  v-for="(third, key) in second.menuList" :key="key" v-if="third.see == 1"
                      :class="{'active': currentTabInfo.third.id === third.id}"
                      @click.self="turnPage(third.id)">{{third.menu}} 
                    </div>
                  </div>
                </div>                
                <div class="extra-page-tab-wrapper" v-if="Object.keys(extraTabInfo).length">
                  <ExtraPageTab :tabInfo='extraTabInfo' @turnPage='turnPage'/>
                </div>
              </div>
            </div>            
          </div>          
        </div>
      </div>
    </div>       
    <div class="user-commonality" v-if="currentTab !== '11dcd5d7-19c6-4189-8606-058b321284ff' ">
      <User ></User>
    </div>
    <div class="pages-wrapper" v-if="currentTab !== '11dcd5d7-19c6-4189-8606-058b321284ff' ">
      <router-view @openExtraPage='openExtraPage'/>
    </div>
    <div class="pages-wrapper welcome" v-else>
      <router-view @openExtraPage='openExtraPage'/>
    </div>    
  </div>  
</template>

<script type="text/ecmascript-6">
import ExtraPageTab from "../commonComponents/ExtraPageTab";
import User from '../userCenter/User';
import { deepCopy } from "../../assets/js/api/util.js";

export default {
  name: "home", 
  created() {   
    // 刷新跳转对应的路由    
    let tabId = this.$route.meta.pageInfo.id,arr=[];  
    this.menu.forEach((ele,index)=>{   
      if(ele.menuList.length>0){
        ele.menuList.forEach((ele)=>{
          if(ele.menuList.length>0){
            ele.menuList.forEach((ele)=>{
              if(ele.menuList && ele.menuList.length>0){
                ele.menuList.forEach((ele)=>{
                  arr.push(ele.id)
                })
              }
            })
          }
        })
      }
    }) 
    if(arr.includes(tabId)){
      this.initMenu(tabId);
      this.$nextTick(() => {
        let query = JSON.parse(sessionStorage.getItem("freshQuery"));
        let extraTabInfo = deepCopy(this.$route.meta.pageInfo);
        extraTabInfo.query = query;
        this.openExtraPage(extraTabInfo);
      }, 100);
    }
    this.currentTab = tabId;
  }, 
  data() {
    return {
      menu:JSON.parse(localStorage.getItem("menu")),
      currentTab: "", // 当前tab页面的id
      currentTabInfo: {
        // 当前一级二级三级页面的id
        main: "",
        second: "",
        third: ""
      },
      curretPage: "", // 当前page页面
      extraTabInfo: {}
    };
  },    
  methods: {
    turnPage(id) {
      // 关闭额外tab
      this.extraTabInfo = {};
      this.currentTab = id;
    },
    // 初始化menuList 和 获取当前选中的tab 
    initMenu(tabId) {   
      let main='',second='',third = ''; 
      this.menu.forEach((ele,index)=>{
        if(ele.id === this.menu[0].id){
           main = ele.id;
        }else if(ele.id == tabId){          
          main = ele.id ;
          second = ele.menuList[0].id ;
          third = ele.menuList[0].menuList[0].id ;
        }else{
          ele.menuList.forEach((ele2,index2)=>{
            if(ele2.id == tabId){
              main = ele2.parent_menu_id ;
              second = ele2.id ;
              third = ele2.menuList[0].id ;
            }else{
              ele2.menuList.forEach((ele3,index3)=>{
                if(ele3.id == tabId){      
                  second = ele3.parent_menu_id ;
                  third = ele3.id ;
                  this.menu.forEach((ele,index)=>{
                    ele.menuList.forEach((ele,index)=>{
                      if(ele.id == second){
                        main = ele.parent_menu_id ;
                      }
                    })
                  })
                }else{
                  if(ele3.menuList && ele3.menuList.length>0){
                    ele3.menuList.forEach((ele4,index4)=>{
                      if(ele4.id === tabId){
                        third = ele4.parent_menu_id
                        this.menu.forEach((ele,index)=>{
                          ele.menuList.forEach((ele,index)=>{
                            ele.menuList.forEach((ele,index)=>{
                              if(ele.id === third){
                                second = ele.parent_menu_id
                              }
                            })
                          })
                        })                        
                        this.menu.forEach((ele,index)=>{
                          ele.menuList.forEach((ele,index)=>{
                            if(ele.id === second){
                              main = ele.parent_menu_id
                            }
                          })
                        })
                      }
                    })
                  }
                }
              })
            }
          })
        }
      })
      this.currentTabInfo.main = { id:main };
      this.currentTabInfo.second = { id:second };
      this.currentTabInfo.third = { id:third };
    },
    initPage(tabId) {       
      // 判断是否是欢迎页面
      if(tabId === '11dcd5d7-19c6-4189-8606-058b321284ff') {
        this.$router.push({
          path: "/home/welcome"
        });
        return
      }
      let arr=[];
      this.menu.forEach((ele,index)=>{   
        if(ele.menuList.length>0){
          ele.menuList.forEach((ele)=>{
            if(ele.menuList.length>0){
              ele.menuList.forEach((ele)=>{
                if(ele.menuList && ele.menuList.length>0){
                  ele.menuList.forEach((ele)=>{
                    arr.push(ele.id)
                  })
                }
              })
            }
          })
        }
      })      
      if(arr.includes(tabId)){
        return
      }
      let currentMainItem = this.getMenuNode(tabId);
      this.curretPage = this.getCurrPage(tabId);
      this.$router.push({
        path: "/home/" + currentMainItem + "/" + this.curretPage
      });     
    },
    openExtraPage(extraPageInfo) { 
      this.extraTabInfo = {};
      this.extraTabInfo.thirdTab = this.getThirdTabMsg(extraPageInfo.id);
      this.extraTabInfo.extraTab = extraPageInfo;
      let query = extraPageInfo.query ? extraPageInfo.query : {}; 
      sessionStorage.setItem("freshQuery", JSON.stringify(query));
      this.$router.push({
        path: `/home/${extraPageInfo.node}/${extraPageInfo.page}`,
        query: query
      });      
    },
    // 获取跳转页node名称
    getMenuNode(tabId) {
      let mainNode= '';
      // 通过id判断是否在第一级
      this.menu.forEach((ele)=>{        
        if(ele.id === tabId){
          mainNode = ele.node;
        }
      })
      // 通过id判断是否在第二级
      this.menu.forEach((ele)=>{
        if(ele.menuList && ele.menuList.length>0){
          ele.menuList.forEach((ele)=>{
            if(ele.id === tabId){       
              this.menu.forEach((val)=>{
                if(val.id === ele.parent_menu_id){
                  mainNode = val.node;                  
                }
              })
           }
          })
        }
      })
      // 通过id判断是否在第三级
      this.menu.forEach((ele)=>{
        ele.menuList.forEach((ele)=>{
          if(ele.menuList && ele.menuList.length>0){
            ele.menuList.forEach((ele)=>{
              if(ele.id === tabId){    
                  let m = '';
                  this.menu.forEach((val)=>{                    
                    val.menuList.forEach((val)=>{
                      if(val.id === ele.parent_menu_id){
                        m = val.parent_menu_id;
                      }                   
                    })
                    if(m){
                      this.menu.forEach((value)=>{                        
                        if(value.id === m){
                          mainNode = value.node; 
                        }                     
                      })                       
                    }                    
                  })
              }
            })
          }
        })
      })
      // 通过id判断是否在第四级
      this.menu.forEach((ele)=>{
        ele.menuList.forEach((ele)=>{
          ele.menuList.forEach((ele)=>{
            if(ele.menuList && ele.menuList.length>0){
              ele.menuList.forEach((ele)=>{
                if(ele.id === tabId){ 
                      let a = '',b = '', c = '';                     
                      c = ele.parent_menu_id;
                      if(c){
                        this.menu.forEach((ele,index)=>{
                          ele.menuList.forEach((ele,index)=>{
                            ele.menuList.forEach((ele,index)=>{
                              if(ele.id === c){
                                b = ele.parent_menu_id
                              }
                            })
                          })
                        })
                      }
                      if(b){
                        this.menu.forEach((ele,index)=>{
                          ele.menuList.forEach((ele,index)=>{
                            if(ele.id === b){
                              a = ele.parent_menu_id;
                            }
                          })
                        })
                      }
                      if(a){
                        this.menu.forEach((ele,index)=>{
                          if(ele.id === a){
                            mainNode = ele.node
                          }
                        })
                      }
                }
              })
            }
          })
        })
      
      
      })
      return mainNode;       
    },
    // 获取跳转页page
    getCurrPage(tabId){
      let currPage = '';
      this.menu.forEach((val,index)=>{
        if(val.id === tabId && val.menuList.length>0){
          currPage = val.menuList[0].menuList[0].page
        }else{
          val.menuList.forEach((val,index)=>{
            if(val.id === tabId && val.menuList.length>0){
              currPage = val.menuList[0].page
            }else{
              val.menuList.forEach((val,index)=>{
                if(val.id === tabId){
                  currPage = val.page;
                }else{
                  if(val.menuList && val.menuList.length>0){
                    val.menuList.forEach((val,index)=>{
                      if(val.id === tabId){
                        currPage = val.page
                      }
                    })
                  }
                }                
              })
            }            
          })
        }        
      })
      return currPage;
    },
    // 获取三级菜单信息
    getThirdTabMsg(thirdTabId){
      let result = '', dataId='';      
      this.menu.forEach((ele,index)=>{       
        if(ele.menuList.length>0){// 第二级查找          
          ele.menuList.forEach((ele,index)=>{            
            if(ele.menuList.length>0){// 第三级查找              
              ele.menuList.forEach((ele,index)=>{                
                if(ele.menuList && ele.menuList.length>0){// 第四级查找                  
                  ele.menuList.forEach((ele,index)=>{
                    if( ele.id === thirdTabId){     
                      dataId = ele.parent_menu_id
                    }             
                  })
                }                
              })
            }              
          })
        }
      })
      if(dataId){
        this.menu.forEach((ele,index)=>{       
        if(ele.menuList.length>0){// 第二级查找          
          ele.menuList.forEach((ele,index)=>{            
            if(ele.menuList.length>0){// 第三级查找              
              ele.menuList.forEach((ele,index)=>{                
                if(ele.id === dataId){
                  result = ele
                }               
              })
            }              
          })
        }
      })
      }
      return result;
    }
  },
  watch: {
    currentTab(newVal) {
      this.initPage(newVal);
      this.initMenu(newVal);      
    },
    $route(to, from) { 
      let tabId = to.meta.pageInfo.id,arr=[]; 
      this.menu.forEach((ele,index)=>{   
        if(ele.menuList.length>0){
          ele.menuList.forEach((ele)=>{
            if(ele.menuList.length>0){
              ele.menuList.forEach((ele)=>{
                if(ele.menuList && ele.menuList.length>0){
                  ele.menuList.forEach((ele)=>{
                    arr.push(ele.id)
                  })
                }
              })
            }
          })
        }
      }) 
      if(arr.includes(tabId)){
        this.initMenu(tabId);
        this.$nextTick(() => {
          this.extraTabInfo = {};
          this.extraTabInfo.thirdTab = this.getThirdTabMsg(tabId);
          this.extraTabInfo.extraTab = to.meta.pageInfo;
        }, 100);
      } else {
        // 关闭额外tab
        this.extraTabInfo = {};
      }
      this.currentTab = tabId;     
    }
  },
  components: {
    ExtraPageTab,
    User
  }
};
</script>

<style rel="stylesheet/less" lang='less' >
#home {
  color: #282828;
  .left-menu {
    text-align: center;
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    background-color: #33363f;
    .logo-wrapper {
      width: 100%;
      height: 68px;
      line-height: 68px;
      .logo {
        width: 38px;
        margin: 15px 0;
      }
    }
    .main-menu {
      width: 120px;
      height: 100%;
      color: #c1c1c1;

      .main-menu-item {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        &.active {
          background-color: #fff;
          color: #282828;
          .second-menu {
            display: block;
          }
          .summary {
            display: block;
          }
          .icon-font:before {
            color: #282828;
          }
        }
        .icon-font {
          margin-right: 10px;
        }
      }
    }
  }
  .summary {
    display: none;
  }
  .main-menu-item-name {
    cursor: pointer;
  }
  .second-menu {
    display: none;
    text-align: left;
    width: 130px;
    box-sizing: border-box;
    position: fixed;
    left: 120px;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 99;
    background-color: #fff;
    border-right: 1px solid #e4e4e4;
    .title {
      width: 100%;
      height: 68px;
      line-height: 68px;
      font-size: 16px;
      border-bottom: 1px solid #e4e4e4;
      padding-left: 25px;
    }
    .second-menu-item {
      padding-left: 25px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      .second-menu-item-name {
        cursor: pointer;
      }
      &.active {
        background-color: #f2f2f2;
        .third-menu {
          display: block;
        }
      }
    }
  }
  .third-menu {
    display: none;
    position: fixed;
    z-index: 98;
    left: 251px;
    top: 0;
    right: 0;
    bottom: 0;
    height: 68px;
    line-height: 68px;
    font-size: 16px;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    .third-menu-item-wrapper {
      font-size: 0;
      .third-menu-item {
        display: inline-block;
        margin: 1px 15px 0 15px;
        padding: 0 5px;
        font-size: 16px;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid #409eff;
        }
      }
    }
  }
  .extra-page-tab-wrapper {
    position: fixed;
    z-index: 98;
    left: 251px;
    top: 0;
    right: 0;
    bottom: 0;
    height: 68px;
    line-height: 68px;
    font-size: 16px;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
  }
  .user-commonality{
    float: right;
    line-height: 68px;
  }
  .pages-wrapper {
    position: fixed;
    top: 72px;
    left: 250px;
    right: 0;
    bottom: 0;
    /*background-color: #f2f2f2;*/
    overflow: auto;
    .user_content{
      width: auto;
      height: auto;
      float: right;
      .user{
        text-align: center;
        display: flex;
        align-items: center;
        margin-right: 10px;
        position:relative;
     }
      .icon{
        cursor: pointer;
        margin: 10px 5px 10px 20px;
      }
    }
    &.welcome {
      top: 0;
      left: 120px;
    }
  }
}
.el-table tr th{
  background-color: #e4e4e4;
}
</style>
