<template>
  <div id="cuutomTemplate">
    <div class="batch-left">
      <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="自定义名称" prop="mould_name">
          <el-input v-model="form.mould_name" ></el-input>
        </el-form-item>
        <el-form-item label="所属环节" prop="sub_link">
          <el-select v-model="form.sub_link" placeholder="选择所属环节" style="width: 100%">
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
          <el-button type="primary" size="medium" class="btn-search" @click="add('form')">增加字段</el-button>
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
        :data="customAttributeList"
        style="width: 100%">
        <el-table-column
        >
          <template slot-scope="scope">
            <i class="el-icon-remove" style="color: #990000" @click="deleteRow(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column
          label="字段名称"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.column_chinese" ></el-input>
          </template>
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
        @click="update">保存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getAttributeRelationState,
    deleteCustomField,
    updateCustomAttribute,
    getCustomAttributeDetail,
  } from "../../assets/js/settings/ajax.js";

  export default {
    name: 'cuutomTemplate',
    data(){
      return{
        form:{
          mould_name:'',
          sub_link:'',
        },
        checked:false,
        column_name:'',
        column_chinese:'',
        data_type:'',
        id_required:'',
        isRepeat:'',
        custom_mould_type:'',
        customAttributeList:[],
        rules: {
          mould_name: [
            { required: true, message: '请填写自定义名称', trigger: 'blur' }
          ],
          sub_link: [
            { required: true, message: '请选择所属环节',trigger: 'change' }
          ],
        },
        typetype:'',
        tableData: [{
          column_chinese: '收货日期',
          data_type: '日期类型',
        },
          {
            column_chinese: '来源节点',
            data_type: '选择列表',
          },
          {
            column_chinese: '收货产品',
            data_type: '选择列表  ',
          },
          {
            column_chinese: '产品批次号',
            data_type: '文本类型',
          },
          {
            column_chinese: '产品序列号',
            data_type: '文本类型',
          },
          {
            column_chinese: '产品数量',
            data_type: '数字类型',
          },
          {
            column_chinese: '产品单位',
            data_type: '文本类型',
          }],
      }
    },
    mounted() {
      let params ={
        "id":this.$route.query.typeId
      }
      this.initData(params);
    },
    methods:{
      //本地增加字段
      add(form){
        this.$refs[form].validate((valid) => {
          if (valid){
            if(this.column_name == ''){
              this.$message.warning("请输入“字段名称”！");
            }else if(this.data_type == ''){
              this.$message.warning("请选择“字段类型”！");
            } else{
              //判断checked
              if(this.checked == true){
                this.id_required = 1
              }else  if(this.checked == false){
                this.id_required = 0
              }
              //添加的字段
              var arr  =
              {
                "column_chinese" :this.column_name,
                "column_english" :"",
                "data_type" :this.data_type,
                "id_required" :this.id_required,
              }
              this.customAttributeList.unshift(arr);
              outer:
                for(var i=0;i<this.customAttributeList.length;i++){
                  for(var j=i+1;j<this.customAttributeList.length;j++){
                    if(this.customAttributeList[i].column_chinese === this.customAttributeList[j].column_chinese){
                      this.customAttributeList.splice(i,1);
                      i--;
                      this.$message.error("已添加过该字段名称!");
                      break outer;
                    }else{
                      this.$message.success("添加成功！");
                    }
                  }
                }
            }
          }else {
            return false;
          }
        });
      },
      deleteRow(index, rows){
        //自定义属性关联查询接口判断
        var va = {
          id:rows.id,
          type:this.typetype
        }
        getAttributeRelationState(va)
          .then(res => {
            if(res.status == 200){
              //if(isRelation == 0)该字段未使用，可删除
              if(res.data.isRelation == 0){
                //自定义字段删除接口判断
                deleteCustomField({id:rows.id})
                  .then(res => {
                    if(res.status == 200){
                      this.customAttributeList.splice(index, 1);
                      this.$message.success("删除成功!");
                    }else{
                      this.$message.error(res.msg);
                    }
                  })
                  .catch(() => {
                    this.$message.error("出错啦deleteCustomField!");
                  });
              }else{
                //if(isRelation == 1)该字段已经使用，不可删除
                this.$message.warning("该自定义字段已使用！请先删除关联数据");
              }
            }else{
              this.$message.warning(res.msg);
            }
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //自定义属性修改接口
      update(){
        if(this.customAttributeList == ''){
          this.$message.warning("请添加自定义字段信息！");
        }else {
          outer:
            for(var i=0;i<this.customAttributeList.length;i++){
              if(this.customAttributeList.length == 1){
                if(this.customAttributeList[i].column_chinese == ''){
                  this.isRepeat = 1;//字段名称为空
                }else{
                  this.isRepeat = 3;//字段名称没有重复，可保存
                }
              }else {
                for(var j=i+1;j<this.customAttributeList.length;j++){
                  if(this.customAttributeList[i].column_chinese == ''){
                    this.isRepeat = 1;//字段名称为空
                  }else if(this.customAttributeList[i].column_chinese === this.customAttributeList[j].column_chinese){
                    this.isRepeat = 2;//字段名称有重复
                    break outer;
                  }else{
                    this.isRepeat = 3;//字段名称没有重复，可保存
                  }
                }
              }
            }
          if(this.isRepeat == 1){
            this.$message.error("字段名称不可以为空!");
          }else if(this.isRepeat == 2){
            this.$message.error("字段名称不可以重复!");
          }else if(this.isRepeat == 3){
            var customAttribute  = {
              mould_id :this.$route.query.typeId,
              customAttributeList :this.customAttributeList,
              custom_mould_type :this.custom_mould_type,
              mould_name :this.form.mould_name,
              sub_link:this.form.sub_link
            }
            updateCustomAttribute(customAttribute)
              .then(res => {
                if (res.status == 200) {
                  this.$message.success("保存成功!");
                  this.$router.go(-1);
                }else{
                  this.$message.error(res.msg);
                }
              })
              .catch(() => {
                this.$message.error("出错啦!");
              });
          }
        }
      },
      //自定义属性详情
      getCustomAttributeDetail(params) {
        getCustomAttributeDetail(params)
          .then(res => {
            var customAttribute = res.data.customAttribute
            //“业务类型”特殊判断
            if(customAttribute.custom_mould_type == 3){
              this.custom_mould_type = 3
              this.form.sub_link =customAttribute.sub_link;
              if(this.form.sub_link == "生产信息"){
                this.typetype = 3
              }else if(this.form.sub_link == "发货信息"){
                this.typetype = 4
              }else if(this.form.sub_link == "收货信息"){
                this.typetype = 5
              }
            }
            this.form.mould_name = customAttribute.mould_name;
            this.customAttributeList = customAttribute.customAttributeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      initData(params){
        //自定义属性详情
        this.getCustomAttributeDetail(params);
      }
    }
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #cuutomTemplate{
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
