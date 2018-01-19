<template>
    <div id="editProductGoodsInfoDetailTemplate" v-if='detailDataInfo'>
        <ProductGoodsInfoDetailTemplate 
            :edit= true
            :id= 'detailDataInfo.id'
            :productionNum='detailDataInfo.production_num'
            :thisNodeId='"测试内容247h" || detailDataInfo.this_node_id' 
            :productListIn='detailDataInfo.productionInProductList'
            :productListOut='detailDataInfo.productionOutProductList'
            :productDate='detailDataInfo.production_date' 
            :customFields='[{"data_value": "苹果","custom_id": "258"},{"data_value": "香蕉","custom_id": "259"}] || detailDataInfo.customFields'
            :customMouldId='"属性id1" || detailDataInfo.custom_mould_id'
            @saveData= 'saveData'
            >
        </ProductGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import { getDetailProduction, updateProduction } from "../../assets/js/business/ajax.js";
import ProductGoodsInfoDetailTemplate from "../commonComponents/ProductGoodsInfoDetailTemplate";

export default {
  name: "editProductGoodsInfoDetailTemplate",
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
    saveData(data) {
      console.log(data);
      updateProduction(data)
        .then(res => {
          if (res.status == 200) {
            this.$message.success("保存成功!");
            this.$emit("openExtraPage", {
              node: "business",
              page: "productGoodsInfoDetail",
              name: "生产信息详情",
              id: "05020102",
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

