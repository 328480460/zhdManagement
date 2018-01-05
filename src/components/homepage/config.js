export const menu = [
    {
        id: '01',
        name: '产品',
        icon: 'el-icon-menu',
        disabled: false,
        node: 'production',
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
                        page: 'productInfo'
                    }, {
                        id: '010102',
                        name: '产品分类',
                        disabled: false,
                        page: 'productType'
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
                        page: 'CPFL'
                    }
                ]
            }
        ]
    }, {
        id: '02',
        name: '节点',
        icon: 'el-icon-menu',
        disabled: false,
        node: 'node',
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
                        page: 'nodeInfo'
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
                        page: 'nodeInfo'
                    }, {
                        id: '020202',
                        name: '历史记录',
                        disabled: false,
                        page: 'productInfo'
                    }
                ]
            }
        ]
    }, {
        id: '03',
        name: '设置',
        icon: 'el-icon-menu',
        disabled: false,
        node: 'settings',
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
                        page: 'enterpriseInfo'
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
                        page: 'accountSetting'
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
                        page: 'staffManagement'
                    }, {
                        id: '030302',
                        name: '角色权限',
                        disabled: false,
                        page: 'rolePermission'
                    }, {
                        id: '030303',
                        name: '待定邀请',
                        disabled: false,
                        page: 'invitation'
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
                        page: 'customProductType'
                    }, {
                        id: '030402',
                        name: '节点类型',
                        disabled: false,
                        page: 'customNodeType'
                    }, {
                        id: '030403',
                        name: '业务类型',
                        disabled: false,
                        page: 'customBusinessType'
                    }, {
                        id: '030404',
                        name: '文档类型',
                        disabled: false,
                        page: 'customDocumentType'
                    }
                ]
            }
        ]
    }, {
        id: '04',
        name: '追溯',
        icon: 'el-icon-menu',
        disabled: false,
        node: 'trace',
        children: [{
            id: '0401',
            name: '链条合成',
            disabled: false,
            children: [{
                id: '040101',
                name: '链条合成',
                disabled: false,
                page: 'productInfo'
            }]
        },{
            id: '0402',
            name: '溯源查询',
            disabled: false,
            children: [{
                id: '040201',
                name: '溯源查询',
                disabled: false,
                page: 'productInfo'
            }]
        },{
            id: '0403',
            name: '溯源码申请',
            disabled: false,
            children: [{
                id: '040301',
                name: '溯源码申请',
                disabled: false,
                page: 'productInfo'
            }]
        },]
    }
]
