import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/homepage/Home'
import ProductInfo from '@/components/production/ProductInfo'
import EditProduct from '@/components/production/EditProduct'
import ProductType from '@/components/production/ProductType'
import FileUpload from '@/components/production/FileUpload'
import ProductTemplate from '@/components/production/ProductTemplate'
import MetarialManagement from '@/components/production/MetarialManagement'
import NewProduct from '@/components/commonComponents/NewProduct'
import EnterpriseInfo from '@/components/settings/EnterpriseInfo'
import NodeInfo from '@/components/node/NodeInfo'
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
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        //产品
        {
          path: 'productType',
          component: ProductType
        }, {
          path: 'productInfo',
          component: ProductInfo
        },{
          path: 'newProduct',
          component: NewProduct
        },{
          path: 'editProduct',
          component: EditProduct
        },{
          path: 'fileUpload',
          component: FileUpload
        },{
          path: 'productTemplate',
          component: ProductTemplate
        },{
          path: 'metarialManagement',
          component: MetarialManagement
        },
        //节点
        {
          path: 'nodeInfo',
          component: NodeInfo
        }
        //设置-企业信息
        , {
          path: 'enterpriseInfo',
          component: EnterpriseInfo
        },
        //设置-账号信息
        {
          path: 'accountSetting',
          component: AccountSetting
        },
        //设置-员工设置-员工管理
        {
          path: 'staffManagement',
          component: StaffManagement
        },
        //设置-员工设置-角色权限
        {
          path: 'rolePermission',
          component: RolePermission
        },
        //设置-员工设置-待定邀请
        {
          path: 'invitation',
          component: Invitation
        },
        {
          path: 'customProductType',
          component: CustomProductType
        },
        {
          path: 'customNodeType',
          component: CustomNodeType
        },
        {
          path: 'customBusinessType',
          component: CustomBusinessType
        },
        {
          path: 'customDocumentType',
          component: CustomDocumentType
        },

      ]
    }

  ]
})
