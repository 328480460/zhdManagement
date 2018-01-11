<template>
  <div id="newNode">
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
              <el-option  v-for="item in nodeSplittings" :key="item.id" :label="item.name"  :value="item.id" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="节点类型">
            <el-checkbox-group v-model="nodeTypes" :min="1">
              <el-checkbox label="来源节点"></el-checkbox>
              <el-checkbox label="当前节点"></el-checkbox>
              <el-checkbox label="流向节点"></el-checkbox>
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
      <h6 class="title">自定义属性</h6>
      <div class="section-content">
        <el-form label-width="120px">
          <el-form-item label="自定义属性">
            <el-select v-model="form.customMouldName" placeholder="无">
              <el-option v-for="item in customMouldNames" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <el-button class="bt-save" type="primary" @click="onSubmit">保存</el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'newNode',
  data(){
    return{
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
      nodeTypes:['来源节点'],
      nodeSplittings: [{
        id: '1',
        name: '(test)养殖场',
      }, {
        id: '2',
        name: '批发商',
      }],
      customMouldNames: [{
        id: '1',
        name: '(test)自定义节点信息',
      }],
    }
  },
  methods:{
    onSubmit() {
      console.log("submit!添加节点");
    },

  }

}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#newNode{
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
    margin-left: 400px;
  }
}
</style>
