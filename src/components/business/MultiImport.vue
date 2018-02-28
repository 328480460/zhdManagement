<template>
    <div class="import-wrapper" id="multiImport">
        <ImportFileTemplate :templatespro='templatespro' :uploadUrl='uploadUrl' :downloadUrl='downloadUrl'></ImportFileTemplate>
    </div>
</template>

<script>
import ImportFileTemplate from "../commonComponents/ImportFileTemplate";
import {ENVIRNMENTTEST,ENVIRNMENTTEST2} from "../../assets/js/config/environment.js";
export default {
  data() {
    return {
      downloadUrl: ENVIRNMENTTEST2+"/downLoad/business?type=",
      uploadUrl: ENVIRNMENTTEST2+"/upload/business?type=",
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
  min-height: 92%;
}
</style>

