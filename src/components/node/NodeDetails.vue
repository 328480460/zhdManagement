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
            <el-select v-model="form.nodeSplitting" clearable  placeholder="选择节点分类" width="50px" >
              <el-option  v-for="item in nodeTypeList" :key="item.id" :label="item.type_name"  :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点类型">
            <el-radio-group v-model="nodeTypes">
              <el-radio label="来源节点" value="node11"></el-radio>
              <el-radio label="当前节点" value="node12"></el-radio>
              <el-radio label="流向节点" value="node13"></el-radio>
            </el-radio-group>
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
            <!--<el-cascader  :options="cityDataList" change-on-select  v-model="selectedCity" ></el-cascader>-->
            <el-input style="margin-top: 20px"></el-input>
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
        <div class="section-content">
          <el-form label-width="120px">
            <el-form-item label="自定义属性">
              <el-select v-model="form.custom_mould_id" clearable placeholder="无">
                <el-option v-for="item in customAttributeList" :key="item.id" :label="item.mould_name" :value="item.id"></el-option>
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
    getDetailNode,
    updateNode,
    getCustomAttributeList,
    getColumnInfo,
    getlist,
  } from "../../assets/js/node/ajax.js";
  import { cityData } from "../../assets/js/api/cityData.js";

  import axios from "axios";
  export default {
    name: 'nodeDetails',
    data(){
      return{
        // 城市列表数据
        cityDataList: cityData,
        // 选中的城市
        selectedCity: [],
        customAttributeList:[],
        attributeList:[],
        form: {
          nodeNumber: "",
          nodeName: "",
          nodeSplitting: "",
          nodeType: "",
          nodeDepict: "",
          nodeAddress: "",
          contacts: "",
          contactsPhone: "",
          customMouldName: "",
        },
        nodeTypes:"",
        customMouldNames: [],
        nodeTypeList:[],
        splittingList:[],
      }
    },
    mounted(){
      let params ={
        "id":this.$route.query.nodeId
      }
      this.initData(params);
    },
    methods:{
      onSubmit() {
        let params = {
          id: this.$route.query.nodeId,
          node_number: this.form.nodeNumber,
          node_name: this.form.nodeName,
          node_splitting: this.form.nodeSplitting,
          node_type_id: this.nodeTypes,
          node_depict: this.form.nodeDepict,
          node_address: this.form.nodeAddress,
          contacts: this.form.contacts,
          contacts_phone: this.form.contactsPhone,
          //？？？需要替换为选择的自定义属性--TEST
          nodeCustomList: this.attributeList
        };
        console.log("submit!添加节点"+JSON.stringify(params));
        updateNode(params)
          .then(res =>{
            console.log("submit!res---"+JSON.stringify(res));
            if (res.status == 200) {
              this.$message.success("修改成功!");
              this.$router.go(-1);
            }
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })
      },
      //节点分类查询
      getNodetupelist(){
        let params = {
          tables_name: "node_type",
        };
        getlist(params)
          .then(res => {
            this.nodeTypeList = res.data.typeTablesList;
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
            console.log("node_splitting--"+JSON.stringify(res))
            this.splittingList = res.data.typeTablesList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //产品自定义属性列表查询接口
      getCustomAttributeList() {
        let params = {
          custom_mould_type: 2,
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
          custom_mould_type: 2,
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
        /**
         * 节点详情接口
         */
        getDetailNode(params)
          .then(res =>{
            console.log("getDetailNode--"+JSON.stringify(res))
            let node = res.data.node
            this.form.nodeNumber = node. node_number;
            this.form.nodeName = node. node_name;
            this.form.nodeSplitting = node. splitting;
            this.form.nodeType = node. node_type_id;
            this.form.nodeDepict = node. node_depict;
            this.form.nodeAddress = node. node_address;
            this.form.contacts = node. contacts;
            this.form.contactsPhone = node. contacts_phone;
            this.customMouldNames = node. customList;
            //???测试数据返回为空
//            this.form.customMouldName = this.customMouldNames[0].column_chinese;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          })

        //节点分类查询
        this.getNodetupelist();
        //节点类型查询
        this.getSplitlist();

        //查询自定义属性列表
        this.getCustomAttributeList();
        //自定义字段信息查询——TEST
        this.getColumnInfo();
      },
    }

  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #nodeDetails{
    margin: 10px;
    padding: 10px;
    height: auto;
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
      margin-top: 10px;
      margin-left: 400px;
    }
  }
</style>
