<template>
    <div id="getGoodsInfoDetailTemp">      
       <el-form ref="getThingsForm" :rules="getThingsRules" :model="getThingsForm" label-width="100px">
        <div class="receive-info">
            <h6 class="title">收货信息</h6>
            <div class="content">
                <div class="demo-input-suffix" v-if="receiptNum">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">{{receiptNum}}</div>
                </div>
                <el-form-item label="收货日期" prop="getThingsTime">
                  <el-date-picker v-model="getThingsForm.getThingsTime" type="date" placeholder="选择日期"> </el-date-picker>
                </el-form-item>
                <el-form-item label="当前节点" prop="currentNode">
                  <el-select v-model="getThingsForm.currentNode" placeholder="请选择">
                    <el-option
                            v-for="item in thisNodeOption"
                            :key="item.id"
                            :label="item.node_name"
                            :value="item.id">
                            </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="来源节点" prop="fromNode">
                  <el-select v-model="getThingsForm.fromNode" placeholder="请选择">
                    <el-option
                        v-for="item in sourceNodedOption"
                        :key="item.id"
                        :label="item.node_name"
                        :value="item.id">
                        </el-option>
                  </el-select>
                </el-form-item>
            </div>
        </div>
        <div class="product-info">
          <h6 class="title">产品信息</h6>
          <div class="content">
            <el-form-item label="添加产品" prop="addProduct">
              <el-select v-model="getThingsForm.addProduct" placeholder="选择产品"  @change='changeHandle'>
                <el-option
                    v-for="item in productTypeList"
                    :key="item.id"
                    :label="item.product_name"
                    :value="item.id">
                    </el-option>
              </el-select>
            </el-form-item>
          </div>    
          <div class="product-list-wrapper" v-show="receiveProductList.length">
            <table>
              <tr>
                <th width='100'>产品名称</th>
                <th width='100'>产品编号</th>
                <th width='100'>产品批次号</th>
                <th width='100'>产品序列号</th>
                <th width='60'>收货数量</th>
                <th width='60'>包装单位</th>
                <th width='60'>操作</th>
              </tr>
              <tr v-for="(item, index) in receiveProductList" :key="index">
                <td>{{item.product_name}}</td>
                <td>{{item.product}}</td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.product_batch_num" placeholder="请输入产品批次号"></el-input></td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.product_num" placeholder="请输入产品序列号"></el-input></td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.receipt_num" placeholder="请输入收货数量" @change="numberChange(index,$event)"></el-input></td>
                <td>{{item.norms}}</td>
                <td><i class="el-icon-close icon-font" v-show="edit" @click="deleProduction(item, index)"></i></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="custom-define-info">
          <h6 class="title">自定义属性</h6>
          <div class="content">
            <div class="demo-input-suffix">
                <div class="custom-attribute">自定义属性</div>
                <el-select clearable  :disabled="!edit" v-model="selectCustomDefineId" placeholder="请选择">
                    <el-option
                    v-for="item in customDefineList"
                    :key="item.id"
                    :label="item.mould_name"
                    :value="item.id"
                   >
                    </el-option>
                </el-select>
            </div>        
          </div>
          <div class="attribute-wrapper" v-show="selectCustomDefineId">
            <div class="content">
              <div class="demo-input-suffix" v-for="(item, key) in customDefineAttributeList" :key="key">
                <div class="lable">{{item.column_chinese}}</div>
                <!-- <el-cascader v-if="/产地/.test(item.column_chinese)" :disabled="!edit" :options="cityDataList" change-on-select  v-model="selectedCity" ></el-cascader> -->
                <el-input :disabled="!edit" v-model="item.data_value" placeholder="请输入内容"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <div class="btn" v-if="!edit" @click="editPage">编辑</div>
          <div class="btn" v-if="edit" @click="saveData('getThingsForm')">保存</div>
        </div>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
import {
  getListNode,
  getProductList,
  getCustomAttributeList,
  getCustomAttributeDetail
} from "../../assets/js/business/ajax.js";
import { cityData } from "../../assets/js/api/cityData.js";
import { deepCopy } from '../../assets/js/api/util.js';

export default {
  name: "getGoodsInfoDetail",
  mounted() {
    this.loadNodeData();
    this.loadProductionTypeData();
    this.loadCustomDefineData();
  },
  data() {
    return {
      // 当前节点可选列表
      thisNodeOption: [],
      // 当前选中的当前节点
      currnetNode: "",
      // 当前选中的当前节点ID
      currnetNodeId: "",
      // 来源节点可选列表
      sourceNodedOption: [],
      // 当前选中的来源节点
      sourceNode: "",
      // 当前选中的来源节点ID
      sourceNodeId: "",
      // 所有产品类型列表
      productTypeList: [],
      // 当前选中产品类型
      selectProduction: "",
      // 用户自定义模块可选列表
      customDefineList: [],
      // 当前用户选中自定义模块
      selectCustomDefine: "",
      // 当前用户选中自定义模块id
      selectCustomDefineId: "",
      // 用户选定模块的自定义属性列表
      customDefineAttributeList: [],
      // 城市列表数据
      cityDataList: cityData,
      // 选中的城市
      selectedCity: ["110000", "110000", "110000"],
      // 时间
      time: this.receiptDate,
      // 收货产品列表
      receiveProductList: this.productList,

      
      getThingsForm: {
        getThingsTime: "",
        currentNode:"",
        fromNode:"",
        addProduct:"",
        customProps:""
      },
      getThingsRules: {
        getThingsTime: [
          { required: true, message: '请选择收货日期', trigger: 'blur' }
        ],
        currentNode:[
          {required: true, message: '请选择当前节点', trigger: 'change'}
        ],
        fromNode:[
          {required: true, message: '请选择来源节点', trigger: 'change'}
        ],
        addProduct:[
          {required:true,message:'请添加产品',trigger:'change'}
        ],
        customProps:[
          {required:true,message:'请选择',trigger:'change'}
        ]
      }

    };
  },
  props: {
    // 是否可编辑
    edit: {
      type: Boolean,
      default: true,
      required: false
    },
    // 收货id
    id: {
      type: String,
      default: "",
      required: false
    },
    // 信息编号
    receiptNum: {
      type: String,
      default: "",
      required: false
    },
    // 产品列表
    productList: {
      type: Array,
      default: () => [],
      required: false
    },
    // 当前节点id
    thisNodeId: {
      type: String,
      default: "",
      required: false
    },
    // 日期
    receiptDate: {
      type: String,
      default: "",
      required: false
    },
    // 来源节点id
    sourceNodedId: {
      type: String,
      default: "",
      required: false
    },
    // 查询详情时用户自定义属性列表
    customFields: {
      type: Array,
      default: () => [],
      required: false
    },
    // 用户自定义模块id
    customMouldId: {
      type: String,
      default: "",
      required: false
    }
  },
  methods: {
    loadNodeData() {
      // 请求来源节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.thisNodeOption = res.data.nodeList;
          this.showSourceNode();
          this.showCurrnetNode();
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
      // 请求当前节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.sourceNodedOption = res.data.nodeList;
          this.showCurrnetNode();
          this.showSourceNode();
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 请求产品列表
    loadProductionTypeData() {
      getProductList({pagenum: '1', pagesize: '100'})
        .then(res => {
          this.productTypeList = res.data.productList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 请求用户自定义模块列表
    loadCustomDefineData() {
      getCustomAttributeList({pagesize: '100', pagenum: '1', custom_mould_type: '3', sub_link: '收货信息'})
        .then(res => {
          // console.log(res.data.customAttributeList)
          this.customDefineList = res.data.customAttributeList;
          if(this.customDefineList.length > 0) {
            this.showSelectCustomDefineMould();
          }
        })
        
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
    // 回显出来源用户选中的节点
    showSourceNode() {
      this.sourceNodedOption.forEach((value, index) => {
        // console.log(value, this.sourceNodedId);
        if (value.id == this.sourceNodedId) {
          this.sourceNode = value.node_name;
          this.sourceNodeId = value.id;
        }
      });
    },
    // 回显出当前用户选中的节点
    showCurrnetNode() {
      this.thisNodeOption.forEach((value, index) => {
        // console.log(value, this.thisNodeId);
        if (value.id == this.thisNodeId) {
          this.currnetNode = value.node_name;
          this.currnetNodeId = value.id;
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
      // console.log(this.customDefineAttributeList)
    },
    changeHandle(id) {
      let newProduction = this.productTypeList.filter((value, index) => {
        return value.id === id;
      })
      this.receiveProductList.unshift(deepCopy(...newProduction));
      this.selectProduction = '';
    },
    deleProduction(item, index) {
      this.receiveProductList.splice(index, 1);
      // console.log(this.receiveProductList.length);
      if(this.receiveProductList.length == 0){
        this.getThingsForm.addProduct = "";
      }
    },
    editPage() {
      this.$emit("editPage");
    },    
    numberChange(index,event){
      let reg = /^(([1-9]+)|([0-9]+\.[0-9]{1,2}))$/; 
      if(!reg.test(this.receiveProductList[index].receipt_num)){
        this.$message.warning("输入格式不正确,请从新输入");
        this.receiveProductList[index].receipt_num = "";
        return;
      }
    },
    saveData(formName) {     
      this.$refs[formName].validate((valid) => {           
        if (valid) {   
          for(let i=0,len=this.receiveProductList.length;i<len;i++){
            if(!this.receiveProductList[i].product_batch_num){
              this.$message.warning('请添加产品批次号');
              return;
            }           
            if(!this.receiveProductList[i].product_num){
              this.$message.warning('请添加产品序列号');
              return;
            }
            if(!this.receiveProductList[i].receipt_num){
              this.$message.warning('请添加产品数量');
              return;
            }
          } 
          let data = {
            id: this.id,
            this_node_id: this.currnetNodeId,
            source_noded_id: this.sourceNodeId,
            receipt_date: this.time,
            receipt_num: this.receiptNum,
            custom_mould_id: this.selectCustomDefineId,
            productList: this.receiveProductList,
            customFields: this.customDefineAttributeList
          };
          this.$emit("saveData", data);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
     
    }
  },
  watch: {
    selectCustomDefineId(newVal, oldVal) {
      // console.log(newVal, oldVal)
      if(!newVal) {
        this.customDefineAttributeList = [];
        return;
      }
      this.loadCustomDefineDetailData(newVal);
    }
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#getGoodsInfoDetailTemp {
  padding: 10px;
  height: 100%;
  background-color: #fff;
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
        flex: 0 0 120px;
        align-items: center;
        line-height: 40px;
      }
    }
  }
}
.product-info {
  .receive-info;
  .product-list-wrapper {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    table {
      margin: 0 auto;
      width: 95%;
      text-align: left;
      font-size: 15px;
      border: 1px solid #eeeeee;
      tr {
        th {
          padding-left: 10px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #eeeeee;
        }
        td {
          padding-left: 10px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #eeeeee;
          .input-box {
            width: 90%;
            height: 30px;
            border: none;
          }
          .icon-font {
            font-size: 18px;
            font-weight: 700;
            color: #1dc7d3;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.custom-define-info {
  .receive-info;
  .el-input {
    width: 217px;
  }
}
.btn-wrapper {
  margin-left: 300px;
  margin-top: 40px;
  .btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background-color: rgb(47, 169, 18);
    border-radius: 4px;
    cursor: pointer;
  }
}
.demo-input-suffix {
  display: flex;
  .infoNo {
    flex: 0 0 120px;
  }
}


.el-date-editor.el-input{
  width: 217px;
}
.item-input{
  margin-bottom: 0;
}
.custom-attribute{
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
    color: #606266;
    width: 100px;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>

