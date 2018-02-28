<template>
  <div id="batchimport">
    <div class="batch-left">
      <div class="title-bg">第一步：下载产品模板</div>
      <div class="module-container">
        选择文件类型
        <el-select v-model="value" disabled placeholder="产品模板" style="width: auto">
          <el-option
            v-for="item in templatespro"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button
        class="download-template"
        size="mini"
        type="text"
        @click="downloadyemplate">下载产品模板</el-button>
    </div>

    <div class="batch-right">
      <div class="title-bg">第二步：上传文件
      </div>
      <!--更换“action”上传产品模板-->
      <el-upload
        class="upload-demo"
        drag
        action="http://47.92.149.109:7108/mockjsdata/2/Product/update_modle_product_type"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
      </el-upload>
      <el-button
        type="primary" size="medium"
        class="download-template"
        @click="update">保存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'batchimport',
  data(){
    return{
      templatespro: [{
        value: '1',
        label: '产品模板'
      }],
      value: ''

    }
  },
  methods:{
    downloadyemplate(){
      console.log("“下载产品模板”")
    },
    update(){
      console.log("上传文件“保存”")
    }
  }

}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#batchimport{
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .batch-left{
    float: left;
    width: 40%;
    margin: 10px;
    margin-left: 40px;
  }
  .batch-right{
    float: left;
    width: 40%;
    margin: 10px;
    margin-left: 80px;
    .upload-demo{
      text-align: center;
      margin-top: 20px;
    }
  }
  .title-bg{
    width: 100%;
    background-color: #efefef;
    padding: 10px;
  }
  .module-container{
    margin-top: 20px;
    margin-left: 30px;
  }
  .download-template{
    float: right;
    margin-top: 20px;
  }

}
</style>
