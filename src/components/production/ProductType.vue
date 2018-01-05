<template>
  <div id="cpymb">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProductType">新建自定义分类</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入自定义分类名称" style="padding-left: 20px"></el-input></el-col>
        <el-button type="primary" size="medium"  @click="searchProductType" class="btn-search" >搜索</el-button>
      </el-row>
    </div>

    <el-table class="el-table"
              border
              :data="customTypeList"
    >
      <el-table-column class="table-column"
                       prop="type_name"
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
            style="margin-right: 50px"
            @click="editProduct">编辑</el-button>
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total,prev, pager, next"
      :page-size=10
      :total=totalcount>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  export default {
    name: 'cpymb',
    data(){
      return{
        totalcount:0,
        pagenum:1,
        customTypeList:[],
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
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
      editProduct() {
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.pagenum = val
        console.log(`当前页: ${this.pagenum}`);
      },
      loadAll(){
        let that = this
        axios.post('http://47.92.149.109:7108/mockjsdata/2/Product/getListProductType', {
            pagenum: that.pagenum,
            pagesize: 10,
          })
          .then(function (response) {
            console.log("产品分类列表==="+JSON.stringify(response.data.data));

            that.totalcount = response.data.data.totalcount;
            that.customTypeList = response.data.data.customTypeList;

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #cpymb {
    margin: 10px;
    padding: 10px;
    height: 100%;
    background-color: #fff;
    .demo-autocomplete {
      margin-top: 10px;
      .sub-title {
        text-align: right;
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
        margin-left: 40px;
        margin-top: 2px;
      }
    }

    .el-table{
      width: 100%;
      text-align: center;
      margin-top: 25px;
    }
    .el-table--border th:first-child .cell{
      text-align: center;
    }

  }
</style>
