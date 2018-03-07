<template>
  <div id="businesstype">
    <EditCustomTemplate :tableData='tableData' :typetype='typetype'></EditCustomTemplate>
  </div>
</template>

<script type="text/ecmascript-6">
import EditCustomTemplate from "../commonComponents/EditCustomTemplate";
export default {
  name: 'businesstype',
  data(){
    return{
    tableData: [{
        column_chinese: '收货日期',
        data_type: '日期类型',
      }, {
        column_chinese: '来源节点',
        data_type: '选择列表',
      }, {
        column_chinese: '收货产品',
        data_type: '选择列表  ',
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
  methods: {
  },
  components: {
    EditCustomTemplate
  }
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#businesstype{
  min-height: 92%;

}
</style>
