<template>
    <div id="getGoodsInfoDetail" v-if='dataInfo'>
        <GetGoodsInfoDetailTemplate 
            :productList='dataInfo.productList' 
            :thisNodeId='dataInfo.this_node_id' 
            :sourceNodedId='dataInfo.source_noded_id' 
            :receiptDate='dataInfo.receipt_date' 
            :customFields='dataInfo.customFields' 
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
    let params = { id: "1232131" };
    getInvoiceDetail(params)
      .then(res => {
        this.dataInfo = res.data.receipt;
        console.log(this.dataInfo);
      })
      .catch(() => {
        this.$message.error("出错啦!");
      });
  },
  data() {
    return { dataInfo: "" };
  },
  components: {
    GetGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .demo-input-suffix {
        display: flex;
        .infoNo {
            flex: 0 0 100px;
        }
    }
</style>

