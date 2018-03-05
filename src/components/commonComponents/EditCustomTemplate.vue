<template>
  <div id="cuutomTemplate">
    <div class="batch-left">
      <el-form ref="form" label-width="100px">
        <el-form-item label="*自定义名称">
          <el-input v-model="mould_name" ></el-input>
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
        :data="customAttributeList"
        style="width: 100%">
        <el-table-column
        >
          <template slot-scope="scope">
            <i class="el-icon-remove" style="color: #990000" @click="deleteRow(scope.$index, scope.row)"
            ></i>
          </template>
        </el-table-column>
        <el-table-column
          label="字段名称"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.column_chinese"></el-input>
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
  import { deepCopy } from "../../assets/js/api/util.js";

  export default {
    name: 'cuutomTemplate',
    data(){
      return{
        checked:false,
        mould_name:'',
        column_name:'',
        column_chinese:'',
        data_type:'',
        id_required:'',
        custom_mould_type:'',
        customAttributeList:[],
      }
    },
    props: {
      tableData: {
        type: Array,
        required: true
      },
    },
    mounted() {
      let params ={
        "id":this.$route.query.typeId
      }
      this.initData(params);
    },
    methods:{
      //本地增加字段
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
          this.customAttributeList .push(arr);
        }
      },
      //删除单条的“自定义字段”
      deleteRow(index, rows){
        //自定义属性关联查询接口判断
        var va = {
          id:rows.id,
          type:this.type
        }
        getAttributeRelationState(va)
          .then(res => {
            if(res.status == 200){
              if(res.data.isRelation == 0){
                  /**
                   * 自定义字段删除接口判断
                   * @type {methods.deleteRow}
                   */
                  deleteCustomField({id:rows.id})
                    .then(res => {
                      if(res.status == 200){
//                        rows.splice(index, 1);
                        this.$message.success("删除成功!");
                      }else{
                        this.$message.error(res.msg);
                      }
                    })
                    .catch(() => {
                      this.$message.error("出错啦!");
                    });
              }else{
                //if(isRelation == 1)已经使用
                this.$message.warning("该自定义字段已使用");
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
        if(this.mould_name == ''){
          this.$message.warning("请输入“自定义名称”！");
        }else if(this.addDatas == ''){
          this.$message.warning("请添加自定义字段！");
        }else {
          var customAttribute  = {
            mould_id :this.$route.query.typeId,
            customAttributeList :this.customAttributeList,
            custom_mould_type :this.custom_mould_type,
            mould_name :this.mould_name,
            sub_link :"",
          }
          console.log("update参数-========="+JSON.stringify(customAttribute))
          updateCustomAttribute(customAttribute)
            .then(res => {
              if (res.status == 200) {
                this.$message.success("添加成功!");
                this.$router.go(-1);
              }else{
                this.$message.error(res.msg);
              }
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
        }
      },
      //自定义属性详情
      getCustomAttributeDetail(params) {
        getCustomAttributeDetail(params)
          .then(res => {
//            console.log("自定义属性详情----"+JSON.stringify(res))
            this.mould_name = res.data.customAttribute.mould_name;
            this.customAttributeList = res.data.customAttribute.customAttributeList;
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
