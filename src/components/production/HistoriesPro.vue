<template>
  <div id="histories">
    <el-table class="el-table"
              border
    >
      <el-table-column class="table-column"
                       prop="name"
                       label="文件名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="总条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="成功条数"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="状态"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       prop="name"
                       label="上传日期"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="操作"
      >
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'histories',
  data(){
    return{
      historylist:[

      ]

    }
  },
  mounted() {
    this.loadAll();
  },
  methods: {
    loadAll() {
      //查询产品列表
//      this.searchHistories()
    },
    /*"产品"---查询历史记录接口*/
    searchHistories(){
      let that = this
      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
          pagenum: that.pagenum,
          pagesize: 10,
        })
        .then(function (response) {
          console.log("查询历史记录接口==="+response.data);
        })
        .catch(function (error) {
          console.log(error);
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
