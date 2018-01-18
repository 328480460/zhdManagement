<template>
    <div id="sendGoodsInfoDetail" v-if='detailDataInfo'>
        <SendGoodsInfoDetailTemplate 
            :edit= true
            :productList='detailDataInfo.productList' 
            :thisNodeId='"1" || detailDataInfo.this_node_id' 
            :flowNodeId='"1" || detailDataInfo.flow_to_id' 
            :date='detailDataInfo.invoice_date' 
            :customFields='[{"data_value": "苹果","custom_id": "258"},{"data_value": "香蕉","custom_id": "259"}] || detailDataInfo.customFields'
            :customMouldId='"属性id1" || detailDataInfo.custom_mould_id'
            @editPage='editPage'
            >
            <div slot="infoNo">
                <div class="demo-input-suffix">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">{{detailDataInfo.invoice_num}}</div>
                </div>
            </div>
        </SendGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import { getInvoiceDetail } from "../../assets/js/business/ajax.js";
import SendGoodsInfoDetailTemplate from "../commonComponents/SendGoodsInfoDetailTemplate";

export default {
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
          this.detailDataInfo = res.data.invoice;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    editPage() {
      this.$emit("openExtraPage", {
        node: "business",
        page: "editSendGoodsInfoDetail",
        name: "编辑收货信息",
        id: "05030103"
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

