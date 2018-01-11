<template>
  <div id="newNode">
    <div class="receive-info">
      <h6 class="title">节点信息</h6>
      <div class="section-content">
        <el-form ref="form" label-width="120px">
          <el-form-item label="*产品编号">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="*产品名称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="*产品分类">
            <el-cascader change-on-select ></el-cascader>
          </el-form-item>
          <el-form-item label="*包装单位">
            <el-select placeholder="请选择包装单位">
              <el-option label="袋" value="袋"></el-option>
              <el-option label="件" value="件"></el-option>
              <el-option label="箱" value="箱"></el-option>
            </el-select>
            <el-radio-group >
              <el-radio label="标件"></el-radio>
              <el-radio label="称重"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="自定义分类">
            <el-select  placeholder="请选择自定义分类">
              <el-option label="牛肉" value="牛肉"></el-option>
              <el-option label="羊肉" value="羊肉"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品描述">
            <el-input type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="品牌名称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--<div class="content">-->
        <!--<div class="demo-input-suffix">-->
          <!--<div class="lable">节点编码</div>-->
          <!--<div ><el-input placeholder="请输入节点编码"  ></el-input></div>-->
        <!--</div>-->
        <!--<div class="demo-input-suffix">-->
          <!--<div class="lable">节点名称</div>-->
          <!--<div ><el-input placeholder="请输入节点名称"  ></el-input></div>-->
        <!--</div>-->
        <!--<slot name="infoNo"></slot>-->
        <!--<div class="demo-input-suffix">-->
          <!--<div class="lable">当前节点</div>-->
          <!--<el-select v-model="thisNodeId" placeholder="请选择">-->
          <!--</el-select>-->
        <!--</div>-->
        <!--<div class="demo-input-suffix">-->
          <!--<div class="lable">来源节点</div>-->
          <!--<el-select v-model="sourceNodedId" placeholder="请选择">-->
          <!--</el-select>-->
        <!--</div>-->
      <!--</div>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'newNode',
  data(){
    return{

    }
  }

}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#newNode{
  margin: 10px;
  padding: 10px;
  height: 100%;
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

}
</style>
