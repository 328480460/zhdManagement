<template>
    <div id="getGoodsInfoDetail" v-if='detailDataInfo'>
        <GetGoodsInfoDetailTemplate 
            :edit= false
            :productList='detailDataInfo.productList' 
            :thisNodeId='"测试内容247h" || detailDataInfo.this_node_id' 
            :sourceNodedId='"测试内容247h" || detailDataInfo.source_noded_id' 
            :receiptDate='detailDataInfo.receipt_date' 
            :customFields='[{"data_value": "苹果","custom_id": "258"},{"data_value": "香蕉","custom_id": "259"}] || detailDataInfo.customFields'
            :customMouldId='"属性id1" || detailDataInfo.custom_mould_id'
            @editPage='editPage'
            >
            <div slot="infoNo">
                <div class="demo-input-suffix">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">{{detailDataInfo.receipt_num}}</div>
                </div>
            </div>
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
        id: "05010103",
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
.demo-input-suffix {
  display: flex;
  .infoNo {
    flex: 0 0 120px;
  }
}
</style>

