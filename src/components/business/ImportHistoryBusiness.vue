<template>
    <div class="history-wrapper">
        <ImportFileHistoryTemplate  :file_type='file_type'></ImportFileHistoryTemplate>
    </div>
</template>

<script>
import ImportFileHistoryTemplate from '../commonComponents/ImportFileHistoryTemplate'
export default {
  data() {
      return {
        file_type: 3,
      }
  },
  components: {
      ImportFileHistoryTemplate
  }
}
</script>

<style lang="less" scoped>
.history-wrapper {
  height: 92%;
}
</style>

