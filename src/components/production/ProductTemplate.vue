<template>
    <div id="protemplate">
      <div class="btn-list">
        <el-button type="primary" size="medium"  @click="newTemplate">新增产品模板</el-button>
      </div>
      <el-table class="el-table"
                :data="templatespro"
      >
        <el-table-column class="table-column"
                         prop="name"
                         label="模板名称"
        >
        </el-table-column>
        <el-table-column class="table-column"
                         label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="editProduct">编辑</el-button>

            <el-popover
              ref="popover4"
              placement="left"
              width="400"
              trigger="click">
                <!--预览手机-->
                <!--<PreviewProductTemplate></PreviewProductTemplate>-->
              <el-table>
                <el-table-column width="150" property="date" label="日期"></el-table-column>
              </el-table>
            </el-popover>

            <el-button
              size="mini"
              type="text"
              v-popover:popover4
              style="margin-left: 50px;margin-right: 50px"
              @click="preview">预览</el-button>
            <el-button
              size="mini"
              type="text"
              style="color: #8c939d"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
</template>

<script type="text/ecmascript-6">
  import PreviewProductTemplate from '../commonComponents/PreviewProductTemplate.vue';
    export default {
      name: "protemplate",
      created() {
      },
      data() {
        return{
          templatespro: [
//            {
//            value: '1',
//            name: '(test)默认模板'
//          }, {
//            value: '2',
//            name: '牛肉模板'
//          }, {
//            value: '3',
//            name: '其他模板'
//          }
          ],
        }
      },
      methods: {
        newTemplate() {
//          this.$emit("openExtraPage", {
//            node: 'production',
//            page: "newProduct",
//            name: "新增产品模板",
//            id: "01010101"
//          });
        },
        handleDelete(index, row) {
          this.delete()
        },
        delete() {
          this.$confirm('此操作将删除该产品信息, 是否继续?', '提示', {
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
        preview(){
//          this.open()
          console.log("“产品模板”预览")
        },
        editProduct(){
          console.log("“产品模板”编辑")
        },
//        open() {
//          this.$alert(
//            '<div><PreviewProductTemplate></PreviewProductTemplate></div>', {
//            dangerouslyUseHTMLString: true,
//            showClose:false,
//            showConfirmButton:false,
//            closeOnClickModal:true
//          });
//        }

      },
      components: {
        PreviewProductTemplate
      }
    };
</script>

<style rel="stylesheet/less" lang='less' scoped>
#protemplate {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .el-table{
    width: 100%;
    margin-top: 24px;
  }

}
</style>
