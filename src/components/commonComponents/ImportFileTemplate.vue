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
        @click="downloadyemplate()">下载模板</el-button>
    </div>

    <div class="batch-right">
      <div class="title-bg">第二步：上传文件
      </div>
      <!--更换“action”上传模板-->
      <el-upload
        class="upload-demo"
        drag
        :action= uploadUrl+templateValue
        :on-success="uploadSuccess"
        :onError="uploadError"
        :file-list="fileList"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->

      </el-upload>
      <el-button
        type="primary"
        size="medium"
        class="download-template"
        :action= uploadUrl+templateValue
        >保存</el-button>
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
//        templateValue: 'Receipt',
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
      downLoad(){
        if(this.templateValue == ''){
          this.$message.warning("请选择模板");
        }else{
          var that = this
          /*下载模板网络请求*/
          axios.get(this.downloadUrl+this.templateValue,{responseType:'blob'})
            .then(function (response) {
              if(response.status == 200){
                FileSaver.saveAs(response.data, that.templateValue+'.xlsx')
                console.log("~~~~下载模板成功~~~~"+JSON.stringify(response))
              }
            }).catch(function (error) {
              console.log("error下载模板---"+error)
          });
        }
      },
      downloadyemplate(){
        /*下载模板接口*/
        this.downLoad()
      },
      // 上传成功
      uploadSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$message.success("上传成功");
      },
      // 上传错误
      uploadError (response, file, fileList) {
        console.log('上传失败，请重试！')
      },
  /*    update(){
        /!*上传模板网络请求*!/
        axios.post(this.uploadUrl+this.templateValue)
          .then(function (response) {
            this.$message.success("上传文件");
          }).catch(function (error) {
          console.log("uploadUrl--error---"+error)
        });
      }*/
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
