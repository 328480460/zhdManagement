<template>
  <div id="staff">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newStaff">添加员工</el-button>
      <el-button type="primary" size="medium" class="btn-search">邀请员工</el-button>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="employees"
    >
      <el-table-column class="table-column"
                       prop="account"
                       label="账号"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="员工姓名"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="name"
                       label="联系方式"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="contacts"
                       label="角色"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="creat_date"
                       label="添加时间"
      >
      </el-table-column>

      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleEdit">修改</el-button>
          <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
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
import {
  getEmployeeList
} from "../../assets/js/settings/ajax.js";

export default {
  name: "staff",
  created() {
  },
  data() {
    return{
      totalcount: 0,
      employees: [],

    }
  },
  mounted() {
    let params = {
//      productName: "",
//      time: "",
//      customType: "",
//      productCode: "",
//      pageNum: 1,
//      pageSize: 10,
//      receiptdate_start: "",
//      receiptdate_end: ""
    };
    this.initData(params);
  },
  methods: {
    newStaff() {
      this.$emit("openExtraPage", {
        node: 'settings',
        page: "addStaff",
        name: "添加员工",
        id: "03030101"
      });
    },
    initData(params) {
      //查询产品列表
      this.searchConditions(params)
    },
    /*"搜索"---查询员工信息列表接口*/
    searchConditions(current){
//      this.search.pageNum = typeof current === 'number' ? current : 1;
      let params = {
//        productName: this.search.productName,
//        customType: this.search.customType,
//        productCode: this.search.productCode,
//        pagenum: this.search.pageNum,
//        pagesize: this.search.pageSize,
//        receiptdate_start: this.search.time[0],
//        receiptdate_end: this.search.time[1]
      };
      this.getEmployeeList(params);
    },
    //员工信息列表接口
    getEmployeeList(params){
      getEmployeeList(params)
        .then(res => {
          this.totalcount = res.data.totalcount;
          this.employees = res.data.employees;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    clearConditions(){
      this.search.productName = "";
      this.search.time = "";
      this.search.customType = "";
      this.search.productCode = "";
    },
    handleEdit() {
//      this.$emit("openExtraPage", {
//        node:"production",
//        page: "editProduct",
//        name: "编辑产品",
//        id: "01010102"
//      });
    },
    handleDelete(index, row) {
//      this.delete()
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
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#staff {
  margin: 10px;
  padding: 10px;
  height: 100%;
  background-color: #fff;
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;

  }
  .btn-search{
    background-color: transparent;
    color: #03b150;
    margin-left: 15px;
    margin-top: 2px;
  }
}
</style>
