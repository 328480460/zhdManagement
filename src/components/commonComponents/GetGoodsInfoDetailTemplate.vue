<template>
    <div id="getGoodsInfoDetailTemp">
        <div class="receive-info">
            <h6 class="title">收货信息</h6>
            <div class="content">
                <slot name="infoNo"></slot> 
                <div class="demo-input-suffix">
                    <div class="lable">请选择日期</div>
                    <el-date-picker :disabled="true" v-model="receiptDate" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div class="demo-input-suffix">
                    <div class="lable">当前节点</div>
                        <el-select v-model="thisNodeId" placeholder="请选择">
                            <el-option
                            v-for="item in thisNodeOption"
                            :key="item.node_number"
                            :label="item.node_address"
                            :value="item.node_number">
                            </el-option>
                        </el-select>
                </div>
                <div class="demo-input-suffix">
                    <div class="lable">来源节点</div>
                    <el-select v-model="sourceNodedId" placeholder="请选择">
                        <el-option
                        v-for="item in sourceNodedOption"
                        :key="item.node_number"
                        :label="item.node_address"
                        :value="item.node_number">
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
                    <el-select v-model="selectProduction" placeholder="选择产品">
                        <el-option
                        v-for="item in productTypeList"
                        :key="item.id"
                        :label="item.product_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
            </div>
          </div>
          <div class="product-list-wrapper" v-show="productList.length">
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
              <tr v-for="(item, index) in productList" :key="index">
                <td>{{item.product_name}}</td>
                <td>{{item.product_num}}</td>
                <td><input type="number" class="input-box" v-model="item.receipt_num" placeholder="请输入产品批次号"></td>
                <td><input type="number" class="input-box" v-model="item.product_batch_num" placeholder="请输入产品序列号"></td>
                <td><input type="number" class="input-box" v-model="item.product" placeholder="请输入产品序列号"></td>
                <td>{{item.norms}}</td>
                <td><i class="el-icon-close icon-font"></i></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="custom-define-info">
          <h6 class="title">收货信息</h6>
          <div class="content">
            <div class="demo-input-suffix">
                <div class="lable">自定义属性</div>
                <el-select   v-model="selectCustomDefine" placeholder="请选择">
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
          <div class="attribute-wrapper">

          </div>
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
      // 来源节点可选列表
      sourceNodedOption: [],
      // 当前选中产品
      selectProduction: "",
      // 所有产品类型列表
      productTypeList: [],
      // 用户自定义模块可选列表
      customDefineList: [],
      // 当前用户选中自定义模块
      selectCustomDefine: "",
      // 当前用户选中自定义模块id
      selectCustomDefineId: "",
      // 用户选定模块的自定义属性列表
      customDefineAttributeList: [],
    };
  },
  props: {
    // 产品列表
    productList: {
      type: Array,
      default: () => [],
      required: false
    },
    // 当前节点
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
    // 来源节点
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
      getListNode({ node_type_id: 1 })
        .then(res => {
          this.thisNodeOption = res.data.nodeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
      // 请求当前节点
      getListNode({ node_type_id: 2 })
        .then(res => {
          this.sourceNodedOption = res.data.nodeList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 请求产品列表
    loadProductionTypeData() {
      getProductList()
        .then(res => {
          this.productTypeList = res.data.productList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 请求用户自定义模块列表
    loadCustomDefineData() {
      getCustomAttributeList()
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
       getCustomAttributeDetail({id})
        .then(res => {
          this.customDefineAttributeList = res.data.customAttribute.customAttributeList;
          console.log(this.customDefineAttributeList)
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    // 根据收货详情回显出当前用户选中的自定义模块
    showSelectCustomDefineMould() {
      this.customDefineList.forEach((value,index) => {
        if(value.id == this.customMouldId) {
          this.selectCustomDefine = value.mould_name;
          this.selectCustomDefineId = value.id;
        }
      });
      // this.selectCustomDefine = this.customDefineList[0].mould_name;
      // this.selectCustomDefineId = this.customDefineList[0].id;
    }

  },
  watch: {  
    selectCustomDefine(newVal) {
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
        flex: 0 0 100px;
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
}
</style>

