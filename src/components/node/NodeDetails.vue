<template>
  <div id="nodeDetails">
    <div class="receive-info">
      <h6 class="title">节点信息</h6>
      <div class="section-content">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="*节点编号">
            <el-input v-model="form.nodeNumber"></el-input>
          </el-form-item>
          <el-form-item label="*节点名称">
            <el-input v-model="form.nodeName"></el-input>
          </el-form-item>
          <el-form-item label="节点分类">
            <el-select v-model="form.nodeType" clearable  placeholder="选择节点分类" width="50px" >
              <el-option  v-for="item in nodeTypeLists" :key="item.id" :label="item.type_name"  :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点类型">
            <el-checkbox-group v-model="checkedSplittings" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="item in splittingLists" :label="item.id" :key="item.id">{{item.type_name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="节点描述">
            <el-input type="textarea" v-model="form.nodeDepict"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <h6 class="title">联系人信息</h6>
      <div class="section-content">
        <el-form label-width="120px">
          <el-form-item label="*节点地址：">
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
      <div class="receive-info">
        <h6 class="title">自定义属性：</h6>
        <div class="content">
          <div class="demo-input-suffix">
            <div class="lable">自定义属性</div>
            <el-select  v-model="selectCustomDefineId" placeholder="请选择" @change="changeselect">
              <el-option
                v-for="item in customDefineList"
                :key="item.id"
                :label="item.mould_name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="attribute-wrapper" v-show="selectCustomDefineIdshow">
          <div class="content">
            <div class="demo-input-suffix" v-for="(item, key) in customDefineAttributeList" :key="key">
              <div class="lable">{{item.column_chinese}}</div>
              <el-input v-model="item.data_value" placeholder="请输入内容"></el-input>
            </div>
          </div>
        </div>
      </div>
      <el-button class="bt-save" type="primary" @click="onSubmit">保存</el-button>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getDetailNode,
    updateNode,
    getCustomAttributeList,
    getCustomAttributeDetail,
    getlist,
  } from "../../assets/js/node/ajax.js";
  import { cityData } from "../../assets/js/api/cityData.js";

  import axios from "axios";
  export default {
    name: 'nodeDetails',
    data(){
      return{
        form: {
          nodeNumber: "",
          nodeName: "",
          splitting: "",
          nodeType: "",
          nodeDepict: "",
          nodeAddress: "",
          contacts: "",
          contactsPhone: "",
          customMouldName: "",
        },
        //选择的节点类型
        checkedSplittings:[],
        //节点类型列表
        splittingLists:[],
        //节点分类列表
        nodeTypeLists:[],
        //自定义分类列表
        customTypeList:[],
        // 用户自定义模块可选列表
        customDefineList: [],
        // 当前用户选中自定义模块
        selectCustomDefine: "",
        //所选自定义属性id
        selectCustomDefineId: "",
        selectCustomDefineIdshow: true,
        // 用户选定模块的自定义属性列表
        customDefineAttributeList: [],
        customFields:[],
        newCustomFields:[],
      }
    },
    mounted(){
      let params ={
        "id":this.$route.query.nodeId
      }
      this.initData(params);
    },
    methods:{
      handleCheckedCitiesChange(value) {
        this.checkedSplittings  = value
      },
      changeselect(val){
        console.log("--changeselect--"+JSON.stringify(val))
        this.loadCustomDefineDetailData(val);
      },
      onSubmit() {
        if(this.form.nodeNumber == ''||this.form.nodeName == ''||this.checkedSplittings.length == 0||this.form.nodeType == ''
          ||this.form.nodeDepict == ''||this.form.nodeAddress == ''||this.form.contacts == ''||this.form.contactsPhone == ''){
          this.$message.warning("请填写完整信息!");
        }else{
          this.customDefineAttributeList.forEach((value, index) => {
            var arr  =
            {
              "custom_id" :value.custom_id,
              "data_value" :value.data_value,
            }
            this.newCustomFields .push(arr);
          })
          let params = {
            id: this.$route.query.nodeId,
            node_number: this.form.nodeNumber,
            node_name: this.form.nodeName,
            node_type_id: this.form.nodeType,
            node_splitting: this.checkedSplittings.toString(),
            node_depict: this.form.nodeDepict,
            node_address: this.form.nodeAddress,
            contacts: this.form.contacts,
            contacts_phone: this.form.contactsPhone,
            custom_mould_id: this.selectCustomDefineId,
            nodeCustomList: this.newCustomFields
          };
          updateNode(params)
            .then(res =>{
              if (res.status == 200) {
                this.$message.success("修改成功!");
                this.$router.go(-1);
              }else {
                this.$message.error(res.msg);
                console.log('updateNode--res--'+JSON.stringify(res));
              }
            })
            .catch(() => {
              this.$message.error("出错啦!");
            })
        }
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
            this.splittingLists = res.data.typeTablesList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //节点详情接口
      getNodeDetail(params){
        getDetailNode(params)
          .then(res =>{
            let node = res.data.node
            this.form.nodeNumber = node. node_number;
            this.form.nodeName = node. node_name;
            this.form.nodeType = node. node_type_id;
            this.form.nodeDepict = node. node_depict;
            this.form.nodeAddress = node. node_address;
            this.form.contacts = node. contacts;
            this.form.contactsPhone = node. contacts_phone;
            this.selectCustomDefineId= node. custom_mould_id;
//            this.customDefineAttributeList = node. nodeCustomList;
            this.nodeCustomList = node. nodeCustomList;

            if(node. node_splitting != null){
              //回显节点类型
              this.checkedSplittings = node. node_splitting.split(",")
            }else{
              console.log("--没有node_splitting--"+JSON.stringify(node. node_splitting))
            }

            this.loadCustomDefineDetailData(node.custom_mould_id)
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },


      //产品自定义属性列表查询接口
      getCustomAttributeList() {
        let params = {
          custom_mould_type: 2,
          pagenum: 1,
          pagesize: 100,
        };
        getCustomAttributeList(params)
          .then(res => {
            this.customDefineList = res.data.customAttributeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      // 请求用户自定义模块详情
      loadCustomDefineDetailData(id) {
        console.log("loadCustomDefineDetailData-------"+id)
        getCustomAttributeDetail({id: id})
          .then(res => {
            this.customDefineAttributeList = res.data.customAttribute.customAttributeList;
            console.log(res)
            this.mergeCustomDefineAttributeList();
          })
          .catch(() => {
            this.$message.error("出错啦getCustomAttributeDetail!");
          });
      },
      // 根据传入的当前用户已经有值的自定义属性(props.customFields)和查出的用户自定义属性列表(data.customDefineAttributeList)合并成一个符合规则的列表
      mergeCustomDefineAttributeList() {
        let nodeCustomList = this.nodeCustomList;
        let customDefineAttributeList = this.customDefineAttributeList;
        customDefineAttributeList.forEach((value, index) => {
          nodeCustomList.forEach((val, idx) => {
            if (value.id == val.custom_id) {
              value.data_value = val.data_value;
            }
          });
        });
      },
      initData(params){
        //节点详情
        this.getNodeDetail(params)
        //节点分类查询
        this.getNodetupelist();
        //节点类型查询
        this.getSplitlist();
        //查询自定义属性列表
        this.getCustomAttributeList();
      },
    }
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #nodeDetails{
    margin: 10px;
    padding: 10px;
    min-height: 92%;
    background-color: #fff;
    .section-content {
      width: 500px;
      margin-top: 20px;
      margin-left: 190px;
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
        width: 350px;
        .demo-input-suffix {
          display: flex;
          margin-top: 10px;
          font-size: 15px;
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
