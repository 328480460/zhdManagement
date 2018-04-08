<template>
    <div id="productGoodsInfoDetailTemplate" v-if='detailDataInfo'>
        <ProductGoodsInfoDetailTemplate 
            :edit= false
            :id= 'detailDataInfo.id'
            :productionNum='detailDataInfo.production_num'
            :thisNodeId='detailDataInfo.this_node_id' 
            :productListIn='detailDataInfo.productionInProductList'
            :productListOut='detailDataInfo.productionOutProductList'
            :productDate='detailDataInfo.production_date' 
            :customFields='detailDataInfo.productionCustomList'
            :customMouldId='detailDataInfo.custom_mould_id'
            @editPage = 'editPage'
            >
        </ProductGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import { getDetailProduction } from "../../assets/js/business/ajax.js";
import ProductGoodsInfoDetailTemplate from "../commonComponents/ProductGoodsInfoDetailTemplate";

export default {
  name: "productGoodsInfoDetailTemplate",
  created() {
    this.getDetailDataInfo();
  },
  data() {
    return { detailDataInfo: "", routerQuery: this.$route.query };
  },
  methods: {
    getDetailDataInfo() {
      let params = { id: this.routerQuery.id };
      getDetailProduction(params)
        .then(res => {
          this.detailDataInfo = res.data.production;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    editPage() {
      this.$emit("openExtraPage", {
        node: "business",
        page: "EditProductGoodsInfoDetail",
        name: "编辑生产信息",
        id:'3fb06e18-2a47-489e-ba4f-22bbe1e9c980',
        query: {id: this.routerQuery.id}
      });
    }
   
  },
  components: {
    ProductGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#productGoodsInfoDetailTemplate {
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

