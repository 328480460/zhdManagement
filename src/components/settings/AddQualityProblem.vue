<template>
  <div id="producttype">
    <AddCustomTemplate :tableData='tableData' :custom_mould_type='custom_mould_type'></AddCustomTemplate>
  </div>
</template>

<script type="text/ecmascript-6">
  import AddCustomTemplate from "../commonComponents/AddCustomTemplate";
export default {
  name: 'producttype',
  data(){
    return{
      custom_mould_type:"5",
      tableData: [{
        column_chinese: '问题标题',
        data_type: '文本类型',
      }, {
        column_chinese: '问题发现人',
        data_type: '文本类型',
      }, {
        column_chinese: '问题描述',
        data_type: '文本类型',
      }],
    }
  },
  methods: {},
  components: {
    AddCustomTemplate
  }
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #producttype{
    min-height: 92%;
  }
</style>
