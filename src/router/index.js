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
        //产品-产品分类页
        {
          path: 'production/productType',
          component: ProductType
        }, 
        //产品-新建产品页
        {
          path: 'production/newProduct',
          component: NewProduct
        }, 
        //产品-产品信息页
        {
          path: 'production/productInfo',
          component: ProductInfo
        },
        //产品-编辑产品页
        {
          path: 'production/editProduct',
          component: EditProduct
        },
        //产品-文件上传页
        {
          path: 'production/fileUpload',
          component: FileUpload
        },
        //产品-产品页模板页
        {
          path: 'production/productTemplate',
          component: ProductTemplate
        },
        //产品-产品页模板页
        {
          path: 'production/metarialManagement',
          component: MetarialManagement
        },
        //节点
        {
          path: 'node/nodeInfo',
          component: NodeInfo
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
        }, {
          path: 'settings/customProductType',
          component: CustomProductType
        }, {
          path: 'settings/customNodeType',
          component: CustomNodeType
        }, {
          path: 'settings/customBusinessType',
          component: CustomBusinessType
        }, {
          path: 'settings/customDocumentType',
          component: CustomDocumentType
        }
      ]
    }

  ]
})
