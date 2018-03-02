<template>
  <div id="producttype">
    <EditCustomTemplate :tableData='tableData'></EditCustomTemplate>
  </div>
</template>

<script type="text/ecmascript-6">
  import EditCustomTemplate from "../commonComponents/EditCustomTemplate";
export default {
  name: 'producttype',
  data(){
    return{
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
    EditCustomTemplate
  }
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#producttype{
  min-height: 92%;
}
</style>
