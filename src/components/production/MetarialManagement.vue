<template>
    <div id="metarial">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 25px;margin-right: 25px">

        <el-tab-pane label="图片" name="first" >
          <div class="tab-item">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :limit="3"
              >
              <el-button type="primary" size="medium"  @click="uploadPic">本地上传</el-button>
              <span class="span-clear" >图片大小不超过5M</span>
            </el-upload>
          </div>
          <div class="piclists">
            <li v-for="item in picList" class="item-li" @click="onItem(item.value)">
              <img src="../../assets/image/text_pic_item.png" alt="pic-item" class="pic-item">
              <div  class="text-item"><p>{{item.name}}</p></div>
              <div class="delete-item"  @click="show(item.value)">
                    <img src="../../assets/image/li_delete.png" alt="pic-item" >
              </div>
            </li>
          </div>
        </el-tab-pane>

        <el-tab-pane label="视频" name="second">
          <div class="tab-item">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :limit="3"
              >
              <el-button type="primary" size="medium"  @click="uploadVideo">添加视频</el-button>
              <span class="span-clear" >视频大小不超过20M</span>
            </el-upload>
          </div>
          <div class="piclists">
            <li v-for="item in picList" class="item-li" @click="onItem(item.value)">
              <img src="../../assets/image/text_pic_item.png" alt="pic-item" class="pic-item">
              <div  class="text-item"><p>{{item.name}}</p></div>
              <div class="delete-item"  @click="show(item.value)">
                <img src="../../assets/image/li_delete.png" alt="pic-item" >
              </div>
            </li>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "metarial",
        created() {
        },
        data() {
          return{
            activeName:'first',
            picList: [
//              {
//              value: '1',
//              pic:'',
//              name: '(test)企业介绍企业介绍企业介绍企业介绍企业介绍.jpg'
//            }, {
//              value: '2',
//              pic:'',
//              name: '企业介绍.jpg'
//            }, {
//              value: '3',
//              pic:'',
//              name: '企业介绍.jpg'
//            }, {
//              value: '4',
//              pic:'',
//              name: '企业介绍.jpg'
//            }, {
//              value: '5',
//              pic:'',
//              name: '企业介绍.jpg'
//            }, {
//              value: '6',
//              pic:'',
//              name: '企业介绍.jpg'
//            }, {
//              value: '7',
//              pic:'',
//              name: '企业介绍.jpg'
//            }
            ],
          }
        },
        methods: {
          onItem(index){
            console.log("点击piclist-item详情==="+index);
          },
          show (index) {
            console.log("点击删除图标piclist-item==="+index);
            this.delete()
          },
          delete() {
            this.$confirm('此操作将删除该产品模板, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              /*删除接口*/
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          uploadPic(){
            console.log("产品--素材管理--本地上传")
          },
          handleClick(tab, event) {
            console.log(tab, event);
          },
          uploadVideo(){
            console.log("产品--素材管理--添加视频")
          },
        }
    };
</script>

<style rel="stylesheet/less" lang='less' scoped>
#metarial {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .tab-item{
    height: 100%;
  }
  .item-li{
    width: 18%;
    height: 100%;
    border: 1px solid #e4e4e4;
    float: left;
    margin: 10px;
  }
  .pic-item{
    width: 100%;
    height: 90%;
  }
  .delete-item{
    background-color: #F2F2F2;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 2px;
  }
  .text-item{
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
  }
  .span-clear{
    color: #999999;
    margin-left: 15px;
    cursor: pointer;
  }

}
</style>
