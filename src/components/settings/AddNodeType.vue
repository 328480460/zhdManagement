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
      custom_mould_type:"2",
      tableData: [{
        column_chinese: '节点编码',
        data_type: '数字类型',
      }, {
        column_chinese: '节点名称',
        data_type: '文本类型',
      }, {
        column_chinese: '节点类型',
        data_type: '选择列表',
      }, {
        column_chinese: '节点分类',
        data_type: '选择列表',
      }, {
        column_chinese: '地址',
        data_type: '文本类型',
      }, {
        column_chinese: '节点描述',
        data_type: '文本类型',
      }, {
        column_chinese: '联系人',
        data_type: '文本类型',
      }, {
        column_chinese: '联系电话',
        data_type: '数字类型',
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
