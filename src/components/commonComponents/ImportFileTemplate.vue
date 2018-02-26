<template>
  <div id="batchimport">
    <div class="batch-left">
      <div class="title-bg">第一步：选择模板</div>
      <div class="module-container">
        选择文件类型
        <el-select v-model="templateValue"  placeholder="请选择模板" style="width: auto">
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
        @click="downloadyemplate">下载模板</el-button>
    </div>

    <div class="batch-right">
      <div class="title-bg">第二步：上传文件
      </div>
      <!--更换“action”上传模板-->
      <el-upload
        class="upload-demo"
        drag
        ref="upload"
        :auto-upload = 'false'
        :action= uploadUrl+templateValue
        :before-upload="beforeAvatarUpload"
        :on-success="uploadSuccess"
        :onError="uploadError"
        :file-list="fileList"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
      </el-upload>
      <el-button
        type="primary"
        size="medium"
        class="download-template"
        @click="update"
        >上传</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" >
  import {
    downLoad,
    upload
  } from "../../assets/js/business/ajax.js";
  import axios from 'axios';
  import FileSaver from 'file-saver';

  export default {
    name: 'importFileTemplate',
    data(){
      return{
        templateValue: '',
        imageUrl: '',
        fileList:[],
      }
    },
    props: {
      templatespro: {
        type: Array,
        required: true
      },
      downloadUrl: {
        type: String,
        required: true
      },
      uploadUrl: {
        type: String,
        required: true
      }
    },
    methods:{
      //上传文件格式判断
      beforeAvatarUpload(file) {
        let Xls = file.name.split('.');
        if(Xls[1] === 'xls'||Xls[1] === 'xlsx'){
          return file
        }else {
          this.$message.error('上传文件只能是 xls/xlsx 格式!')
          return false
        }
      },
      //下载模板
      downloadyemplate(){
        if(this.templateValue == ''){
          this.$message.warning("请选择模板");
        }else{
          var that = this
          /*下载模板接口*/
          axios.get(this.downloadUrl+this.templateValue,{responseType:'blob'})
            .then(function (response) {
              if(response.status == 200){
                FileSaver.saveAs(response.data, that.templateValue+'.xlsx')
              }
            }).catch(function (error) {
            console.log("error下载模板---"+error)
          });
        }
      },
      // 上传成功
      uploadSuccess(res, file) {
        console.log("res-"+JSON.stringify(res))
        if(res.status == 200){
          this.imageUrl = URL.createObjectURL(file.raw);
          this.$message.success("上传成功");
        }else {
          this.$message.error(res.msg);
        }
      },
      // 上传错误
      uploadError (response, file, fileList) {
        console.log('上传失败，请重试！')
      },
      //上传模板按钮
      update() {
        if(this.templateValue == ''){
          this.$message.warning("请选择模板");
        }else{
          this.$refs.upload.submit();
        }
      },
    }
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #batchimport{
    margin: 10px;
    padding: 10px;
    height: 100%;
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
