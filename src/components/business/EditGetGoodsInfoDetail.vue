<template>
    <div id="getGoodsInfoDetail" v-if='detailDataInfo'>
        <GetGoodsInfoDetailTemplate 
            :edit= true
            :id = 'detailDataInfo.id'
            :receiptNum='detailDataInfo.receipt_num'
            :productList='detailDataInfo.productList' 
            :thisNodeId='"测试内容247h" || detailDataInfo.this_node_id' 
            :sourceNodedId='"测试内容247h" || detailDataInfo.source_noded_id' 
            :receiptDate='detailDataInfo.receipt_date' 
            :customFields='[{"data_value": "苹果","custom_id": "258"},{"data_value": "香蕉","custom_id": "259"}] || detailDataInfo.customFields'
            :customMouldId='"属性id1" || detailDataInfo.custom_mould_id'
            @saveData= 'saveData'
            >
        </GetGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import {
  getReceiptDetail,
  updateReceipt
} from "../../assets/js/business/ajax.js";
import GetGoodsInfoDetailTemplate from "../commonComponents/GetGoodsInfoDetailTemplate";

export default {
  name: "getGoodsInfoDetail",
  created() {
    this.getDetailDataInfo();
  },
  data() {
    return { detailDataInfo: "", routerQuery: this.$route.query };
  },
  methods: {
    getDetailDataInfo() {
      let params = { id: this.routerQuery.id };
      getReceiptDetail(params)
        .then(res => {
          this.detailDataInfo = res.data.receipt;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    saveData(data) {
      console.log(data);
      updateReceipt(data)
        .then(res => {
          if (res.status == 200) {
            this.$message.success("保存成功!");
            this.$emit("openExtraPage", {
              node: "business",
              page: "getGoodsInfoDetail",
              name: "收货信息详情",
              id: "05010102",
              query: { id: this.routerQuery.id }
            });
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
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
</style>

