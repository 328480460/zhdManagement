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
        //设置-自定义属性-文档类型
        {
          path: 'settings/customDocumentType',
          component: CustomDocumentType
        }
      ]
    }

  ]
})
