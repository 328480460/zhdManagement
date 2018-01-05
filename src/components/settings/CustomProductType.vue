<template>
  <div id="invitation">
    <div class="default-info-wrapper">
      <div class="section-content">
        <el-form ref="form" label-width="120px">
          <el-form-item label="产品类型">
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
    name: "invitation",
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

<style rel="stylesheet/scss" lang='less' scoped>
#invitation {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  .default-info-wrapper {
    .section-content {
      width: 600px;
    }
  }
}
</style>
