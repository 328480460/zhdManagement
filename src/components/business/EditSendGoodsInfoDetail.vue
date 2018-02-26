<template>
    <div id="sendGoodsInfoDetail" v-if='detailDataInfo'>
        <SendGoodsInfoDetailTemplate 
            :edit= true
            :id= 'detailDataInfo.id'
            :invoiceNum='detailDataInfo.invoice_num'
            :productList='detailDataInfo.productList' 
            :thisNodeId='detailDataInfo.this_node_id' 
            :flowNodeId='detailDataInfo.flow_to_id' 
            :date='detailDataInfo.invoice_date' 
            :customFields='detailDataInfo.customFields'
            :customMouldId='detailDataInfo.custom_mould_id'
            @saveData= 'saveData'
            >
        </SendGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import {
  getInvoiceDetail,
  updateInvoice
} from "../../assets/js/business/ajax.js";
import SendGoodsInfoDetailTemplate from "../commonComponents/SendGoodsInfoDetailTemplate";

export default {
  created() {
    this.getDetailDataInfo();
  },
  data() {
    return { detailDataInfo: "", routerQuery: this.$route.query };
  },
  methods: {
    getDetailDataInfo() {
      let params = { id: this.routerQuery.id };
      getInvoiceDetail(params)
        .then(res => {
          this.detailDataInfo = res.data.invoice;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    saveData(data) {
      console.log(data);
      updateInvoice(data)
        .then(res => {
          if (res.status == 200) {
            this.$message.success("保存成功!");
            this.$emit("openExtraPage", {
              node: "business",
              page: "sendGoodsInfoDetail",
              name: "发货信息详情",
              id: "05030102",
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

