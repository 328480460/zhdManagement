import FTPSync from '@/components/business/FTPSync'
import GetGoodsInfo from '@/components/business/GetGoodsInfo'
import MultiImport from '@/components/business/MultiImport'
import ProductGoodsInfo from '@/components/business/ProductGoodsInfo'
import SendGoodsInfo from '@/components/business/SendGoodsInfo'
import SystemInsert from '@/components/business/SystemInsert'
import ImportHistoryBusiness from '@/components/business/ImportHistoryBusiness'
import FTPHistoryBusiness from '@/components/business/FTPHistoryBusiness'
import NewGetGoodsInfo from '@/components/business/NewGetGoodsInfo'
import GetGoodsInfoDetail from '@/components/business/GetGoodsInfoDetail'
import EditGetGoodsInfoDetail from '@/components/business/EditGetGoodsInfoDetail'
import NewProductGoodsInfo from '@/components/business/NewProductGoodsInfo'
import ProductGoodsInfoDetail from '@/components/business/ProductGoodsInfoDetail'
import EditProductGoodsInfoDetail from '@/components/business/EditProductGoodsInfoDetail'
import NewSendGoodsInfo from '../components/business/NewSendGoodsInfo'
import EditSendGoodsInfoDetail from '../components/business/EditSendGoodsInfoDetail'
import SendGoodsInfoDetail from '../components/business/SendGoodsInfoDetail'

export default[
    { //业务-收货信息-收货信息
        path : 'business/getGoodsInfo',
        component : GetGoodsInfo,
        name: 'getGoodsInfo',
        meta: {
            pageInfo: {
                page: "getGoodsInfo",
                node: 'business',
                name: "收货信息",
                id: "050101"
            }
        }
    },
    { //业务-收货信息-新建收货信息
        path : 'business/newGetGoodsInfo',
        component : NewGetGoodsInfo,
        name: 'newGetGoodsInfo',
        meta: {
            pageInfo: {
                page: "newGetGoodsInfo",
                node: 'business',
                name: "新建收货信息",
                id: "05010101"
            }
        }
    },
    { //业务-收货信息-收货信息详情
        path : 'business/getGoodsInfoDetail',
        component : GetGoodsInfoDetail,
        name: 'getGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "getGoodsInfoDetail",
                node: 'business',
                name: "收货信息详情",
                id: "05010102"
            }
        }
    },
    { //业务-收货信息-编辑收货信息详情
        path : 'business/editGetGoodsInfoDetail',
        component : EditGetGoodsInfoDetail,
        name: 'editGetGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "editGetGoodsInfoDetail",
                node: 'business',
                name: "编辑收货信息",
                id: "05010103"
            }
        }
    },
    //业务-生产信息-生产信息
    {
        path : 'business/productGoodsInfo',
        component : ProductGoodsInfo,
        name: 'productGoodsInfo',
        meta: {
            pageInfo: {
                page: "productGoodsInfo",
                node: 'business',
                name: "生产信息",
                id: "050201"
            }
        }
    },
    //业务-生产信息-新建生产信息
    {
        path : 'business/newProductGoodsInfo',
        component : NewProductGoodsInfo,
        name: 'newProductGoodsInfo',
        meta: {
            pageInfo: {
                page: "newProductGoodsInfo",
                node: 'business',
                name: "新建生产信息",
                id: "05020101"
            }
        }
    },
    //业务-生产信息-生产信息详情
    {
        path : 'business/productGoodsInfoDetail',
        component : ProductGoodsInfoDetail,
        name: 'productGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "productGoodsInfoDetail",
                node: 'business',
                name: "生产信息详情",
                id: "05020102"
            }
        }
    },
    //业务-生产信息-编辑生产信息
    {
        path : 'business/editProductGoodsInfoDetail',
        component : EditProductGoodsInfoDetail,
        name: 'editProductGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "editProductGoodsInfoDetail",
                node: 'business',
                name: "编辑生产信息",
                id: "05020103"
            }
        }
    },
    //业务-发货信息-发货信息
    {
        path : 'business/sendGoodsInfo',
        component : SendGoodsInfo,
        name: 'sendGoodsInfo',
        meta: {
            pageInfo: {
                page: "sendGoodsInfo",
                node: 'business',
                name: "发货信息",
                id: "050301"
            }
        }
    },
     //业务-发货信息-新建发货信息
     {
        path : 'business/newSendGoodsInfo',
        component : NewSendGoodsInfo,
        name: 'newSendGoodsInfo',
        meta: {
            pageInfo: {
                page: "newSendGoodsInfo",
                node: 'business',
                name: "新建发货信息",
                id: "05030101"
            }
        }
    },
     //业务-发货信息-发货信息详情
     {
        path : 'business/sendGoodsInfoDetail',
        component : SendGoodsInfoDetail,
        name: 'sendGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "sendGoodsInfoDetail",
                node: 'business',
                name: "发货信息详情",
                id: "05030102"
            }
        }
    },
     //业务-发货信息-编辑发货信息
     {
        path : 'business/editSendGoodsInfoDetail',
        component : EditSendGoodsInfoDetail,
        name: 'editSendGoodsInfoDetail',
        meta: {
            pageInfo: {
                page: "editSendGoodsInfoDetail",
                node: 'business',
                name: "编辑发货信息",
                id: "05030103"
            }
        }
    },
    //业务-批量导入-批量导入
    {
        path : 'business/multiImport',
        component : MultiImport,
        name: 'multiImport',
        meta: {
            pageInfo: {
                page: "multiImport",
                node: 'business',
                name: "批量导入",
                id: "050401"
            }
        }
    },
    //业务-批量导入-历史记录
    {
        path : 'business/importHistoryBusiness',
        component : ImportHistoryBusiness,
        name: 'importHistoryBusiness',
        meta: {
            pageInfo: {
                page: "importHistoryBusiness",
                node: 'business',
                name: "历史记录",
                id: "050402"
            }
        }
    },
    //业务-FTP同步-FTP配置
    {
        path : 'business/FTPSync',
        component : FTPSync,
        name: 'FTPSync',
        meta: {
            pageInfo: {
                page: "FTPSync",
                node: 'business',
                name: "FTP配置",
                id: "050501"
            }
        }
    },
    //业务-FTP同步-历史记录
    {
        path : 'business/FTPHistoryBusiness',
        component : FTPHistoryBusiness,
        name: 'FTPHistoryBusiness',
        meta: {
            pageInfo: {
                page: "FTPHistoryBusiness",
                node: 'business',
                name: "历史记录",
                id: "050502"
            }
        }
    },
    //业务-系统对接-系统对接
    {
        path : 'business/systemInsert',
        component : SystemInsert,
        name: 'systemInsert',
        meta: {
            pageInfo: {
                page: "systemInsert",
                node: 'business',
                name: "系统对接",
                id: "050601"
            }
        }
    }
]