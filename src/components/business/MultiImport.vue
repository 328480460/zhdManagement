<template>
    <div class="import-wrapper" id="multiImport">
        <ImportFileTemplate :templatespro='templatespro' :uploadUrl='uploadUrl' :downloadUrl='downloadUrl'></ImportFileTemplate>
    </div>
</template>

<script>
import ImportFileTemplate from "../commonComponents/ImportFileTemplate";
export default {
  data() {
    return {
      downloadUrl: "http://192.168.1.60:8764/meatWebServer/downLoad/business?type=",
      uploadUrl: "http://192.168.1.222:8764/meatWebServer/upload/business?type=",
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

