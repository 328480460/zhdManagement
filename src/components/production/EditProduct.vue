<template>
  <div id="editProduct">
    <div class="receive-info">
      <h6 class="title">产品信息</h6>
      <div class="section-content">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="*产品编号">
            <el-input v-model="form.productCode"></el-input>
          </el-form-item>
          <el-form-item label="*产品名称">
            <el-input v-model="form.productName"></el-input>
          </el-form-item>
          <el-form-item label="*产品分类">
            <el-cascader
              :options="systemDefaultType"
              @change="handleChange"
              v-model="productTypeSelected"
              placeholder="可搜索"
              :props="props"
              :show-all-levels="false"
              filterable
              clearable
              change-on-select
            ></el-cascader>
          </el-form-item>
          <el-form-item label="*包装规格">
            <el-select v-model="form.norms" clearable  placeholder="选择规格" width="50px" >
              <el-option  v-for="item in normsTypeList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
            </el-select>
            </el-form-item>
          <el-form-item label="*计量单位">
            <el-input style="width: 100px;" type="number" v-model="form.metering"></el-input>
            <el-select v-model="form.norms" clearable  placeholder="选择规格" width="50px" >
              <el-option  v-for="item in normsTypeList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
            </el-select>
            <el-radio-group v-model="form.productPackagingUnit">
              <el-radio label="标件"></el-radio>
              <el-radio label="称重"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="自定义分类">
            <el-select v-model="form.custom_type" clearable  placeholder="请选择" width="50px" >
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
      <div class="section-content">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="自定义属性">
            <el-select v-model="form.customField" clearable placeholder="无">
              <el-option  v-for="item in customAttributeList" :key="item.custom_id" :label="item.mould_name"  :value="item.custom_id" >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

        <div class="content">
          <div class="demo-input-suffix" v-for="(item, key) in attributeList" :key="key" >
            <div class="lable">{{item.column_chinese}}</div>
            <el-input v-model="item.data_type" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      </div>

      <el-button class="bt-save" type="primary" @click="onSubmit">保存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getlist,
    getListProductType,
    getCustomAttributeList,
    getColumnInfo,
    getProductDetail,
    getDefaultProductType,
    updateCustomAttribute,
    updateProduct
  } from "../../assets/js/production/ajax.js";

  export default {
    name: "editProduct",
    data() {
      return {
        productTypeSelected: [],
        form: {
          routerQuery: this.$route.query,
          productCode: "",
          productName: "",
          productType: "",
          custom_type: "",
          norms: "",
          metering: "",
          productPackagingUnit: "",
          productDesc: "",
          productBrand: "",
          custom_mould:"",
          customField:"",
//          systemDefaultType:"",
        },
        systemDefaultType:[],
        props: {
          value: 'id',
          label: 'type_name',
          children: 'systemDefaultTypeList'
        },
        //规格列表
        normsTypeList:[],
        customTypeList:[],
        customFields:[],
        newcustomFields:[],
        customAttributeList:[],
        attributeList:[],
      };
    },
    mounted(){
      //查询“产品分类-系统默认提供”列表
      this.systemDefaultTypeLists()
      let params ={
        "id":this.$route.query.productId
      }
      this.initData(params);
    },
    methods: {
      //节点分类查询
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
      onSubmit() {
        this.attributeList.forEach((value, index) => {
          var arr  =
          {
            "custom_id" :value.id,
            "data_value" :value.column_chinese,
          }
          this.newcustomFields .push(arr);
        })
        if(this.form.productCode == ''||this.form.productName == ''||this.form.productType == ''||this.form.norms == ''
          ||this.form.custom_mould_id == ''||this.form.metering_id == ''||this.form.customType == ''){
          this.$message.warning("请填写完整信息!");
        }else{
          let params = {
            id: this.$route.query.productId,
            product: this.form.productCode,
            product_name: this.form.productName,
            product_type_id: this.form.productType,
            metering: this.form.metering,
            norms: this.form.norms,
            metering_id: this.form.metering_id,
            custom_type_id: this.form.custom_type,
            product_depict: this.form.productDesc,
            brand_name: this.form.productBrand,
            custom_mould_id: this.form.custom_mould_id,
            //需要替换为选择的
            customFields: this.newcustomFields
          };
//        console.log("submit!保存修改"+JSON.stringify(params));
          updateProduct(params)
            .then(res =>{
              if (res.status == 200) {
                this.$message.success("产品修改成功!");
                this.$router.go(-1);
              }
            })
            .catch(() => {
              this.$message.error("出错啦!");
            })
        }


      },
      handleChange(value) {
        console.log("value--"+value);
        console.log("handleChange--"+value[value.length - 1]);
        this.form.productType =value[value.length - 1]
      },
      //“产品分类-系统默认提供”列表
      systemDefaultTypeLists(){
        getDefaultProductType()
          .then(res =>{
            this.systemDefaultType = res.data.systemDefaultTypeList;
//            console.log("--systemDefaultTypeList----"+JSON.stringify(this.systemDefaultType))
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      //产品详情接口
      getProductDetail(params){
        getProductDetail(params)
          .then(res =>{
            console.log("productDetail---"+JSON.stringify(res))
            this.form.productCode = res.data.productDetail. product;
            this.form.productName = res.data.productDetail.product_name;
            this.form.productType = res.data.productDetail.product_type_id;
            this.form.custom_type = res.data.productDetail.custom_type_id;
            this.form.norms = res.data.productDetail.norms;
            this.form.metering = res.data.productDetail.metering;
            this.form.productDesc = res.data.productDetail. product_depict;
            this.form.productBrand = res.data.productDetail. brand_name;
            this.customFields = res.data.productDetail. customFields;
//            this.form.customField = this.customFields[0].data_value;

            this.productTypeSelected.push(this.form.productType);
            console.log("data产品分类详情显示-------"+JSON.stringify(this.productTypeSelected))
          })
          .catch(() => {
            this.$message.error("出错啦getProductDetail!");
          })
      },
      //产品"自定义分类"列表查询
      selectTypes(){
        let params = {
          pagenum: 1,     //？？？请求所有的分类
          pagesize: 10,
        }
        getListProductType(params)
          .then(res => {
            this.totalcount = res.data.totalcount;
            this.customTypeList = res.data.customTypeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //产品自定义属性列表查询接口
      getCustomAttributeList() {
        let params = {
          custom_mould_type: 1,
          pagenum: 1,
          pagesize: 20,
        };
        getCustomAttributeList(params)
          .then(res => {
//          this.customListCount = res.data.totalcount;
            this.customAttributeList = res.data.customAttributeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },

      //自定义字段信息查询
      getColumnInfo() {
        let params = {
          custom_mould_type: 1,
          sub_link: "",
          type: 0,
        };
        getColumnInfo(params)
          .then(res => {
            this.attributeList = res.attributeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      initData(params){
        //查询产品详情
        this.getProductDetail(params)

        //查询“自定义分类”列表
        this.selectTypes()
        //查询规格列表
        this.getNormsTypeList();
        //查询自定义属性列表
        this.getCustomAttributeList();

        //自定义字段信息查询——TEST
//        this.getColumnInfo();
      },
    }
  };
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #editProduct {
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
        width: 500px;
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
      margin-top: 10px;
      margin-left: 400px;
    }
  }
</style>
