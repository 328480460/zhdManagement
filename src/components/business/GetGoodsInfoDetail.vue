<template>
    <div id="getGoodsInfoDetail" v-if='detailDataInfo'>
        <GetGoodsInfoDetailTemplate 
            :edit= false
            :id= 'detailDataInfo.id'
            :receiptNum='detailDataInfo.receipt_num'
            :productList='detailDataInfo.productList' 
            :thisNodeId=' detailDataInfo.this_node_id' 
            :sourceNodedId=' detailDataInfo.source_noded_id' 
            :receiptDate='detailDataInfo.receipt_date' 
            :customFields='detailDataInfo.customFields'
            :customMouldId='detailDataInfo.custom_mould_id'
            @editPage='editPage'
            >
            
        </GetGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import { getReceiptDetail } from "../../assets/js/business/ajax.js";
import GetGoodsInfoDetailTemplate from "../commonComponents/GetGoodsInfoDetailTemplate";

export default {
  name: "getGoodsInfoDetail",
  created() {
    this.getDetailDataInfo();
  },
  data() {
    return {
      detailDataInfo: "", 
      routerQuery: this.$route.query
    };
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
    editPage() {
      this.$emit("openExtraPage", {
        node: "business",
        page: "editGetGoodsInfoDetail",
        name: "编辑收货信息",
        id:'97728609-9717-48d9-92ff-1d7bcc48dfa2',
        query: {id: this.routerQuery.id}
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

