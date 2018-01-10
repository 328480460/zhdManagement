<template>
    <div id="getGoodsInfoDetail" v-if='detailDataInfo'>
        <GetGoodsInfoDetailTemplate :edit= true @saveData= "saveData" >
        </GetGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import { getInvoiceDetail } from "../../assets/js/business/ajax.js";
import GetGoodsInfoDetailTemplate from "../commonComponents/GetGoodsInfoDetailTemplate";

export default {
  name: "getGoodsInfoDetail",
  created() {
    this.getDetailDataInfo();
  },
  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    getDetailDataInfo() {
      let params = { id: "1232131" };
      getInvoiceDetail(params)
        .then(res => {
          this.detailDataInfo = res.data.receipt;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
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

