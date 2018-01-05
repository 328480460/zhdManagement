<template>
  <div id="cpymb">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProductType">新建自定义分类</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入自定义分类名称" ></el-input></el-col>
        <el-button type="primary" size="medium"  @click="searchProductType" class="btn-search" >搜索</el-button>
      </el-row>
    </div>

      <el-table class="el-table"
        border
        :data="tableData"

      >
        <el-table-column class="table-column"
          prop="name"
          label="自定义分类名称"
        >
        </el-table-column>
        <el-table-column class="table-column"
          label="操作"
          >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit">编辑</el-button>
              <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-pagination
      background
      style="margin-top: 15px"
      layout="total,prev, pager, next"
      :page-size=10
      :total=tableData.length>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: 'cpymb',
  data(){
    return{
      tableData: [{
        name: '牛肉',
      }, {
        name: '羊肉',
      }, {
        name: '其他',
      }]
    }
  },

  methods:{
    newProductType() {
      this.$prompt('自定义分类名称：', '新建自定义分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if( value == null){
          this.judge()
        }else {
          /*新建保存接口*/
          this.$message({
            type: 'success',
            message: '保存成功'
          });
          console.log("保存内容："+value)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    searchProductType(){
      console.log("搜索分类名称");
      /*搜索接口*/
 //        axios.get("/api/").then(res => {
//          console.log(res);
//        });
    },
    handleEdit() {
      this.$prompt('自定义分类名称：', '编辑自定义分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if( value == null){
          this.judge()
        }else {
          /*编辑保存接口*/
          this.$message({
              type: 'success',
              message: '保存成功'
            });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    handleDelete(index, row) {
      this.delete()
    },
    judge() {
      this.$message({
        message: '输入内容不可为空',
        type: 'warning'
      });
    },
    delete() {
      this.$confirm('此操作将删除该分类名称, 是否继续?', '提示', {
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
    }
  },
}
</script>

<style rel="stylesheet/less" lang='less' scoped>
#cpymb {
  margin: 10px;
  padding: 10px;
  height: auto;
  background-color: #fff;
  .demo-autocomplete {
    margin-top: 10px;
    .sub-title {
      text-align: right;
      padding-right: 20px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
    .el-col-4 {
      .el-autocomplete {
        width: 100%;
      }
    }
    .btn-search{
      background-color: transparent;
      color: #03b150;
      margin-left: 20px;
      margin-top: 2px;
    }
  }

  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 25px;
  }

}
</style>
