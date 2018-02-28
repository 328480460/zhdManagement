<template>
  <div id="businesstype">
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
                <p>字段名称</p>
                <el-input v-model="column_chinese" placeholder="请输入字段名称" style="margin-top: 10px"></el-input>
              </div>
              <div class="custom-right">
                <p>字段类型</p>
                <el-select v-model="custom_mould_type" clearable  placeholder="选择字段类型" style="margin-top: 10px;width: 100%">
                  <el-option label="文本类型" value="string"></el-option>
                  <el-option label="数字类型" value="number"></el-option>
                  <el-option label="选择列表" value="date"></el-option>
                  <el-option label="日期类型" value="string"></el-option>
                  <el-option label="产品选择列表" value="date"></el-option>
                </el-select>
              </div>
              <div class="weather-required">
                <label><input class="required" name="required" type="checkbox" value="" />是否为必填</label>
              </div>
              <el-button type="primary" size="medium" class="btn-search" @click="onSubmit">增加字段</el-button>
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
        :data="newDataTest"
        style="width: 100%">
        <el-table-column
          label=""
        >
          <template slot-scope="scope">
            <i class="el-icon-remove" style="color: #990000" @click="deleteRow(scope.$index, newDataTest)"
            ></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="column_chinese"
          label="字段名称"
          >
          <el-input v-model="column_chinese" placeholder="字段名称"></el-input>
        </el-table-column>
        <el-table-column
          prop="data_type"
          label="字段类型"
          >
          <el-input v-model="custom_mould_type" placeholder="字段类型" ></el-input>
        </el-table-column>
        <el-table-column
          prop=" id_required"
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
export default {
  name: 'businesstype',
  data(){
    return{
      mould_name:'',
      column_chinese:'',
      custom_mould_type:'',
      id_required:'',
      templatespro: [{
        value: '1',
        label: '产品模板'
      }],
      value: '',

      tableData: [{
        column_chinese: '收货日期',
        data_type: '日期类型',
      }, {
        column_chinese: '来源节点',
        data_type: '选择列表',
      }, {
        column_chinese: '收货产品',
        data_type: '产品选择列表  ',
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
      newDataTest:[
        {
          column_chinese: 'PLUS编号',
          data_type: '数字类型',
        }, {
          column_chinese: '活牛品种',
          data_type: '文本类型',
        }
      ]
    }
  },
  methods:{
    onSubmit(){
      console.log("--增加字段--")
    },
    deleteRow(scope){
      console.log("--deleteRow--"+JSON.stringify(scope))
    },
    save(){
      console.log("--保存自定义字段--")
    }
  }

}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#businesstype{
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
