import EnterpriseInfo from '@/components/settings/EnterpriseInfo'
import EnterpriseInfoEdit from '@/components/settings/EnterpriseInfoEdit'
import AccountSetting from '@/components/settings/AccountSetting'
import AccountSettingEdit from '@/components/settings/AccountSettingEdit'
import StaffManagement from '@/components/settings/StaffManagement'
import AddStaff from '@/components/settings/AddStaff'
import EditStaff from '@/components/settings/EditStaff'
import RolePermission from '@/components/settings/RolePermission'
import Invitation from '@/components/settings/Invitation'
import QualityProblem from '@/components/settings/QualityProblem'
import CustomProductType from '@/components/settings/CustomProductType'
import AddProductType from '@/components/settings/AddProductType'
import EditProductType from '@/components/settings/EditProductType'
import UpdateProductType from '@/components/settings/UpdateProductType'
import CustomNodeType from '@/components/settings/CustomNodeType'
import CustomBusinessType from '@/components/settings/CustomBusinessType'
import CustomDocumentType from '@/components/settings/CustomDocumentType'

export default[
    { //设置-企业信息
        path : 'settings/enterpriseInfo',
        component : EnterpriseInfo,
        name: 'enterpriseInfo',
        meta: {
          pageInfo: {
            page: "enterpriseInfo",
            node: 'settings',
            name: "企业信息",
            id: "030101"
          }
        }
    },
    { //设置-企业信息-编辑
      path : 'settings/enterpriseInfoEdit',
      component : EnterpriseInfoEdit,
      name: 'enterpriseInfoEdit',
      meta: {
        pageInfo: {
          page: "enterpriseInfoEdit",
          node: 'settings',
          name: "编辑企业信息",
          id: "03010102"
        }
      }
    },
    //设置-账号信息
    {
      path : 'settings/accountSetting',
      component : AccountSetting,
      name: 'accountSetting',
      meta: {
        pageInfo: {
          page: "accountSetting",
          node: 'settings',
          name: "账号信息",
          id: "030201"
        }
      }
    },
    //设置-账号信息-编辑
    {
      path : 'settings/accountSettingEdit',
      component : AccountSettingEdit,
      name: 'accountSettingEdit',
      meta: {
        pageInfo: {
          page: "accountSettingEdit",
          node: 'settings',
          name: "编辑账号信息",
          id: "03020102"
        }
      }
    },
    //设置-员工设置-员工管理
    {
      path : 'settings/staffManagement',
      component : StaffManagement,
      name: 'staffManagement',
      meta: {
        pageInfo: {
          page: "staffManagement",
          node: 'settings',
          name: "员工管理",
          id: "030301"
        }
      }
    },
    //设置-员工设置-添加员工
    {
      path : 'settings/addStaff',
      component : AddStaff,
      name: 'addStaff',
      meta: {
        pageInfo: {
          page: "addStaff",
          node: 'settings',
          name: "添加员工",
          id: "03030101"
        }
      }
    },
    //设置-员工设置-添加员工
    {
      path : 'settings/editStaff',
      component : EditStaff,
      name: 'editStaff',
      meta: {
        pageInfo: {
          page: "v",
          node: 'settings',
          name: "修改员工信息",
          id: "03030102"
        }
      }
    },
    //设置-员工设置-角色权限
    {
      path : 'settings/rolePermission',
      component : RolePermission,
      name: 'rolePermission',
      meta: {
        pageInfo: {
          page: "rolePermission",
          node: 'settings',
          name: "角色权限",
          id: "030302"
        }
      }
    },
    //设置-员工设置-待定邀请
    {
      path : 'settings/invitation',
      component : Invitation,
      name: 'invitation',
      meta: {
        pageInfo: {
          page: "invitation",
          node: 'settings',
          name: "待定邀请",
          id: "030303"
        }
      }
    },
    //设置-自定义属性-产品类型
    {
      path : 'settings/customProductType',
      component : CustomProductType,
      name: 'customProductType',
      meta: {
        pageInfo: {
          page: "customProductType",
          node: 'settings',
          name: "产品类型",
          id: "030401"
        }
      }
    },
  //设置-自定义属性-产品类型添加
    {
      path : 'settings/addProductType',
      component : AddProductType,
      name: 'addProductType',
      meta: {
        pageInfo: {
          page: "addProductType",
          node: 'settings',
          name: "产品类型添加",
          id: "03040101"
        }
      }
    },
  //设置-自定义属性-产品类型添加
    {
      path : 'settings/editProductType',
      component : EditProductType,
      name: 'editProductType',
      meta: {
        pageInfo: {
          page: "editProductType",
          node: 'settings',
          name: "编辑产品类型",
          id: "03040102"
        }
      }
    },
  //设置-自定义属性-产品类型修改
    {
      path : 'settings/updateProductType',
      component : UpdateProductType,
      name: 'updateProductType',
      meta: {
        pageInfo: {
          page: "updateProductType",
          node: 'settings',
          name: "产品类型修改",
          id: "03040102"
        }
      }
    },
    //设置-自定义属性-节点类型
    {
      path : 'settings/customNodeType',
      component : CustomNodeType,
      name: 'customNodeType',
      meta: {
        pageInfo: {
          page: "customNodeType",
          node: 'settings',
          name: "节点类型",
          id: "030402"
        }
      }
    },
    //设置-自定义属性-业务类型
    {
      path : 'settings/customBusinessType',
      component : CustomBusinessType,
      name: 'customBusinessType',
      meta: {
        pageInfo: {
          page: "customBusinessType",
          node: 'settings',
          name: "业务类型",
          id: "030403"
        }
      }
    },
    //设置-自定义属性-文档类型
    {
      path : 'settings/customDocumentType',
      component : CustomDocumentType,
      name: 'customDocumentType',
      meta: {
        pageInfo: {
          page: "customDocumentType",
          node: 'settings',
          name: "文档类型",
          id: "030404"
        }
      }
    },
    //设置-自定义属性-质量问题
    {
      path : 'settings/qualityProblem',
      component : QualityProblem,
      name: 'qualityProblem',
      meta: {
        pageInfo: {
          page: "qualityProblem",
          node: 'settings',
          name: "质量问题",
          id: "030405"
        }
      }
    }

]
