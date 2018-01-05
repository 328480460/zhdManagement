<template>
  <div id="cpk">
    <div class="btn-list">
      <el-button type="primary" size="medium"  @click="newProduct">新建产品</el-button>
    </div>
    <div class="option-wrapper">
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">产品名称</div></el-col>
        <el-col :span="4"><el-input placeholder="请输入产品名称"  v-model="search.productName" :fetch-suggestions="querySearch" ></el-input></el-col>
        <el-col :span="3"><div class="sub-title">创建日期</div></el-col>
        <el-col :span="6">
          <el-date-picker v-model="search.time" type="daterange"
                          align="right" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                          :picker-options="pickerOptions2"  ></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-col :span="2"><div class="sub-title">自定义分类</div></el-col>
        <el-col :span="4">
          <el-select v-model="search.userDefineType" clearable  placeholder="请选择" width="50px" >
            <el-option  v-for="item in userDefineType" :key="item.value" :label="item.label"  :value="item.value" >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><div class="sub-title">产品编码</div></el-col>
        <el-col :span="4"><el-input v-model="search.productCode" placeholder="请输入内容"></el-input></el-col>
      </el-row>
      <el-row class="demo-autocomplete">
        <el-button type="primary" size="medium"  @click="searchConditions" class="btn-search" >搜索</el-button>
        <span @click="clearConditions" class="span-clear">清空筛选条件</span>
      </el-row>
    </div>

    <el-table class="el-table"
              border
              stripe
              :data="productList"
    >
      <el-table-column class="table-column"
                       prop="id"
                       label="产品编码"
    >
    </el-table-column>
      <el-table-column class="table-column"
                       prop="product_name"
                       label="产品名称"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="product_type_name"
                       label="产品分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="custom_type_name"
                       label="自定义分类"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       prop="metering_name"
                       label="单位"
      >
      </el-table-column>
      <el-table-column class="table-column"
                       label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit">编辑</el-button>
          <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      style="margin-top: 15px"
      layout="total,prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size=10
      :total= totalcount>
    </el-pagination>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: "cpk",
  data() {
    return {
      totalcount: 0,
      productList: [],
      pagenum:1,
      search: {
        productName: '',
        time: '',
        userDefineType: '',
        productCode: ''
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      userDefineType: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

    };
  },
  created() {

  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    newProduct() {
      this.$emit("openExtraPage", {
        page: "NewProduct",
        name: "新建产品",
        id: "01010101"
      });
    },
//    querySearch(queryString, cb) {
//      var restaurants = this.restaurants;
//      var results = queryString
//        ? restaurants.filter(this.createFilter(queryString))
//        : restaurants;
//      // 调用 callback 返回建议列表的数据
//      cb(results);
//    },
    querySearch(queryString, cb) {
      this.productName = queryString
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleEdit() {
      this.newProduct()
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
    searchConditions(){
      /*"搜索"---查询产品列表接口*/
      let that = this
      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
          pagenum: that.pagenum,
          pagesize: 10,
          product_code:'',
          product_name:that.productName,
        })
        .then(function (response) {
          console.log("input产品名称==="+that.productName);

          that.totalcount = response.data.data.totalcount;
          that.productList = response.data.data.productList;

        })
        .catch(function (error) {
          console.log(error);
        });

    },
    clearConditions(){
      console.log("清空筛选条件");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pagenum = val
      console.log(`当前页: ${this.pagenum}`);
    },
    loadAll() {
      console.log('loadall')
      let that = this;
      axios.post('http://47.92.149.109:7108/mockjsdata/2/getProductList', {
          pagenum: that.pagenum,
          pagesize: 10,
          product_code:'',
          product_name:'',
        })
        .then(function (response) {
          console.log("查询产品列表==="+JSON.stringify(response.data.data));
          console.log(response.data.data);
          that.totalcount = response.data.data.totalcount ;
          that.productList = response.data.data.productList;
        })
        .catch(function (error) {
          console.log(error);
        });
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        { value: "Hot honey 首尔炸鸡（仙霞路）", address: "上海市长宁区淞虹路661号" },
        { value: "新旺角茶餐厅", address: "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        { value: "胖仙女纸杯蛋糕（上海凌空店）", address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        { value: "豪大大香鸡排超级奶爸", address: "上海市嘉定区曹安公路曹安路1685号" },
        { value: "茶芝兰（奶茶，手抓饼）", address: "上海市普陀区同普路1435号" },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        { value: "Monica摩托主题咖啡店", address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        { value: "浮生若茶（凌空soho店）", address: "上海长宁区金钟路968号9号楼地下一层" },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        { value: "快乐柠檬（神州智慧店）", address: "上海市长宁区天山西路567号1层R117号店铺" },
        { value: "Merci Paul cafe", address: "上海市普陀区光复西路丹巴路28弄6号楼819" },
        { value: "猫山王（西郊百联店）", address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        { value: "唦哇嘀咖", address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        { value: "鲜果榨汁（金沙江路和美广店）", address: "普陀区金沙江路2239号金沙和美广场B1-10-6" },
        { value: "开心丽果（缤谷店）", address: "上海市长宁区威宁路天山路341号" },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        { value: "凡仔汉堡（老真北路店）", address: "上海市普陀区老真北路160号" },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        { value: "饭典*新简餐（凌空SOHO店）", address: "上海市长宁区金钟路968号9号楼地下一层9-83室" },
        { value: "焦耳·川式快餐（金钟路店）", address: "上海市金钟路633号地下一层甲部" },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        { value: "樱花食堂（凌空店）", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        { value: "福荣祥烧腊（平溪路店）", address: "上海市长宁区协和路福泉路255弄57-73号" },
        { value: "速记黄焖鸡米饭", address: "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        { value: "(小杨生煎)西郊百联餐厅", address: "长宁区仙霞西路88号百联2楼" },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        { value: "南拳妈妈龙虾盖浇饭", address: "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ];
    }
  }
};
</script>

<style rel="stylesheet/scss" lang='less' scoped>
#cpk {
  margin: 10px;
  padding: 10px;
  height: auto;
  background-color: #fff;
  .demo-autocomplete {
    margin-top: 10px;
    .btn-search{
      background-color: transparent;
      color: #03b150;
      margin-left: 8.33333%;
      margin-top: 2px;
    }
    .span-clear{
      color: #999999;
      margin-left: 15px;
      cursor: pointer;
    }
  }
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
  .el-table{
    width: 100%;
    text-align: center;
    margin-top: 24px;
    .table-column{
    }
  }
}
</style>
