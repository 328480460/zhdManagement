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
      custom_mould_type:1,
      tableData: [{
        column_chinese: '产品编码',
        data_type: '数字类型',
      }, {
        column_chinese: '产品名称',
        data_type: '文本类型',
      }, {
        column_chinese: '产品分类编码',
        data_type: '选择列表',
      }, {
        column_chinese: '自定义分类编码',
        data_type: '选择列表',
      }, {
        column_chinese: '产品单位',
        data_type: '选择列表',
      }, {
        column_chinese: '产品描述',
        data_type: '文本类型',
      }, {
        column_chinese: '品牌名称',
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
