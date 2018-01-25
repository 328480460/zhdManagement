<template>
  <div id="extraPageTab">
    <div class="third-tab active" @click.stop="turnPage">{{tabInfo.thirdTab.name}}</div>
    <span class="separator" @click.stop>/</span>
    <div class="extra-tab" @click.stop>{{tabInfo.extraTab.name}}</div>
  </div>
</template>

<script>
export default {
  name: "extraPageTab",
  methods: {
    turnPage() {
      // console.log(this.tabInfo);
      this.$emit('turnPage',this.tabInfo.thirdTab.id);
    }
  },
  props: {
    tabInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style rel="stylesheet/scss" lang='less' scoped>
#extraPageTab {
  padding-left: 15px;
  font-size: 0;
  >div {
    display: inline-block;
    font-size: 15px;
    &.active {
      color: #409eff;
      cursor: pointer;
    }
  }
  .separator {
    margin: 0 10px;
    display: inline-block;
    font-size: 15px;
  }
}
</style>
