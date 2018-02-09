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
        :action= uploadUrl
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :file-list="fileList"
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

<script type="text/ecmascript-6" >
  import {
    downLoad
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
      uploadUrl: {
        type: String,
        required: true
      }
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleRemove(file, fileList) {
        console.log("handleRemove---"+JSON.stringify(file.name));
        this.fileList = fileList
        console.log("fileList---"+JSON.stringify(this.fileList));
      },
      downLoad(){
        if(this.templateValue == ''){
          this.$message.warning("请选择模板");
        }else{
          let params ={
              type:this.templateValue
          }

          axios.get('http://192.168.1.73:8764/meatWebServer/downLoad/business?type=Production', {responseType:'blob'})
            .then(function (response) {
              console.log("~~~~"+JSON.stringify(response))
              FileSaver.saveAs(response.body, 'Export2.xlsx')

//              let content = new Blob([response.data], {type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})
//              let url = URL.createObjectURL(content)
//              window.location.href=url

            //定义文件内容，类型必须为Blob 否则createObjectURL会报错
//            let content = new Blob([JSON.stringify(this.todos)])
//            let  urlObject = window.URL || window.webkitURL || window
//            let url = urlObject.createObjectURL(content)
//            let el = document.createElement('a')
//            el.href = url
//            el.download ="zyyy.xlsx"
//            el.click()
//            urlObject.revokeObjectURL(url)

          }).catch(function (error) {
            alert(error);
          });

          /* downLoad(params)
            .then(res => {
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });*/
        }
      },
      downloadyemplate(){
        /*下载模板接口*/
        this.downLoad()
      },

      update(){
        this.$message.success("上传文件");
        console.log("点击上传文件保存--"+JSON.stringify(this.imageUrl))
      }
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
