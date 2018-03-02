<template>
  <div id="producttype">

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
      mould_name:'',
      column_name:'',
      column_chinese:'',
      data_type:'',
      id_required:'',
      addDatas:[],

      tableData: [{
        column_chinese: '产品编码',
        data_type: '数字类型',
      }, {
        column_chinese: '产品名称',
        data_type: '文本类型',
      }, {
        column_chinese: '产品分类编码',
        data_type: '选择列表',
      }, {
        column_chinese: '自定义分类编码',
        data_type: '选择列表',
      }, {
        column_chinese: '产品单位',
        data_type: '选择列表',
      }, {
        column_chinese: '产品描述',
        data_type: '文本类型',
      }, {
        column_chinese: '品牌名称',
        data_type: '文本类型',
      }],
    }
  },
  mounted() {

  },
  methods:{
    //“增加字段”
    add(){
      if(this.column_name == ''){
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
      if(this.mould_name == ''){
        this.$message.warning("请输入“自定义名称”！");
      }else {
        var customAttribute  = {
          customAttributeList :this.addDatas,
          custom_mould_type :"1",
          mould_name :this.mould_name,
          sub_link :"",
        }
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
  min-height: 92%;
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
  .custom-line{
    border-bottom: 1px solid #dcdfe6;;
  }
  .bt-save{
    margin-left: 40%;
    margin-top: 20px;
  }

}
</style>
