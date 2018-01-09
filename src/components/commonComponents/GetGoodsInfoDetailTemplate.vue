<template>
    <div id="getGoodsInfoDetail">
        <div class="receive-info">
            <h6 class="titile">收货信息</h6>
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
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </div>
                <div class="demo-input-suffix">
                    <div class="lable">来源节点</div>
                    <el-select v-model="sourceNodedId" placeholder="请选择">
                        <el-option
                        v-for="item in sourceNodedOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "getGoodsInfoDetail",

  props: {
    productList: {
      type: Array,
      default: () => [],
      required: false
    },
    thisNodeId: {
      type: String,
      default: "",
      required: false
    },
    receiptDate: {
      type: String,
      default: "",
      required: false
    },
    sourceNodedId: {
      type: String,
      default: "",
      required: false
    },
    customFields: {
      type: Array,
      default: () => [],
      required: false
    },
    thisNodeOption: {
        type: Array,
        default: () => [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        required: false
    },
    sourceNodedOption: {
        type: Array,
        default: () => [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        required: false
    }
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#getGoodsInfoDetail {
  margin: 10px;
  padding: 10px;
  height: 94%;
  background-color: #fff;
}
.receive-info {
  width: 96%;
  margin: 0 auto;
  .titile {
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
</style>

