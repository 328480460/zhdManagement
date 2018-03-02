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
      tableData: [
        {
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
        }
      ],
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
