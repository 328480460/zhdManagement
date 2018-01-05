export const menu = [
    {
        id: '01',
        name: '产品',
        icon: 'el-icon-menu',
        disabled: false,
        children: [
            {
                id: '0101',
                name: '产品信息',
                disabled: false,
                children: [
                    {
                        id: '010101',
                        name: '产品信息',
                        disabled: false,
                        page: 'ProductInfo'
                    }, {
                        id: '010102',
                        name: '产品分类',
                        disabled: false,
                        page: 'ProductType'
                    }, {
                        id: '010103',
                        name: '产品页模板',
                        disabled: false,
                        page: 'ProductTemplate'
                    }
                ]
            }, {
                id: '0102',
                name: '文件上传',
                disabled: false,
                children: [
                    {
                        id: '010201',
                        name: '文件上传',
                        disabled: false,
                        page: 'FileUpload'
                    }
                ]
            }, {
                id: '0103',
                name: '产品页模板',
                disabled: false,
                children: [
                  {
                    id: '010301',
                    name: '产品页模板',
                    disabled: false,
                    page: 'ProductTemplate'
                  },{
                    id: '010302',
                    name: '素材管理',
                    disabled: false,
                    page: 'MetarialManagement'
                  }
                ]
              }
        ]
    }, {
        id: '02',
        name: '节点',
        icon: 'el-icon-menu',
        disabled: false,
        children: [
            {
                id: '0201',
                name: '节点管理',
                disabled: false,
                children: [
                    {
                        id: '020101',
                        name: '节点管理',
                        disabled: false,
                        page: 'NodeInfo'
                    }
                ]
            }, {
                id: '0202',
                name: '批量导入',
                disabled: false,
                children: [
                    {
                        id: '020201',
                        name: '产品库',
                        disabled: false,
                        page: 'NodeInfo'
                    }, {
                        id: '020202',
                        name: '历史记录',
                        disabled: false,
                        page: 'ProductInfo'
                    }
                ]
            }
        ]
    }, {
        id: '03',
        name: '设置',
        icon: 'el-icon-menu',
        disabled: false,
        children: [
            {
                id: '0301',
                name: '企业信息',
                disabled: false,
                children: [
                    {
                        id: '030101',
                        name: '企业信息',
                        disabled: false,
                        page: 'EnterpriseInfo'
                    }
                ]
            }, {
                id: '0302',
                name: '账号设置',
                disabled: false,
                children: [
                    {
                        id: '030201',
                        name: '账号信息',
                        disabled: false,
                        page: 'AccountSetting'
                    }
                ]
            }, {
                id: '0303',
                name: '员工设置',
                disabled: false,
                children: [
                    {
                        id: '030301',
                        name: '员工管理',
                        disabled: false,
                        page: 'StaffManagement'
                    }, {
                        id: '030302',
                        name: '角色权限',
                        disabled: false,
                        page: 'RolePermission'
                    }, {
                        id: '030303',
                        name: '待定邀请',
                        disabled: false,
                        page: 'Invitation'
                    }
                ]
            }, {
                id: '0304',
                name: '自定义属性',
                disabled: false,
                children: [
                    {
                        id: '030401',
                        name: '产品类型',
                        disabled: false,
                        page: 'CustomProductType'
                    }, {
                        id: '030402',
                        name: '节点类型',
                        disabled: false,
                        page: 'CustomNodeType'
                    }, {
                        id: '030403',
                        name: '业务类型',
                        disabled: false,
                        page: 'CustomBusinessType'
                    }, {
                        id: '030404',
                        name: '文档类型',
                        disabled: false,
                        page: 'CustomDocumentType'
                    }
                ]
            }
        ]
    }
]
