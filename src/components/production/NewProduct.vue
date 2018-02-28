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
              @change="handleChange"
              placeholder="可搜索"
              :props="props"
              :show-all-levels="false"
              filterable
              clearable
              change-on-select
            ></el-cascader>
          </el-form-item>
          <el-form-item label="*包装规格">
            <el-input style="width: 100px;" type="number" v-model="form.metering"></el-input>
            <el-select v-model="form.norms" clearable  placeholder="选择规格" width="50px" >
              <el-option  v-for="item in normsTypeList" :key="item.id" :label="item.type_name"  :value="item.type_name" >
              </el-option>
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
        <!--<el-form ref="form" :model="form" label-width="100px">-->
        <el-form v-model="selectCustomDefine" placeholder="请选择" label-width="100px">
          <el-form-item label="自定义属性">
            <el-select v-model="form.custom_mould_id" clearable placeholder="请选择">
              <el-option
                v-for="item in customAttributeList"
                :key="item.id"
                :label="item.mould_name"
                :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        </div>
          <div class="content">
            <div class="demo-input-suffix" v-for="(item, key) in customDefineAttributeList" :key="key" >
              <div class="lable">{{item.column_chinese}}</div>
              <el-input v-model="item.column_chinese" placeholder="请输入内容"></el-input>
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
    getColumnInfo,
    getCustomAttributeList,
    getCustomAttributeDetail,
    getDefaultProductType,
    updateCustomAttribute,
    saveProduct,
  } from "../../assets/js/production/ajax.js";
  import ProductGoodsInfoDetailTemplate from "../commonComponents/ProductGoodsInfoDetailTemplate";

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
      },
      //规格列表
      normsTypeList:[],
      //产品分类--系统默认提供
      systemDefaultType:[],
      props: {
        value: 'id',
        label: 'type_name',
        children: 'systemDefaultTypeList'
      },
      //自定义分类列表
      customTypeList:[],
      //自定义分类属性列表
      customAttributeList:[],
      // 当前用户选中自定义模块
      selectCustomDefine: "",
      // 当前用户选中自定义模块id
      selectCustomDefineId: "",
      // 用户选定模块的自定义属性列表
      customDefineAttributeList: [],
      attributeList:[],
      newcustomFields:[],
    };
  },
  mounted() {
    this.initData();
  },
  watch: {
    selectCustomDefine(newVal) {
      //所选的自定义属性详情
      this.loadCustomDefineDetailData(newVal);
      console.log("----"+newVal)
    }
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
      //需要替换？？？
//      this.attributeList.forEach((value, index) => {
//        var arr  =
//        {
//          "custom_id" :value.id,
//          "data_value" :value.column_chinese,
//        }
//        this.newcustomFields .push(arr);
//      })
      if(this.form.metering == ''){
        this.$message.warning("包装规格不能为空!");
      }else{
        let params = {
          product: this.form.productCode,
          product_name: this.form.productName,
          product_type_id: this.form.productType,
          metering: this.form.metering,
          norms: this.form.norms,
          custom_mould_id: this.form.custom_mould_id,
          metering_id: this.form.metering_id,
          custom_type_id: this.form.customType,
          product_depict: this.form.productDesc,
          brand_name: this.form.productBrand,
          //需要替换为选择的
//          customFields: this.newcustomFields
          customFields: this.customDefineAttributeList
        };
//        console.log("新增产品的params"+JSON.stringify(params))
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
      }

    },
    //选择的产品分类--系统默认提供
    handleChange(value) {
      console.log("handleChange----"+value)
      console.log("this.form.productType----"+value[value.length - 1])
      this.form.productType =value[value.length - 1]
    },
    //“产品分类-系统默认提供”列表
    systemDefaultTypeLists(){
      getDefaultProductType()
        .then(res =>{
          this.systemDefaultType = res.data.systemDefaultTypeList;
//          console.log("--systemDefaultTypeList----"+JSON.stringify(this.systemDefaultType))
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
    //自定义字段信息查询
//    getColumnInfo() {
//      let params = {
//        custom_mould_type: 1,
//        sub_link: "",
//        type: 0,
//      };
//      getColumnInfo(params)
//        .then(res => {
//          this.attributeList = res.attributeList;
//        })
//        .catch(() => {
//          this.$message.error("出错啦!");
//        });
//    },
    //产品自定义属性列表查询接口
    getCustomAttributeList() {
      let params = {
        custom_mould_type: 1,
        pagenum: 1,
        pagesize: 100,
      };
      getCustomAttributeList(params)
        .then(res => {
          this.customAttributeList = res.data.customAttributeList;
          this.showSelectCustomDefineMould();
        })
        .catch(() => {
          this.$message.error("出错啦111!");
        });
    },
    //所选的自定义属性详情
    loadCustomDefineDetailData(id) {
      console.log('loadCustomDefineDetailData');
      getCustomAttributeDetail({ id })
        .then(res => {
          this.customDefineAttributeList = res.data.customAttribute.customAttributeList;
          this.mergeCustomDefineAttributeList();
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 回显出当前用户选中的自定义模块
    showSelectCustomDefineMould() {
      this.customAttributeList.forEach((value, index) => {
//         console.log(value.id, JSON.stringify(this.customMouldId))
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
            value.value = val.data_value;
          }
        });
      });
       console.log(this.customDefineAttributeList)
    },
    initData() {
      //查询“产品分类-系统默认提供”列表
      this.systemDefaultTypeLists()
      //查询自定义分类列表
      this.getListProductType();
      //查询规格列表
      this.getNormsTypeList();

      //查询自定义属性列表
      this.getCustomAttributeList();
      //自定义字段信息查询——？？？
//      this.getColumnInfo();
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
