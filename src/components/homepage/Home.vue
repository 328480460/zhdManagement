<template>
  <div id="home">
    <div class="left-menu">
      <div class="logo-wrapper">
        <img src="../../assets/image/logo_03.png" alt="logo" class="logo">
      </div>
      <div class="main-menu">
        <div class="main-menu-item" v-for="(item,key) in mainMenuList" :key="key" :class="{'active': currentTabInfo.main.id === item.id}" @click="turnPage(item.id)">
          <i class="icon-font" :class="item.icon"></i>{{item.name}}
        </div>
      </div>
    </div>
    <div class="second-menu">
      <div class="title">{{currentTabInfo.main.name}}中心</div>
      <div class="second-menu-item" v-for="(item,key) in secondMenuList"
                                    :key="key" :class="{'active': currentTabInfo.second.id === item.id}"
                                    @click="turnPage(item.id)">{{item.name}}</div>
    </div>
    <div class="third-menu">
      <div class="third-menu-item-wrapper" v-if="!Object.keys(extraTabInfo).length">
        <div class="third-menu-item" v-for="(item,key) in thirdMenuList" :key="key"
                                  :class="{'active': currentTabInfo.third.id === item.id}"
                                  @click="turnPage(item.id)">{{item.name}}</div>
      </div>
      <div class="extra-page-tab-wrapper" v-if="Object.keys(extraTabInfo).length"><ExtraPageTab :tabInfo='extraTabInfo' @turnPage='turnPage'/></div>
    </div>
    <div class="pages-wrapper" ><router-view @openExtraPage='openExtraPage'/></div>
  </div>
</template>

<script type="text/ecmascript-6">
import ExtraPageTab from "../commonComponents/ExtraPageTab";
import { menu } from "./config";
export default {
  name: "home",
  created() {
    // this.$router.beforeEach((to, from, next) => {
    //   console.log(to)
    //   next();
    // });
    this.initMenu("010101");
    this.initPage("010101");
  },
  data() {
    return {
      menu: menu,
      mainMenuList: [],
      secondMenuList: [],
      thirdMenuList: [],
      currentTab: "", // 当前tab页面的id
      currentTabInfo: {
        // 当前一级二级三级页面的信息
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
      let mainId = tabId.length >= 2 ? tabId.slice(0, 2) : "01";
      let secId = tabId.length >= 4 ? tabId.slice(2, 4) : "01";
      let thdId = tabId.length >= 6 ? tabId.slice(4, 6) : "01";
      this.mainMenuList = [];
      this.secondMenuList = [];
      this.thirdMenuList = [];
      this.menu.forEach((value, index) => {
        this.mainMenuList.push(value);
        if (index === mainId - 1) {
          value.children.forEach((value, index) => {
            this.secondMenuList.push(value);
            if (index === secId - 1) {
              value.children.forEach((value, index) => {
                this.thirdMenuList.push(value);
              });
            }
          });
        }
      });

      this.currentTabInfo.main = this.mainMenuList[mainId - 1];
      this.currentTabInfo.second = this.secondMenuList[secId - 1];
      this.currentTabInfo.third = this.thirdMenuList[thdId - 1];
    },
    initPage(tabId) {
      if (tabId.length >= 8) {
        return;
      }
      let mainId = tabId.length >= 2 ? tabId.slice(0, 2) : "01";
      let secId = tabId.length >= 4 ? tabId.slice(2, 4) : "01";
      let thdId = tabId.length >= 6 ? tabId.slice(4, 6) : "01";
      this.curretPage = this.menu[mainId - 1]["children"][secId - 1][
        "children"
      ][thdId - 1]["page"];
      this.$router.push({path: "/home/" + this.menu[mainId - 1]['node'] + '/' + this.curretPage});
    },
    openExtraPage(extraPageInfo) {
      // this.turnPage(extraPageInfo.id);
      this.extraTabInfo = {};
      this.extraTabInfo.thirdTab = this.currentTabInfo.third;
      this.extraTabInfo.extraTab = extraPageInfo;
      this.$router.push({ path: `/home/${extraPageInfo.node}/${extraPageInfo.page}` });
    }
  },
  watch: {
    currentTab(newVal) {
      // console.log(newVal);
      this.initMenu(newVal);
      this.initPage(newVal);
    },
    $route(to, from) {
      let tabId = to.meta.pageInfo.id
      if(tabId.length > 6) {
        this.initMenu(to.meta.pageInfo)
        this.openExtraPage(to.meta.pageInfo)
      } else {
        // 关闭额外tab
        this.extraTabInfo = {};
      }
      this.currentTab = tabId;
    }
  },
  components: {
    ExtraPageTab
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
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
        cursor: pointer;
        &.active {
          background-color: #fff;
          color: #282828;
        }
        .icon-font {
          margin-right: 10px;
        }
      }
    }
  }
  .second-menu {
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
      cursor: pointer;
      &.active {
        background-color: #f2f2f2;
      }
    }
  }
  .third-menu {
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
  .pages-wrapper {
    position: fixed;
    top: 68px;
    left: 250px;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    overflow: auto;
  }
}
</style>
