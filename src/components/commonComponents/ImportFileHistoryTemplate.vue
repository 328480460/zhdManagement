<template>
  <div id="histories">
    <el-table class="el-table"
              border
              :data="uploadMoudleList"
    >
      <el-table-column class="table-column"
                       prop="file_name"
                       label="文件名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="allcount"
                       label="总条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="success_count"
                       label="成功条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="status"
                       label="状态"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       prop="upload_date"
                       label="上传日期"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="details">详情</el-button>
          <el-button
            size="mini"
            type="text"
            style="margin-left: 50px"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      style="margin-top: 15px"
      layout="total,prev, pager, next"
      :current-page= 'currentPage'
      @current-change="handleCurrentChange"
      :page-size=10
      :total= 'totalcount'>
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getUploadRecord
  } from "../../assets/js/login/ajax.js";

export default {
  name: 'histories',
  data(){
    return{
      totalcount: 0,
      currentPage: 1,
      pageSize: 10,
      uploadMoudleList: [],
    }
  },
  props: {
    file_type: {
      type: Number,
      required: true
    }
  },
  mounted() {
    let params = {
      file_type: this.file_type,
      pagenum: 1,
      pagesize: 10,
    };
    this.initData(params);
  },
  methods: {
    details(){
      console.log("历史记录详情查看");
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
    // 分页跳转
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUploadRecord();
    },
    //导入记录查询
    getUploadRecord() {
      let params = {
        file_type: this.file_type,
        pagenum: this.currentPage,
        pagesize: this.pageSize,
      };
      this.getDataAjax(params);
    },
    getDataAjax(params) {
      getUploadRecord(params)
        .then(res => {
          this.totalcount = res.data.totalcount;
          this.uploadMoudleList = res.data.uploadMoudleList;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    initData(params){
      this.getDataAjax(params);
    }
  }

}
</script>

<style rel="stylesheet/less" lang='less' scoped>
  #histories {
    margin: 10px;
    padding: 10px;
    height: 100%;
    background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;

  }
  }
</style>
