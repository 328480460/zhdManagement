<template>
    <div id="getGoodsInfoDetail" >
        <GetGoodsInfoDetailTemplate :edit= true  @saveData= "saveData" >
        </GetGoodsInfoDetailTemplate>
    </div>
</template>

<script type="text/ecmascript-6">
import GetGoodsInfoDetailTemplate from "../commonComponents/GetGoodsInfoDetailTemplate";
import { saveReceipt } from "../../assets/js/business/ajax.js";
export default {
  name: "getGoodsInfoDetail",

  data() {
    return { detailDataInfo: "" };
  },
  methods: {
    saveData(data) {
      console.log(data);
      saveReceipt(data)
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
    GetGoodsInfoDetailTemplate
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#getGoodsInfoDetail {
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

