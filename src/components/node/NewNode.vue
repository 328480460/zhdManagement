<template>
  <div id="newNode">
    <div class="receive-info">
      <h6 class="title">节点信息</h6>
      <div class="section-content">
        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
          <el-form-item label="节点编号：" prop="nodeNumber" >
            <el-input v-model="form.nodeNumber"></el-input>
          </el-form-item>
          <el-form-item label="节点名称：" prop="nodeName">
            <el-input v-model="form.nodeName"></el-input>
          </el-form-item>
          <el-form-item label="节点分类：">
            <el-select v-model="form.nodeType" clearable  placeholder="选择节点分类" width="50px" >
              <el-option  v-for="item in nodeTypeLists" :key="item.id" :label="item.type_name"  :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点类型：">
            <el-checkbox-group v-model="checkedSplittings" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="item in splittingLists" :label="item.id" :key="item.id">{{item.type_name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="节点描述：">
            <el-input type="textarea" v-model="form.nodeDepict"></el-input>
          </el-form-item>
          <h6 class="title" style="margin-bottom: 20px">联系人信息</h6>
          <el-form-item label="节点地址：" prop="nodeAddress">
            <el-input v-model="form.nodeAddress"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactsPhone"></el-input>
          </el-form-item>
        </el-form>
      </div>
      
    </div>
    <div class="receive-info">
        <h6 class="title">自定义属性：</h6>
        <div class="content">
          <div class="demo-input-suffix">             
            <div class="el-form-item__label" style="width:120px;">自定义属性：</div>
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
              <div class="el-form-item__label" style="width:154px;">{{item.column_chinese}}：</div>
              <el-input  v-model="item.data_value" placeholder="请输入内容"></el-input>
            </div>
          </div>
        </div>
        </div>
      <el-button class="bt-save" type="primary" @click="onSubmit('form')">保存</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getCustomAttributeList,
    getCustomAttributeDetail,
    getlist,
    createNode,
  } from "../../assets/js/node/ajax.js";
  import { cityData } from "../../assets/js/api/cityData.js";

export default {
  name: 'newNode',
  data(){
    return{
      form: {
        nodeNumber: "",
        nodeName: "",
        nodeType: "",
        splitting:"",
        nodeDepict: "",
        nodeAddress: "",
        contacts: "",
        contactsPhone: "",
      },
      checkedSplittings:[],
      typeTablesList:[],
      splittingLists:[],
      nodeTypeLists:[],
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
      customList:[],
      newCustomFields:[],
      customMouldId:"",
      rules: {
        nodeNumber: [
          { required: true, message: '请填写节点编号', trigger: 'blur' }
        ],
        nodeName: [
          { required: true, message: '请填写节点名称', trigger: 'blur' }
        ],
        nodeAddress: [
          { required: true, message: '请填写节点地址', trigger: 'blur' }
        ],
      }
    }
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
  methods:{
    handleCheckedCitiesChange(value) {
      this.checkedSplittings  = value
      console.log("handleCheckedCitiesChange---"+this.checkedSplittings)
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if(this.selectCustomDefineId){
            this.customDefineAttributeList.forEach((value, index) => {
              if (value.data_value){
                var arr  =
                {
                  "custom_id" :value.custom_id,
                  "data_value" :value.data_value,
                }
                this.newCustomFields .push(arr);
                let params = {
                  node_number: this.form.nodeNumber,
                  node_name: this.form.nodeName,
                  node_splitting: this.checkedSplittings.toString(),
                  node_type_id: this.form.nodeType,
                  node_depict: this.form.nodeDepict,
                  node_address: this.form.nodeAddress,
                  contacts: this.form.contacts,
                  contacts_phone: this.form.contactsPhone,
                  custom_mould_id: this.selectCustomDefineId,
                  nodeCustomList: this.newCustomFields
                };
                createNode(params)
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
              }else{
                this.$message.warning("请填写自定义属性字段值!");
              }
            })
          }else {
            let params = {
              node_number: this.form.nodeNumber,
              node_name: this.form.nodeName,
              node_splitting: this.checkedSplittings.toString(),
              node_type_id: this.form.nodeType,
              node_depict: this.form.nodeDepict,
              node_address: this.form.nodeAddress,
              contacts: this.form.contacts,
              contacts_phone: this.form.contactsPhone,
              custom_mould_id: this.selectCustomDefineId,
              nodeCustomList: this.newCustomFields
            };
            createNode(params)
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
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //节点分类查询
    getNodetupelist(){
      let params = {
        tables_name: "node_type",
      };
      getlist(params)
        .then(res => {
          this.nodeTypeLists = res.data.typeTablesList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    //节点类型查询
    getSplitlist(){
      let params = {
        tables_name: "node_splitting",
      };
      getlist(params)
        .then(res => {
//          console.log("splittingLists---"+JSON.stringify(res.data.typeTablesList))
          this.splittingLists = res.data.typeTablesList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 查询自定义属性列表
    getCustomAttributeList() {
      getCustomAttributeList({pagesize: '100', pagenum: '1', custom_mould_type: '2', sub_link: ''})
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
    // 根据传入的当前用户已经有值的自定义属性(props.customList)和查出的用户自定义属性列表(data.customDefineAttributeList)合并成一个符合规则的列表
    mergeCustomDefineAttributeList() {
      let customList = this.customList;
      let customDefineAttributeList = this.customDefineAttributeList;
      customDefineAttributeList.forEach((value, index) => {
        customList.forEach((val, idx) => {
          if (value.id == val.custom_id) {
            value.data_value = val.data_value;
          }
        });
      });
    },
    initData(){
      //节点分类查询
      this.getNodetupelist();
      //节点类型查询
      this.getSplitlist();
      //查询自定义属性列表
      this.getCustomAttributeList();
    }
  }
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#newNode{
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .section-content {
    /*width: 500px;*/
    /*margin-left: 200px;*/
    margin-top: 20px;
    .el-form-item{
      width: 500px;
      margin-left: 200px;
    }
  }
  .receive-info {
    width: 96%;
    margin: 0 auto;
    .title {
      font-size: 15px;
      border-bottom: 1px solid #c0c4cc;
      padding-bottom: 5px;
      color: #c0c4cc;
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
    margin-top: 10px;
    margin-left: 400px;
  }
}
</style>
