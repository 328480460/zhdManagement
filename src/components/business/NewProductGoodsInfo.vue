<template>
    <div id="newProductGoodsInfo" >
        <ProductGoodsInfoDetailTemplate :edit= true @saveData= "saveData">
        </ProductGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import ProductGoodsInfoDetailTemplate from "../commonComponents/ProductGoodsInfoDetailTemplate";
import { createProduction } from "../../assets/js/business/ajax.js";
export default {
  name: "productGoodsInfoDetailTemplate",
  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    saveData(data) {
      console.log(data);
      createProduction(data)
        .then(res => {
          if (res.status == 200) {
            this.$message.success("保存成功!");
            this.$router.go(-1);
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
#newProductGoodsInfo {
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

