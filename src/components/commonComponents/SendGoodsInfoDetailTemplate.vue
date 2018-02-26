<template>
    <div id="getGoodsInfoDetailTemp">
        <div class="receive-info">
            <h6 class="title">发货日期</h6>
            <div class="content">
                <div class="demo-input-suffix" v-if="invoiceNum">
                   <div class="infoNo">信息编号</div>
                   <div class="infoNo-code">{{invoiceNum}}</div>
                </div> 
                <div class="demo-input-suffix">
                    <div class="lable">请选择日期</div>
                    <el-date-picker :disabled="!edit" v-model="time" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div class="demo-input-suffix">
                    <div class="lable">当前节点</div>
                        <el-select :disabled="!edit" v-model="currnetNodeId" placeholder="请选择">
                            <el-option
                            v-for="item in thisNodeOption"
                            :key="item.id"
                            :label="item.node_name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                </div>
                <div class="demo-input-suffix">
                    <div class="lable">流向节点</div>
                    <el-select :disabled="!edit" v-model="nextNodeId" placeholder="请选择">
                        <el-option
                        v-for="item in flowNodeOption"
                        :key="item.id"
                        :label="item.node_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="product-info">
          <h6 class="title">产品信息</h6>
          <div class="content">
            <div class="demo-input-suffix">
                <div class="lable">添加产品</div>
                    <el-select :disabled="!edit" v-model="selectProduction" placeholder="选择产品"  @change='changeHandle'>
                        <el-option
                        v-for="item in productTypeList"
                        :key="item.id"
                        :label="item.product_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
            </div>
          </div>
          <div class="product-list-wrapper" v-show="sendProductList.length">
            <table>
              <tr>
                <th width='100'>产品名称</th>
                <th width='100'>产品编号</th>
                <th width='100'>产品批次号</th>
                <th width='100'>产品序列号</th>
                <th width='60'>发货数量</th>
                <th width='60'>包装单位</th>
                <th width='60'>操作</th>
              </tr>
              <tr v-for="(item, index) in sendProductList" :key="index">
                <td>{{item.product_name}}</td>
                <td>{{item.product}}</td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.product_batch_num" placeholder="请输入产品批次号"></el-input></td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.product_num" placeholder="请输入产品序列号"></el-input></td>
                <td><el-input class="input-box" :disabled="!edit" v-model="item.invoice_num" placeholder="请输入发货数量"></el-input></td>
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
                <div class="lable">自定义属性</div>
                <el-select  :disabled="!edit" v-model="selectCustomDefineId" placeholder="请选择">
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
          <div class="btn" v-if="edit" @click="saveData">保存</div>
        </div>
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
      currnetNode: '',
      // 当前选中的当前节点ID
      currnetNodeId: '',
      // 来源节点可选列表
      flowNodeOption: [],
      // 当前选中的来源节点
      flowNode: '',
      // 当前选中的来源节点ID
      nextNodeId: '',
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
      time: this.date,
      // 收货产品列表
      sendProductList: this.productList
    };
  },
  props: {
    // 是否可编辑
    edit: {
      type: Boolean,
      default: true,
      required: false
    },
    // 发货id
    id: {
      type: String,
      default: "",
      required: false
    },
    // 信息编号
    invoiceNum: {
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
    date: {
      type: String,
      default: "",
      required: false
    },
    // 流向节点id
    flowNodeId: {
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
      // 请求当前节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.thisNodeOption = res.data.nodeList;
          this.showFlowNode()
          this.showCurrnetNode()
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
      // 请求流向节点
      getListNode({ node_type_id: '', pagenum: '1', pagesize: '100', node_name: '', node_number: '', node_splitting: '' })
        .then(res => {
          this.flowNodeOption = res.data.nodeList;
          this.showCurrnetNode()
          this.showFlowNode()
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
      getCustomAttributeList({pagesize: '100', pagenum: '1', custom_mould_type: '3', sub_link: '发货信息'})
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
    // 回显出流向用户选中的节点
    showFlowNode() {
      this.flowNodeOption.forEach((value, index) => {
        if(value.id == this.flowNodeId) {
          this.flowNode = value.node_address;
          this.nextNodeId = value.id;
        }
      })
    },
    // 回显出当前用户选中的节点
    showCurrnetNode() {
      this.thisNodeOption.forEach((value, index) => {
        if(value.id == this.thisNodeId) {
          this.currnetNode = value.node_address;
          this.currnetNodeId = value.id;
        }
      })
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
      // console.log(newProduction)
      this.sendProductList.unshift(deepCopy(...newProduction));
      this.selectProduction = '';
    },
    deleProduction(item, index) {
      this.sendProductList.splice(index, 1);
    },
    editPage() {
      this.$emit('editPage');
    },
    saveData() {
       if(!this.time) {
        this.$message.warning('请选择日期');
        return
      }
      if(!this.currnetNodeId) {
        this.$message.warning('请选择当前节点');
        return
      }
      if(!this.nextNodeId) {
        this.$message.warning('请选择流向节点');
        return
      }
      if(!this.productList.length) {
        this.$message.warning('请添加产品');
        return
      }
      let data = {
        id: this.id,
        this_node_id: this.currnetNodeId,
        flow_to_id: this.nextNodeId,
        invoice_date: this.time,
        invoice_num: this.invoiceNum,
        custom_mould_id: this.selectCustomDefineId,
        productList: this.sendProductList,
        customFields: this.customDefineAttributeList
      };
      this.$emit("saveData", data);
    }
  },
  watch: {
    selectCustomDefineId(newVal) {
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
</style>

