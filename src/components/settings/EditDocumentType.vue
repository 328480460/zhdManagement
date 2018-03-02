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
        column_chinese: '文档名称',
        data_type: '文本类型',
      }, {
        column_chinese: '选择文件',
        data_type: '文本类型',
      }, {
        column_chinese: '有效期',
        data_type: '日期类型',
      }, {
        column_chinese: '关联产品',
        data_type: '选择列表',
      }, {
        column_chinese: '关联节点',
        data_type: '选择列表',
      },{
        column_chinese: '管理业务信息',
        data_type: '选择列表',
      }, {
        column_chinese: '认证机构',
        data_type: '选择列表',
      }, {
        column_chinese: '认证名称',
        data_type: '选择列表',
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
