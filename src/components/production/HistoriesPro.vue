<template>
  <div id="histories">
    <ImportFileHistoryTemplate  :file_type='file_type'></ImportFileHistoryTemplate>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImportFileHistoryTemplate from '../commonComponents/ImportFileHistoryTemplate'
  export default {
    name: 'histories',
    data(){
      return{
        file_type: 1,
      }
    },
    components: {
      ImportFileHistoryTemplate
    }
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #histories {
    height: 92%;
  }
</style>
