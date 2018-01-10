<template>
    <div id="getGoodsInfoDetail" v-if='detailDataInfo'>
        <GetGoodsInfoDetailTemplate 
            :productList='detailDataInfo.productList' 
            :thisNodeId='detailDataInfo.this_node_id' 
            :sourceNodedId='detailDataInfo.source_noded_id' 
            :receiptDate='detailDataInfo.receipt_date' 
            :customFields='detailDataInfo.customFields'
            :customMouldId='detailDataInfo.custom_mould_id'
            >
            <div slot="infoNo">
                <div class="demo-input-suffix">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">xxxxxxx</div>
                </div>
            </div>
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
    flex: 0 0 100px;
  }
}
</style>

