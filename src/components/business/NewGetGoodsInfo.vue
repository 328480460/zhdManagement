<template>
    <div id="getGoodsInfoDetail" >
        <GetGoodsInfoDetailTemplate :edit= true @saveData= "saveData" >
        </GetGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import GetGoodsInfoDetailTemplate from "../commonComponents/GetGoodsInfoDetailTemplate";

export default {
  name: "getGoodsInfoDetail",

  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    saveData(data) {
      console.log(data)
    }
  },
  components: {
    GetGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#getGoodsInfoDetail {
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

