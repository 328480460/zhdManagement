<template>
  <div id="home">
    <div class="left-menu">
      <div class="logo-wrapper">
        <img src="../../assets/image/logo_03.png" alt="logo" class="logo">
      </div>
      <div class="main-menu">
        <div class="main-menu-item" v-for="(first,key) in menu" :key="key"
                                    :class="{'active': currentTabInfo.main.id === first.id}"
                                    >
          <div class="main-menu-item-name" @click.self="turnPage(first.id)"><i class="icon-font" :class="first.icon" ></i>{{first.name}}</div>
          <div class="second-menu" v-if="first.children">
            <div class="title">{{first.name}}中心</div>
            <div class="second-menu-item" v-for="(second, key) in first.children" :key="key"
                                          :class="{'active': currentTabInfo.second.id === second.id}"
                                          >
              <div class="second-menu-item-name" @click.self="turnPage(second.id)">{{second.name}} </div>
              <div class="third-menu" v-if="!Object.keys(extraTabInfo).length">
                <div class="third-menu-item-wrapper" >
                  <div class="third-menu-item" v-for="(third, key) in second.children" :key="key"
                                               :class="{'active': currentTabInfo.third.id === third.id}"
                                               @click.self="turnPage(third.id)">
                    {{third.name}}
                  </div>
                </div>
              </div>
              <div class="extra-page-tab-wrapper" v-if="Object.keys(extraTabInfo).length"><ExtraPageTab :tabInfo='extraTabInfo' @turnPage='turnPage'/></div>
            </div>
          </div>
          <div class="summary" v-else>

          </div>
        </div>
      </div>
    </div>
    <div class="pages-wrapper" v-if="currentTab !== '00' ">
      <div id="user_content">
        <div id="user">
          <!--<User></User>-->
          <img src="../../assets/image/icon1.png" alt="icon_inform" class="icon">
          <img src="../../assets/image/icon2.png" alt="icon_help" class="icon">
          <img src="../../assets/image/icon3.png" alt="icon_user" class="icon">
          <span @click="toggle" style="cursor: pointer;">管理员<i class="el-icon-caret-bottom" style="color: #C4BDBD"></i></span>
        </div>
        <div v-show="userItemToggle" class="user_toggle">
          <table>
            <tr>
              <td>修改密码</td>
            </tr>
            <tr>
              <td @click="exit">退出</td>
            </tr>
          </table>
        </div>
      </div>

      <router-view @openExtraPage='openExtraPage'/>
    </div>
    <div class="pages-wrapper welcome" v-else><router-view @openExtraPage='openExtraPage'/></div>
  </div>
</template>

<script type="text/ecmascript-6">
import ExtraPageTab from "../commonComponents/ExtraPageTab";
import User from '../userCenter/User';
import { menu } from "./config";
import { deepCopy } from "../../assets/js/api/util.js";
import {logout} from "../../assets/js/login/ajax.js";

export default {
  name: "home",
  created() {
    // 刷新跳转对应的路由
    // console.log(this.$route.meta);
    let tabId = this.$route.meta.pageInfo.id;
    if (tabId.length > 6) {
      this.initMenu(this.$route.meta.pageInfo);
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
      userItemToggle:false,
      menu: menu,
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
    toggle(){
      this.userItemToggle = !this.userItemToggle;
    },
    exit(){
      logout()
        .then(res => {
          console.log("logout-----"+JSON.stringify(res))
          if (res.status == 200){
            this.$message.success("退出");
            sessionStorage.setItem('isLogin', 0);
            this.$router.push({path: '/'})
          } else{
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    turnPage(id) {
      // 关闭额外tab
      this.extraTabInfo = {};
      this.currentTab = id;
    },
    // 初始化menuList 和 获取当前选中的tab
    initMenu(tabId) {
      let mainId = tabId.length >= 2 ? tabId.slice(0, 2) : "01";
      let secId = tabId.length >= 4 ? tabId.slice(0, 4) : mainId + "01";
      let thdId = tabId.length >= 6 ? tabId.slice(0, 6) : secId + "01";
      this.currentTabInfo.main = { id: mainId };
      this.currentTabInfo.second = { id: secId };
      this.currentTabInfo.third = { id: thdId };
    },
    initPage(tabId) {
      // 判断是否是欢迎页面
      if(tabId === '00') {
        this.$router.push({
          path: "/home/welcome"
        });
        return;
      }
      if (tabId.length >= 8) {
        return;
      }
      let pageId = tabId.length === 2 ? `${tabId}0101` : tabId.length === 4 ? `${tabId}01` : tabId
      let currentMainItem = this.getMenuItem(tabId.slice(0, 2));
      this.curretPage = this.getMenuItem(pageId).page;
      this.$router.push({
        path: "/home/" + currentMainItem["node"] + "/" + this.curretPage
      });

    },
    openExtraPage(extraPageInfo) {
      this.extraTabInfo = {};
      this.extraTabInfo.thirdTab = this.getMenuItem(extraPageInfo.id);
      this.extraTabInfo.extraTab = extraPageInfo;
      let query = extraPageInfo.query ? extraPageInfo.query : {};
      sessionStorage.setItem("freshQuery", JSON.stringify(query));
      this.$router.push({
        path: `/home/${extraPageInfo.node}/${extraPageInfo.page}`,
        query: query
      });
    },
    getMenuItem(tabId) {
      if (tabId.length % 2 !== 0) {
        throw Error("必须是偶数");
      }
      if (tabId.length === 2) {
        let mainId = tabId.slice(0, 2);
        let menuItem = '';
        this.menu.forEach((value, index) => {
          if(value.id === mainId) {
            menuItem = value
          }
        })
        return menuItem;
      }
      if (tabId.length === 4) {
        let mainId = tabId.slice(0, 2);
        let secId = tabId.slice(0, 4);
        let menuItem = '';
        this.menu.forEach((value, index) => {
          if (value.id === mainId) {
            value.children.forEach((value, index) => {
              if(value.id === secId) {
                menuItem = value
              }
            });
          }
        });
        return menuItem;
      }
      if (tabId.length >= 6) {
        let mainId = tabId.slice(0, 2);
        let secId = tabId.slice(0, 4);
        let thdId = tabId.slice(0, 6);
        let menuItem = '';
        this.menu.forEach((value, index) => {
          if (value.id === mainId) {
            value.children.forEach((value, index) => {
              if (value.id === secId) {
                value.children.forEach((value, index) => {
                  if(value.id === thdId) {
                    menuItem = value
                  }
                });
              }
            });
          }
        });
        return menuItem;
      }
    }
  },
  watch: {
    currentTab(newVal) {
      this.initMenu(newVal);
      this.initPage(newVal);
    },
    $route(to, from) {
      // console.log(to);
      let tabId = to.meta.pageInfo.id;
      if (tabId.length > 6) {
        this.initMenu(to.meta.pageInfo);
        this.$nextTick(() => {
          this.extraTabInfo = {};
          this.extraTabInfo.thirdTab = this.getMenuItem(tabId);
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
    background-color: #f2f2f2;
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
    background-color: #f2f2f2;
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
  .pages-wrapper {
    position: fixed;
    top: 72px;
    left: 250px;
    right: 0;
    bottom: 0;
    /*background-color: #f2f2f2;*/
    overflow: auto;
    #user_content{
      width: auto;
      height: auto;
      float: right;
      #user{
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
      .user_toggle{
        position:absolute;
        right: 10px;
        float: right;
        table {
          height: 40px;
          text-align: left;
          width: 120px;
          border: 2px solid #eeeeee;
          tr {
            td {
              cursor: pointer;
              font-weight: normal;
              line-height: 40px;
              padding-left: 15px;
              border-bottom: 2px solid #efefef;
            }
          }
        }
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
