<template>
  <div id="newProduct">
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
              placeholder="可搜索"
              :props="props"
              :show-all-levels="false"
              filterable
              clearable
              change-on-select
              v-model="form.productType"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="*包装规格">
            <el-input style="width: 100px;" type="number" v-model="form.metering"></el-input>
            <el-select v-model="form.norms" placeholder="未选择">
              <el-option label="(test)头" value="头"></el-option>
              <el-option label="件" value="件"></el-option>
              <el-option label="箱" value="箱"></el-option>
            </el-select>
            <el-radio-group v-model="form.metering_id">
              <el-radio label="标件" value="标件"></el-radio>
              <el-radio label="称重" value="称重"></el-radio>
            </el-radio-group>
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
        <div class="section-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="自定义属性">
            <el-select v-model="form.custom_mould_id" clearable placeholder="无">
              <el-option  v-for="item in customAttributeList" :key="item.id" :label="item.mould_name"  :value="item.id" >
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

      <el-button class="bt-save" type="primary" @click="onSubmit">保存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getListProductType,
    getColumnInfo,
    getCustomAttributeList,
    getDefaultProductType,
    updateCustomAttribute,
    saveProduct
  } from "../../assets/js/production/ajax.js";

export default {
  name: "newProduct",
  data() {
    return {
      form: {
        productCode: "",
        productName: "",
        productType: "",
        metering: "",
        norms: "",
        metering_id: "",
        customType: "",
        productDesc: "",
        productBrand: "",
        custom_mould_id:"",
        systemDefaultType:"",
      },
      systemDefaultType:[],
      systemDefaultTypeList:[],
      props: {
        value: 'id',
        label: 'type_name',
        children: 'systemDefaultTypeList'
      },
      customAttributeList:[],
      customTypeList:[],
      attributeList:[],
      newcustomFields:[],
    };
  },
  mounted() {
    this.initData();
  },
  watch: {
//    selectCustomDefine(newVal) {
//      this.loadCustomDefineDetailData(newVal);
//    }
  },
  methods: {
    onSubmit() {
      this.attributeList.forEach((value, index) => {
        var arr  =
        {
          "custom_id" :value.id,
          "data_value" :value.column_chinese,
        }
        this.newcustomFields .push(arr);
      })

      let params = {
        product: this.form.productCode,
        product_name: this.form.productName,
//        product_type_id: 1,
        product_type_id: this.form.productType.toString(),
        metering: this.form.metering,
        norms: this.form.norms,
        custom_mould_id: this.form.custom_mould_id,
        metering_id: this.form.metering_id,
        custom_type_id: this.form.customType,
        product_depict: this.form.productDesc,
        brand_name: this.form.productBrand,
        //需要替换为选择的
        customFields: this.newcustomFields
      };
      console.log("新增产品的params"+JSON.stringify(params))
      saveProduct(params)
        .then(res =>{
          if (res.status == 200) {
            this.$message.success("添加成功!");
            this.$router.go(-1);
          }
        })
        .catch(() => {
          this.$message.error("出错啦!");
        })
    },
    handleChange(value) {
      console.log("handleChange--"+JSON.stringify(value));
      this.productType = value
    },
    //“产品分类-系统默认提供”列表
    systemDefaultTypeLists(){
      getDefaultProductType()
        .then(res =>{
//          this.totalcount = res.data.totalcount ;
          this.systemDefaultType = res.data.systemDefaultType;
          this.systemDefaultTypeList = res.data.systemDefaultType[0].systemDefaultTypeList;

          console.log("--systemDefaultType--"+JSON.stringify(this.systemDefaultType))
          console.log("--systemDefaultTypeList--"+JSON.stringify(this.systemDefaultTypeList))
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
        pagesize: 20,
      };
      getListProductType(params)
        .then(res => {
          this.customTypeList = res.data.customTypeList;
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
    initData() {
      //查询“产品分类-系统默认提供”列表
      this.systemDefaultTypeLists()
      //查询自定义分类列表
      this.getListProductType();
      //查询自定义属性列表
      this.getCustomAttributeList();

      //自定义字段信息查询——TEST
      this.getColumnInfo();
    }
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#newProduct {
  margin: 10px;
  padding: 10px;
  height: auto;
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
    margin-left: 400px;
    margin-top: 10px;
  }
}
</style>
