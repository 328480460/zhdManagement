<template>
    <div id="productGoodsInfoDetailTemplate" v-if='detailDataInfo'>
        <ProductGoodsInfoDetailTemplate 
            :edit= false
            :productList='detailDataInfo.productList' 
            :thisNodeId='"1" || detailDataInfo.this_node_id' 
            :productListIn='detailDataInfo.productionInProductList'
            :productListOut='detailDataInfo.productionOutProductList'
            :productDate='detailDataInfo.production_date.toString()' 
            :customFields='[{"data_value": "苹果","custom_id": "258"},{"data_value": "香蕉","custom_id": "259"}] || detailDataInfo.customFields'
            :customMouldId='"属性id1" || detailDataInfo.custom_mould_id'
            @saveData= saveData
            @editPage = editPage
            >
            <div slot="infoNo">
                <div class="demo-input-suffix">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">信息编号缺少字段</div>
                </div>
            </div>
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
    return { detailDataInfo: "" };
  },
  methods: {
    getDetailDataInfo() {
      let params = { id: "1232131" };
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
        id: "05020103"
      });
    },
    saveData(data) {
        console.log(data)
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

