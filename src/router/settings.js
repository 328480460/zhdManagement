import EnterpriseInfo from '@/components/settings/EnterpriseInfo'
import EnterpriseInfoEdit from '@/components/settings/EnterpriseInfoEdit'
import AccountSetting from '@/components/settings/AccountSetting'
import AccountSettingEdit from '@/components/settings/AccountSettingEdit'
import StaffManagement from '@/components/settings/StaffManagement'
import AddStaff from '@/components/settings/AddStaff'
import EditStaff from '@/components/settings/EditStaff'
import RolePermission from '@/components/settings/RolePermission'
import AddRole from '@/components/settings/AddRole'
import EditRole from '@/components/settings/EditRole'
import Invitation from '@/components/settings/Invitation'
import CustomProductType from '@/components/settings/CustomProductType'
import AddProductType from '@/components/settings/AddProductType'
import EditProductType from '@/components/settings/EditProductType'
import CustomNodeType from '@/components/settings/CustomNodeType'
import AddNodeType from '@/components/settings/AddNodeType'
import EditNodeType from '@/components/settings/EditNodeType'
import CustomBusinessType from '@/components/settings/CustomBusinessType'
import AddBusinessType from '@/components/settings/AddBusinessType'
import EditBusinessType from '@/components/settings/EditBusinessType'
import CustomDocumentType from '@/components/settings/CustomDocumentType'
import AddDocumentType from '@/components/settings/AddDocumentType'
import EditDocumentType from '@/components/settings/EditDocumentType'
import QualityProblem from '@/components/settings/QualityProblem'
import AddQualityProblem from '@/components/settings/AddQualityProblem'
import EditQualityProblem from '@/components/settings/EditQualityProblem'


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
            id:"1ef0fb6e-cc5f-4890-9b98-17c7b7314e7a"
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
          id:"0cfefd56-a1ae-53ab-bf2d-9e9ced0a6fc8"
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
          id:"7059a500-1f1e-5bf7-bc13-e10726d9a73c"
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
          id:"7fd4a788-bc0b-58f5-91a1-d64d53559bc5"
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
          id:"6166da35-85a2-4ccb-82c4-727e8cafdde7"
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
          id: "07030101"
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
          page: "editStaff",
          node: 'settings',
          name: "修改员工信息",
          id:"ee64a024-a4aa-4b12-8234-6b465a7887b6"
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
          id:"eb492f4a-245b-4b26-8e2c-b16ad0bc33e9"
        }
      }
    },
    //设置-员工设置-角色权限-添加角色
    {
      path : 'settings/addRole',
      component : AddRole,
      name: 'addRole',
      meta: {
        pageInfo: {
          page: "addRole",
          node: 'settings',
          name: "添加角色",
          id:"fe772bb1-035e-43f4-b3e2-52ab71dc6fe0"
        }
      }
    },
  //设置-员工设置-角色权限-编辑角色
    {
      path : 'settings/editRole',
      component : EditRole,
      name: 'editRole',
      meta: {
        pageInfo: {
          page: "editRole",
          node: 'settings',
          name: "修改角色",
          id:"ec257842-ab86-4efb-a0d8-9daa8543cb6a"
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
          id:"517e18c5-88dc-4105-960e-0a54f64b8ffe"
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
          id:"3eac4c25-e2fb-5069-86e0-87b806accad2"
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
          name: "添加产品类型",
          id:"feb5f41c-382b-4325-a94c-072347d4646e"
        }
      }
    },
  //设置-自定义属性-编辑产品类型
    {
      path : 'settings/editProductType',
      component : EditProductType,
      name: 'editProductType',
      meta: {
        pageInfo: {
          page: "editProductType",
          node: 'settings',
          name: "编辑产品类型",
          id: "07040102"
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
          id:"8714d75e-772e-4e52-bb94-7c95de78f2b2"
        }
      }
    },
    //设置-自定义属性-节点类型添加
    {
      path : 'settings/addNodeType',
      component : AddNodeType,
      name: 'addNodeType',
      meta: {
        pageInfo: {
          page: "addNodeType",
          node: 'settings',
          name: "添加节点类型",
          id:"ccef89cd-d890-43de-9ce3-df2f318b75ad"
        }
      }
    },
    //设置-自定义属性-节点类型修改
    {
      path : 'settings/editNodeType',
      component : EditNodeType,
      name: 'editNodeType',
      meta: {
        pageInfo: {
          page: "editNodeType",
          node: 'settings',
          name: "节点类型修改",
          id: "07040202"
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
          id:"e3195d33-10f6-44ea-8a06-feb24eb3e110"
        }
      }
    },
  //设置-自定义属性-添加业务类型
    {
      path : 'settings/addBusinessType',
      component : AddBusinessType,
      name: 'addBusinessType',
      meta: {
        pageInfo: {
          page: "addBusinessType",
          node: 'settings',
          name: "添加业务类型",
          id:"d88c5460-2362-423d-a55e-f079398ddd9c"
        }
      }
    },
  //设置-自定义属性-修改业务类型
    {
      path : 'settings/editBusinessType',
      component : EditBusinessType,
      name: 'editBusinessType',
      meta: {
        pageInfo: {
          page: "editBusinessType",
          node: 'settings',
          name: "修改业务类型",
          id: "07040302"
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
          id:"db10d2b0-3c1e-4e63-bc53-b0c8d2fe9e1b"
        }
      }
    },
  //设置-自定义属性-添加文档类型
    {
      path : 'settings/addDocumentType',
      component : AddDocumentType,
      name: 'addDocumentType',
      meta: {
        pageInfo: {
          page: "addDocumentType",
          node: 'settings',
          name: "添加文档类型",
          id:"c37e8107-9906-49ea-af8a-ddaf89cd843f"
        }
      }
    },
  //设置-自定义属性-修改文档类型
    {
      path : 'settings/editDocumentType',
      component : EditDocumentType,
      name: 'editDocumentType',
      meta: {
        pageInfo: {
          page: "editDocumentType",
          node: 'settings',
          name: "修改文档类型",
          id: "07040402"
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
          id:"4599661f-14f9-4f04-b4d6-0e78c1922d85"
        }
      }
    },
    //设置-自定义属性-添加质量问题
    {
      path : 'settings/addQualityProblem',
      component : AddQualityProblem,
      name: 'addQualityProblem',
      meta: {
        pageInfo: {
          page: "addQualityProblem",
          node: 'settings',
          name: "添加质量问题",
          id:"4d25e35b-e690-4119-9d24-6e2e0022575a"
        }
      }
    },
    //设置-自定义属性-编辑质量问题
    {
      path : 'settings/editQualityProblem',
      component : EditQualityProblem,
      name: 'editQualityProblem',
      meta: {
        pageInfo: {
          page: "editQualityProblem",
          node: 'settings',
          name: "编辑质量问题",
          id: "07040502"
        }
      }
    }

]
