<template>
  <div id="cpymb">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProductType">新建自定义分类</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入自定义分类名称" v-model="search.typeName" style="padding-left: 20px"></el-input></el-col>
        <el-button type="primary" size="medium"  @click="searchProductType" class="btn-search" >搜索</el-button>
      </el-row>
    </div>

    <el-table class="el-table"
              border
              stripe
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
            @click="editProduct(scope.$index, scope.row)">编辑</el-button>
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
        :current-page= currentPage
        @current-change="handleCurrentChange"
        :page-size=10
        :total=totalcount>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getListProductType,
    createProductType,
    updateProductType,
    deleteProductType,
  } from "../../assets/js/production/ajax.js";
  import { deepCopy } from "../../assets/js/api/util.js";

  export default {
    name: 'cpymb',
    data(){
      return{
        search: {
          typeName:'',
        },
        totalcount:0,
        customTypeList:[],
        currentPage: 1,
        pageSize: 10,
        ajaxSearch: "",
        typenameDetail:'',
      }
    },
    mounted() {
      let params = {
        type_name: '',
        pagenum: 1,
        pagesize: 10,
      };
      this.initData(params);
      this.ajaxSearch = deepCopy(this.search);
    },
    methods:{
      //新建分类
      newProductType() {
        this.$prompt('自定义分类名称：', '新建自定义分类', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          if( value == null){
            this.judge()
          }else {
            /*分类新建接口*/
            let params = {
              type_name: value,
            };
            createProductType(params)
              .then(res => {
                this.$message.success("新建成功!");
                this.getTypeList()
              })
              .catch(() => {
                this.$message.error("出错啦!");
              });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      /*"搜索"---查询产品分类列表接口*/
      searchProductType(current){
        this.ajaxSearch = deepCopy(this.search);
        if (this.currentPage !== 1) {
          this.currentPage = 1;
          return;
        }
        this.getTypeList();
      },
      getTypeList(){
        let params = {
          type_name: this.ajaxSearch.typeName,
          pagenum: this.currentPage,
          pagesize: this.pageSize,
        };
        this.getDataAjax(params);
      },
      getDataAjax(params){
        getListProductType(params)
          .then(res => {
            this.totalcount = res.data.totalcount;
            this.customTypeList = res.data.customTypeList;
          })
          .catch(() => {
            this.$message.error("出错啦!");
          });
      },
      //编辑分类
      editProduct(index, row) {
        //“编辑分类”弹框内容
        this.$prompt('自定义分类名称：', '编辑自定义分类', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue:row.type_name
        }).then(({ value }) => {
          if( value == null){
            this.judge()
          }else {
              /*分类修改接口*/
              let params = {
                id: row.id,
                type_name: value,
              };
              updateProductType(params)
                .then(res => {
                  this.$message({
                    type: 'success',
                    message: '编辑成功'
                  });
                  console.log("分类修改res---"+JSON.stringify(res))
                })
                .catch(() => {
                  this.$message.error("出错啦!");
                });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      judge() {
        this.$message({
          message: '输入内容不可为空',
          type: 'warning'
        });
      },
      handleDelete(index, row) {
        this.delete(index,row)
      },
      delete(index,row) {
        this.$confirm('此操作将删除该分类名称, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /*删除接口*/
          let params = {
            id: row.id,
          };
          deleteProductType(params)
            .then(res => {
              this.$message.success("删除成功!");
              this.customTypeList.splice(index, 1);
              this.getTypeList()
            })
            .catch(() => {
              this.$message.error("出错啦!");
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getTypeList()
      },
      initData(params) {
        //查询产品类型列表信息
        this.getDataAjax(params);
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
      margin-top: 25px;
    }

  }
</style>
