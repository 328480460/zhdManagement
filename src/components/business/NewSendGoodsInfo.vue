<template>
    <div id="sendGoodsInfoDetail" >
        <SendGoodsInfoDetailTemplate :edit= true  @saveData='saveData' >
         
        </SendGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import SendGoodsInfoDetailTemplate from "../commonComponents/SendGoodsInfoDetailTemplate";

export default {
  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    saveData(value) {
        console.log(value)
    },
  },
  components: {
    SendGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#sendGoodsInfoDetail {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
}
.demo-input-suffix {
  display: flex;
  .infoNo {
    flex: 0 0 120px;
  }
}
</style>

