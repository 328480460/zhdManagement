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
      uploadUrl: "http://47.92.149.109:7108/mockjsdata/2/Product/update_modle_business_type",
      templatespro: [
        {
          value: "Receipt",
          label: "进场模板"
        },
        {
          value: "Production",
          label: "生产模板"
        },
        {
          value: "ProductionGL",
          label: "生产关联模板"
        },
        {
          value: "Invoice",
          label: "出库模板"
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

