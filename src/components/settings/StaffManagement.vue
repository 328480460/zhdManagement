<template>
  <div id="staff">
    <div class="btn-list">
      <el-button type="primary" size="medium" @click="newStaff">添加员工</el-button>
      <el-button type="primary" size="medium" class="btn-search">邀请员工</el-button>
    </div>

    <el-table class="el-table"
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
                       prop="contacts"
                       label="联系方式"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="role_name"
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
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
  getEmployeeList,
  deleteEmployee
} from "../../assets/js/settings/ajax.js";

export default {
  name: "staff",
  created() {
  },
  data() {
    return{
      totalcount: 0,
      employees: [],
      currentPage: 1,
      pageSize: 10,
    }
  },
  mounted() {
    let params = {
      account: "",
      contacts: "",
      name: "",
      pagenum: 1,
      pagesize: 10,
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
      this.getDataAjax(params);
    },
    //员工信息列表接口
    getEmployeeList(){
      let params ={
        account: "",
        contacts: "",
        name: "",
        pagenum: this.currentPage,
        pagesize: this.pageSize,
      }
        this.getDataAjax(params);
    },
    getDataAjax(params) {
      getEmployeeList(params)
        .then(res => {
          this.totalcount = res.data.totalcount;
          this.employees = res.data.employees;
        })
        .catch(() => {
          this.$message.error("出错啦!");
        });
    },
    handleEdit(index, row) {
      this.$emit("openExtraPage", {
        node:"settings",
        page: "editStaff",
        name: "修改员工信息",
        id: "03030102",
        query: { staffId: row.id },
      });
    },
    handleDelete(index, row) {
      this.delete(index, row)
    },
    delete(index, row) {
      this.$confirm('此操作将删除该员工信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        /*删除接口*/
        let params = {
          id: row.id,
        };
        deleteEmployee(params)
          .then(res => {
            if(res.status == 200){
              this.$message.success("删除成功!");
              this.employees.splice(index, 1);
              this.getEmployeeList()
            }else {
              this.$message.error(res.msg);
            }
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
    // 分页跳转
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getEmployeeList();
    },
  }
};
</script>

<style rel="stylesheet/less" lang='less' scoped>
#staff {
  margin: 10px;
  padding: 10px;
  min-height: 92%;
  background-color: #fff;
  .el-table{
    width: 100%;
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
