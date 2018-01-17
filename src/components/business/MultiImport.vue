<template>
    <div class="import-wrapper" id="multiImport">
        <ImportFileTemplate :templatespro='templatespro' :uploadUrl='uploadUrl'></ImportFileTemplate>
    </div>
</template>

<script>
import ImportFileTemplate from "../commonComponents/ImportFileTemplate";
export default {
  data() {
    return {
      uploadUrl: "http://47.92.149.109:7108/mockjsdata/2/Product/update_modle_product_type",
      templatespro: [
        {
          value: "1",
          label: "产品模板"
        },
        {
          value: "2",
          label: "节点模板"
        },
        {
          value: "3",
          label: "追溯模板"
        }
      ]
    };
  },
  methods: {},
  components: {
    ImportFileTemplate
  }
};
</script>
<style lang="less" scoped>
.import-wrapper {
  height: 92%;
}
</style>

