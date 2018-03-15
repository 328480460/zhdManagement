<template>
  <div id="newProduct">
    <div class="receive-info">
      <h6 class="title">产品信息</h6>
      <div class="section-content">
        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
          <el-form-item label="产品编号" prop="productCode">
            <el-input v-model="form.productCode"></el-input>
          </el-form-item>
          <el-form-item label="产品名称" prop="productName">
            <el-input v-model="form.productName"></el-input>
          </el-form-item>
          <el-form-item label="产品分类" prop="productType">
            <el-cascader
              :options="systemDefaultType"
              @change="handleChange"
              placeholder="可搜索"
              :props="props"
              :show-all-levels="false"
              filterable
              change-on-select
            ></el-cascader>
          </el-form-item>
          <el-form-item label="包装规格" prop="norms">
            <el-select v-model="form.norms" clearable  placeholder="未选择" width="50px" >
              <el-option  v-for="item in normsTypeList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
            </el-select>
           </el-form-item>
          <el-form-item label="计量单位" prop="metering_id">
            <el-radio-group v-model="form.metering_id" @change="radioChange">
              <el-radio label="标件" value="标件"></el-radio>
              <el-radio label="称重" value="称重"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="quality">
            <el-input style="width: 100px;"v-model="form.metering" min="0" v-show="showMetering"></el-input>
            <el-select v-model="form.quality" clearable  placeholder="单位" style="width: 100px;margin-right: 8px"  >
              <el-option  v-for="item in qualityList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
            </el-select>/
            <el-select v-model="form.norms" clearable  placeholder="规格" style="width: 100px"  >
              <el-option  v-for="item in normsTypeList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="自定义分类">
            <el-select v-model="form.customType" clearable  placeholder="请选择" width="50px" >
              <el-option  v-for="item in customTypeList" :key="item.id" :label="item.type_name"  :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品描述">
            <el-input type="textarea" v-model="form.productDesc"></el-input>
          </el-form-item>
          <el-form-item label="品牌名称">
            <el-input v-model="form.productBrand"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="receive-info">
        <h6 class="title">自定义属性</h6>
        <div class="content">
          <div class="demo-input-suffix">
            <div class="lable">自定义属性</div>
            <el-select clearable v-model="selectCustomDefineId" placeholder="无">
              <el-option
                v-for="item in customDefineList"
                :key="item.id"
                :label="item.mould_name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="attribute-wrapper" v-show="selectCustomDefineId">
          <div class="content">
            <div class="demo-input-suffix" v-for="(item, key) in customDefineAttributeList" :key="key">
              <div class="lable">{{item.column_chinese}}</div>
              <el-input  v-model="item.data_value" placeholder="请输入内容"></el-input>
            </div>
          </div>
        </div>
      </div>
      <el-button class="bt-save" type="primary" @click="onSubmit('form')">保存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getlist,
    getListProductType,
    getCustomAttributeList,
    getCustomAttributeDetail,
    getDefaultProductType,
    updateCustomAttribute,
    saveProduct,
  } from "../../assets/js/production/ajax.js";

export default {
  name: "newProduct",
  data() {
    return {
      showMetering:true,
      form: {
        productCode: "",
        productName: "",
        productType: "",
        norms: "",
        quality: "",
        quality_id: "",
        metering: "",
        metering_id: "",
        customType: "",
        productDesc: "",
        productBrand: "",
        custom_mould_id:"",
      },
      //规格列表
      normsTypeList:[],
      //计量单位列表
      qualityList:[],
      //产品分类--系统默认提供
      systemDefaultType:[],
      props: {
        value: 'id',
        label: 'type_name',
        children: 'systemDefaultTypeList'
      },
      //自定义分类列表
      customTypeList:[],
      // 用户自定义模块可选列表
      customDefineList: [],
      // 当前用户选中自定义模块
      selectCustomDefine: "",
      //所选自定义属性id
      selectCustomDefineId: "",
      // 用户选定模块的自定义属性列表
      customDefineAttributeList: [],
      customFields:[],
      newCustomFields:[],
      customMouldId:"",
      rules: {
        productCode: [
          { required: true, message: '请填写产品编号', trigger: 'blur' }
        ],
        productName: [
          { required: true, message: '请填写产品名称', trigger: 'blur' }
        ],
        productType: [
          { required: true, message: '请选择产品分类', trigger: 'blur' }
        ],
        norms: [
          { required: true, message: '请选择包装规格', trigger: 'change' },
        ],
        metering_id: [
          { required: true, message: '请选择标件或称重', trigger: 'change' },
        ],
        quality: [
          { required: true, message: '请选择计量单位', trigger: 'change' },
        ],
      }
    };
  },
  mounted() {
    this.initData();
  },
  watch: {
    selectCustomDefineId(newVal) {
      if(!newVal) {
        this.customDefineAttributeList = [];
        return;
      }
      this.loadCustomDefineDetailData(newVal);
    }
  },
  methods: {
    //包装规格列表查询
    getNormsTypeList(){
      let params = {
        tables_name: "norms",
      };
      getlist(params)
        .then(res => {
          this.normsTypeList = res.data.typeTablesList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    //计量单位列表查询
    getQualityList(){
      let params = {
        tables_name: "quality",
      };
      getlist(params)
        .then(res => {
          this.qualityList = res.data.typeTablesList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if(this.form.metering_id == ''){
            this.$message.warning("请选择“标件”或“称重”!");
          }else{
            if(this.selectCustomDefineId){
              this.customDefineAttributeList.forEach((value, index) => {
                if (value.data_value) {
                  var arr  =
                  {
                    "custom_id" :value.custom_id,
                    "data_value" :value.data_value,
                  }
                  this.newCustomFields .push(arr);
                  let params = {
                    product: this.form.productCode,
                    product_name: this.form.productName,
                    product_type_id: this.form.productType,
                    norms: this.form.norms,
                    quality_id: this.form. quality,
                    metering: this.form.metering,
                    metering_id: this.form.metering_id,
                    custom_type_id: this.form.customType,
                    product_depict: this.form.productDesc,
                    brand_name: this.form.productBrand,
                    custom_mould_id: this.selectCustomDefineId,
                    customFields: this.newCustomFields
                  };
                  saveProduct(params)
                    .then(res =>{
                      if (res.status == 200) {
                        this.$message.success("添加成功!");
                        this.$router.go(-1);
                      }else{
                        this.$message.error(res.msg);
                      }
                    })
                    .catch(() => {
                      this.$message.error("出错啦!");
                    })
                }else {
                  this.$message.warning("请填写自定义属性字段值!");
                }
              })
            } else{
              let params = {
                product: this.form.productCode,
                product_name: this.form.productName,
                product_type_id: this.form.productType,
                norms: this.form.norms,
                quality_id: this.form. quality,
                metering: this.form.metering,
                metering_id: this.form.metering_id,
                custom_type_id: this.form.customType,
                product_depict: this.form.productDesc,
                brand_name: this.form.productBrand,
                custom_mould_id: this.selectCustomDefineId,
                customFields: this.newCustomFields
              };
              saveProduct(params)
                .then(res =>{
                  if (res.status == 200) {
                    this.$message.success("添加成功!");
                    this.$router.go(-1);
                  }else{
                    this.$message.error(res.msg);
                  }
                })
                .catch(() => {
                  this.$message.error("出错啦!");
                })
            }
          }
        } else {
          return false;
        }
      });
    },
    //选择的产品分类--系统默认提供
    handleChange(value) {
      this.form.productType =value[value.length - 1]
    },
    //选择“标件”“称重”
    radioChange(value) {
      if(value == "称重"){
        this.showMetering = false
      }else{
        this.showMetering = true
      }
    },
    //“产品分类-系统默认提供”列表
    systemDefaultTypeLists(){
      getDefaultProductType()
        .then(res =>{
          this.systemDefaultType = res.data.systemDefaultTypeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        })
    },
    //产品自定义分类列表查询接口
    getListProductType() {
      let params = {
        custom_mould_type: 1,
        pagenum: 1,
        pagesize: 100,
      };
      getListProductType(params)
        .then(res => {
          this.customTypeList = res.data.customTypeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 查询自定义属性列表
    getCustomAttributeList() {
      getCustomAttributeList({pagesize: '100', pagenum: '1', custom_mould_type: '1', sub_link: ''})
        .then(res => {
          this.customDefineList = res.data.customAttributeList;
          this.showSelectCustomDefineMould();
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 请求用户自定义模块详情
    loadCustomDefineDetailData(id) {
      // console.log('loadCustomDefineDetailData');
      getCustomAttributeDetail({ id })
        .then(res => {
          this.customDefineAttributeList =
            res.data.customAttribute.customAttributeList;
          this.mergeCustomDefineAttributeList();
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 根据收货详情回显出当前用户选中的自定义模块
    showSelectCustomDefineMould() {
      this.customDefineList.forEach((value, index) => {
        // console.log(value.id, this.customMouldId)
        if (value.id == this.customMouldId) {
          this.selectCustomDefine = value.mould_name;
          this.selectCustomDefineId = value.id;
        }
      });
    },
    // 根据传入的当前用户已经有值的自定义属性(props.customFields)和查出的用户自定义属性列表(data.customDefineAttributeList)合并成一个符合规则的列表
    mergeCustomDefineAttributeList() {
      let customFields = this.customFields;
      let customDefineAttributeList = this.customDefineAttributeList;
      customDefineAttributeList.forEach((value, index) => {
        customFields.forEach((val, idx) => {
          if (value.id == val.custom_id) {
            value.data_value = val.data_value;
          }
        });
      });
    },
    initData() {
      //查询“产品分类-系统默认提供”列表
      this.systemDefaultTypeLists()
      //查询自定义分类列表
      this.getListProductType();
      //查询规格列表
      this.getNormsTypeList();
      //查询规格列表
      this.getQualityList();
      //查询自定义属性列表
      this.getCustomAttributeList();

    }
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#newProduct {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .receive-info {
    width: 96%;
    margin: 0 auto;
    .title {
      font-size: 15px;
      border-bottom: 1px solid #c0c4cc;
      padding-bottom: 5px;
      color: #c0c4cc;
    }
    .section-content {
      width: 500px;
      margin-top: 20px;
      margin-left: 200px;
    }
    .content {
      margin-left: 200px;
      margin-top: 10px;
      width: 460px;
      .demo-input-suffix {
        display: flex;
        margin-top: 10px;
        .lable {
          flex: 0 0 100px;
          align-items: center;
          line-height: 40px;
        }
      }
    }
  }

  .bt-save{
    width: 100px;
    height: 40px;
    margin-left: 400px;
    margin-top: 10px;
  }
}
</style>
