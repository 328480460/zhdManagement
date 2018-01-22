<template>
    <div id="sendGoodsInfoDetail" >
        <SendGoodsInfoDetailTemplate :edit= true  @saveData= 'saveData' >
        </SendGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import SendGoodsInfoDetailTemplate from "../commonComponents/SendGoodsInfoDetailTemplate";
import { saveInvoice } from "../../assets/js/business/ajax.js";
export default {
  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    saveData(data) {
      console.log(data);
      saveInvoice(data)
        .then(res => {
          if (res.status == 200) {
            this.$message.success("保存成功!");
            this.$router.go(-1);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    }
  },
  components: {
    SendGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#sendGoodsInfoDetail {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
}
.demo-input-suffix {
  display: flex;
  .infoNo {
    flex: 0 0 120px;
  }
}
</style>

