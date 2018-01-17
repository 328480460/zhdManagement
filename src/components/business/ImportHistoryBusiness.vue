<template>
    <div class="history-wrapper">
        <ImportFileHistoryTemplate></ImportFileHistoryTemplate>
    </div>
</template>

<script>
import ImportFileHistoryTemplate from '../commonComponents/ImportFileHistoryTemplate'
export default {
  data() {
      return {}
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

