<template>
  <div id="documenttype">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form ref="form" label-width="120px">
          <el-form-item label="文档类型">
            <el-input ></el-input>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
    name: "documenttype",
    created() {
    },
    data() {
      return{

      }
    },
    methods: {

    }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#documenttype {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      width: 600px;
    }
  }
}
</style>
