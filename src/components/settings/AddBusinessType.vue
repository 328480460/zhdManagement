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
      custom_mould_type:"3",
      tableData: [{
        column_chinese: '收货日期',
        data_type: '日期类型',
      }, {
        column_chinese: '来源节点',
        data_type: '选择列表',
      }, {
        column_chinese: '收货产品',
        data_type: '产品选择列表  ',
      }, {
        column_chinese: '产品批次号',
        data_type: '文本类型',
      }, {
        column_chinese: '产品序列号',
        data_type: '文本类型',
      }, {
        column_chinese: '产品数量',
        data_type: '数字类型',
      }, {
        column_chinese: '产品单位',
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
