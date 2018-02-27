<template>
  <div id="histories">
    <el-table class="el-table"
              border
              :data="historylist"
    >
      <el-table-column class="table-column"
                       prop="name"
                       label="文件名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="totalcount"
                       label="总条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="count"
                       label="成功条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="status"
                       label="状态"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       prop="date"
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

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'histories',
  data(){
    return{
      historylist: [
//        {
//        value: '1',
//        name: '(test)文件名称',
//        totalcount:'2',
//        count:'2',
//        status:'0',
//        date:'2018-1-8',
//      }, {
//        value: '2',
//        name: '文件名称',
//        totalcount:'2',
//        count:'2',
//        status:'0',
//        date:'2018-1-8',
//      }
      ],

    }
  },
  mounted() {
    this.searchHistories();
  },
  methods: {
    /*"产品"---查询历史记录接口*/
    searchHistories(){
//      let that = this
//      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
//          pagenum: that.pagenum,
//          pagesize: 10,
//        })
//        .then(function (response) {
//          console.log("查询历史记录接口==="+response.data);
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
    },
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
