import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/homepage/Home'
import ProductInfo from '@/components/production/ProductInfo'
import EditProduct from '@/components/production/EditProduct'
import ProductType from '@/components/production/ProductType'
import BatchImportPro from '@/components/production/BatchImportPro'
import HistoriesPro from '@/components/production/HistoriesPro'
import ProductTemplate from '@/components/production/ProductTemplate'
import MetarialManagement from '@/components/production/MetarialManagement'
import NewProduct from '@/components/commonComponents/NewProduct'
import EnterpriseInfo from '@/components/settings/EnterpriseInfo'
import NodeInfo from '@/components/node/NodeInfo'
import BatchImportNode from '@/components/node/BatchImportNode'
import HistoriesNode from '@/components/node/HistoriesNode'
import AccountSetting from '@/components/settings/AccountSetting'
import StaffManagement from '@/components/settings/StaffManagement'
import RolePermission from '@/components/settings/RolePermission'
import Invitation from '@/components/settings/Invitation'
import CustomProductType from '@/components/settings/CustomProductType'
import CustomNodeType from '@/components/settings/CustomNodeType'
import CustomBusinessType from '@/components/settings/CustomBusinessType'
import CustomDocumentType from '@/components/settings/CustomDocumentType'
import QualityProblem from '@/components/settings/QualityProblem'
import ChainSynthesis from '@/components/trace/ChainSynthesis'
import TraceCodeApplay from '@/components/trace/TraceCodeApplay'
import TraceCodeQuery from '@/components/trace/TraceCodeQuery'
import FTPSync from '@/components/business/FTPSync'
import GetGoodsInfo from '@/components/business/GetGoodsInfo'
import MultiImport from '@/components/business/MultiImport'
import ProductGoodsInfo from '@/components/business/ProductGoodsInfo'
import SendGoodsInfo from '@/components/business/SendGoodsInfo'
import SystemInsert from '@/components/business/SystemInsert'
import ImportHistoryBusiness from '@/components/business/ImportHistoryBusiness'
import FTPHistoryBusiness from '@/components/business/FTPHistoryBusiness'
import DocumentAdministration from '@/components/document/DocumentAdministration'
import QualityAdministration from '@/components/quality/QualityAdministration'
import RecallAdministration from '@/components/quality/RecallAdministration'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录页
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // home页
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        //产品-产品分类
        {
          path: 'production/productType',
          component: ProductType
        },
        //产品-产品信息
        {
          path: 'production/productInfo',
          component: ProductInfo
        },
        //产品-新建产品
        {
          path: 'production/newProduct',
          component: NewProduct
        },
        //产品-编辑产品
        {
          path: 'production/editProduct',
          component: EditProduct
        },
        //产品-批量导入
        {
          path: 'production/batchImportPro',
          component: BatchImportPro
        },
        //产品-历史记录
        {
          path: 'production/HistoriesPro',
          component: HistoriesPro
        },
        //产品-产品模板页
        {
          path: 'production/productTemplate',
          component: ProductTemplate
        },
        //产品-素材管理
        {
          path: 'production/metarialManagement',
          component: MetarialManagement
        },
        //节点-节点管理
        {
          path: 'node/nodeInfo',
          component: NodeInfo
        },
        //节点-批量导入
        {
          path: 'node/batchImportNode',
          component: BatchImportNode
        },
        //节点-历史记录
        {
          path: 'node/historiesNode',
          component: HistoriesNode
        },
        //设置-企业信息
        {
          path: 'settings/enterpriseInfo',
          component: EnterpriseInfo
        },
        //设置-账号信息
        {
          path: 'settings/accountSetting',
          component: AccountSetting
        },
        //设置-员工设置-员工管理
        {
          path: 'settings/staffManagement',
          component: StaffManagement
        },
        //设置-员工设置-角色权限
        {
          path: 'settings/rolePermission',
          component: RolePermission
        },
        //设置-员工设置-待定邀请
        {
          path: 'settings/invitation',
          component: Invitation
        },
        //设置-自定义属性-产品类型
        {
          path: 'settings/customProductType',
          component: CustomProductType
        },
        //设置-自定义属性-节点类型
        {
          path: 'settings/customNodeType',
          component: CustomNodeType
        },
        //设置-自定义属性-业务类型
        {
          path: 'settings/customBusinessType',
          component: CustomBusinessType
        },
        //设置-自定义属性-质量问题
        {
          path: 'settings/qualityProblem',
          component: QualityProblem
        },
        //设置-自定义属性-文档类型
        {
          path: 'settings/customDocumentType',
          component: CustomDocumentType
        },
        //追溯-链条合成
        {
          path: 'trace/chainSynthesis',
          component: ChainSynthesis
        },
        //追溯-溯源查询
        {
          path: 'trace/traceCodeQuery',
          component: TraceCodeQuery
        },
        //业务-收货信息
        {
          path: 'business/getGoodsInfo',
          component: GetGoodsInfo
        },
        //业务-生产信息
        {
          path: 'business/productGoodsInfo',
          component: ProductGoodsInfo
        },
        //业务-发货信息
        {
          path: 'business/sendGoodsInfo',
          component: SendGoodsInfo
        },
        //业务-批量导入-批量导入
        {
          path: 'business/multiImport',
          component: MultiImport
        },
        //业务-批量导入-历史记录
        {
          path: 'business/importHistoryBusiness',
          component: ImportHistoryBusiness
        },
        //业务-FTP同步-FTP配置
        {
          path: 'business/FTPSync',
          component: FTPSync
        },
        //业务-FTP同步-历史记录
        {
          path: 'business/FTPHistoryBusiness',
          component: FTPHistoryBusiness
        },
        //业务-系统对接
        {
          path: 'business/systemInsert',
          component: SystemInsert
        },
        //文档-文档管理
        {
          path: 'document/documentAdministration',
          component: DocumentAdministration
        },
        //质量-质量问题管理
        {
          path: 'quality/qualityAdministration',
          component: QualityAdministration
        },
        //质量-召回管理
        {
          path: 'quality/recallAdministration',
          component: RecallAdministration
        },
      ]
    }

  ]
})
