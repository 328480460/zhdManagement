<template>
  <div id="producttype">
    <div class="batch-left">
      <el-form ref="form" label-width="100px">
        <el-form-item label="*自定义名称">
          <el-input v-model="mould_name" ></el-input>
        </el-form-item>
        <el-form-item label="*所述环节">
          <el-select v-model="sub_link" clearable  placeholder="选择所属环节" style="width: 100%">
            <el-option label="收货信息" value="收货信息"></el-option>
            <el-option label="生产信息" value="生产信息"></el-option>
            <el-option label="发货信息" value="发货信息"></el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <div class="custom-form">
        <div class="custom-title">自定义字段</div>
        <div class="custom-line"></div>
        <div class="float-wrap">
          <div class="custom-left">
            <p>*字段名称</p>
            <el-input v-model="column_name" placeholder="请输入字段名称" style="margin-top: 10px"></el-input>
          </div>
          <div class="custom-right">
            <p>*字段类型</p>
            <el-select v-model="data_type" clearable  placeholder="选择字段类型" style="margin-top: 10px;width: 100%">
              <el-option label="文本类型" value="string"></el-option>
              <el-option label="数字类型" value="number"></el-option>
              <el-option label="选择列表" value="date"></el-option>
            </el-select>
          </div>
          <div class="weather-required">
            <el-checkbox v-model="checked">是否为必填</el-checkbox>
          </div>
          <el-button type="primary" size="medium" class="btn-search" @click="add">增加字段</el-button>
        </div>
      </div>
    </div>

    <div class="batch-right">
      <div class="custom-title"> <i class="el-icon-arrow-down"></i>默认字段</div>
      <div class="custom-line"></div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="column_chinese"
          label="字段名称"
          style="width: 50%">
        </el-table-column>
        <el-table-column
          prop="data_type"
          label="字段类型"
          style="width: 50%">
        </el-table-column>
      </el-table>

      <div class="custom-title" style="margin-top: 10px"> <i class="el-icon-arrow-down"></i>自定义字段</div>
      <div class="custom-line"></div>
      <el-table
        :data="addDatas"
        style="width: 100%">
        <el-table-column
        >
          <template slot-scope="scope">
            <i class="el-icon-remove" style="color: #990000" @click="deleteRow(scope.$index, addDatas)"
            ></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="column_chinese"
          label="字段名称"
        >
        </el-table-column>
        <el-table-column
          prop="data_type"
          label="字段类型"
        >
        </el-table-column>
        <el-table-column
          prop="id_required"
          label="是否为必须项"
        >
        </el-table-column>
      </el-table>

      <el-button
        type="primary"
        size="medium"
        class="bt-save"
        @click="save">保存</el-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    saveCustomAttributes,
  } from "../../assets/js/settings/ajax.js";
  import { deepCopy } from "../../assets/js/api/util.js";

  export default {
    name: 'producttype',
    data(){
      return{
        checked:false,
        sub_link:'',
        mould_name:'',
        column_name:'',
        column_chinese:'',
        data_type:'',
        id_required:'',
        addDatas:[],

        tableData: [{
          column_chinese: '收货日期',
          data_type: '日期类型',
        }, {
          column_chinese: '来源节点',
          data_type: '选择列表',
        }, {
          column_chinese: '收货产品',
          data_type: '选择列表',
        }, {
          column_chinese: '产品批次号',
          data_type: '文本类型',
        }, {
          column_chinese: '产品序列号',
          data_type: '文本类型',
        }, {
          column_chinese: '产品数量',
          data_type: '数字类型',
        }, {
          column_chinese: '产品单位',
          data_type: '文本类型',
        }],
      }
    },
    mounted() {

    },
    methods:{
      //“增加字段”
      add(){
        if(this.mould_name == ''){
          this.$message.warning("请输入“自定义名称”！");
        }else if(this.sub_link == ''){
          this.$message.warning("请选择“所述环节”！");
        }else if(this.column_name == ''){
          this.$message.warning("请输入“字段名称”！");
        }else if(this.data_type == ''){
          this.$message.warning("请选择“字段类型”！");
        }else{
          //判断checked
          if(this.checked == true){
            this.id_required = 1
          }else  if(this.checked == false){
            this.id_required = 0
          }
          var arr  =
          {
            "column_chinese" :this.column_name,
            "column_english" :"",
            "data_type" :this.data_type,
            "id_required" :this.id_required,
          }
          this.addDatas .push(arr);
        }
      },
      //删除单条的“自定义字段”
      deleteRow(index, rows){
        rows.splice(index, 1);

      },
      //自定义属性新增接口
      save(){
        if(this.addDatas == ''){
          this.$message.warning("请添加自定义字段！");
        }else {
          var customAttribute  = {
            customAttributeList :this.addDatas,
            custom_mould_type :"3",
            mould_name :this.mould_name,
            sub_link :this.sub_link,
          }
          console.log("customAttribute---"+JSON.stringify(customAttribute))
          saveCustomAttributes(customAttribute)
            .then(res => {
              if (res.status == 200) {
                this.$message.success("添加成功!");
                this.$router.go(-1);
              }
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
        }
      },
    }
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #producttype{
    margin: 10px;
    padding: 10px;
    height: 100%;
    background-color: #fff;
    .batch-left{
      float: left;
      width: 40%;
      margin: 10px;
      .custom-form{
        margin-top: 20px;
        width: 100%;
        height: 250px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        .float-wrap{
          width: 100%;
          height: 100%;
          margin-top: 10px;
          p{
            margin-bottom: 10px;
          }
          .custom-left{
            float: left;
            width: 45%;
            padding: 10px;
          }
          .custom-right{
            float: right;
            width: 45%;
            padding: 10px;
          }
          .weather-required{
            float: left;
            width: 100%;
            font-size: 14px;
            margin-left: 15px;
            margin-top: 10px;
            label{
              float: left;
              color: #666666;
            }
          }
          .btn-search {
            background-color: transparent;
            color: #03b150;
            margin-left: 8.33333%;
            border-radius: 15px;
            margin-top: 20px;
            margin-left: 40%;
          }
        }
      }
    }
    .custom-line{
      border-bottom: 1px solid #dcdfe6;;
    }
    .batch-right{
      float: left;
      width: 40%;
      margin: 10px;
      margin-left: 80px;

    }
    .custom-title{
      font-weight: bold;
      width: 100%;
      padding: 10px;
    }
    .bt-save{
      margin-left: 40%;
      margin-top: 20px;
    }

  }
</style>
