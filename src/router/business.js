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
                id:"7872662a-3097-4d0e-8d54-cd88f095ff96"
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
                id:"5fdec987-991e-440c-9dda-51c8ec953236"
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
                id:"97728609-9717-48d9-92ff-1d7bcc48dfa2"
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
                id:'97728609-9717-48d9-92ff-1d7bcc48dfa2'
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
                id:"6124d127-1342-4e4d-8b79-c2b2a9846605"
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
                id:"a5c6039e-d90d-40a3-9b63-612816d1f05a"
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
                id:"3fb06e18-2a47-489e-ba4f-22bbe1e9c980"
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
                id:'3fb06e18-2a47-489e-ba4f-22bbe1e9c980'
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
                id:"1fca8fb3-3009-463f-8957-28d6aa7492d1"
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
                id:"fdae82e8-0904-4adb-9d7f-63cf8f65e60d"
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
                id:"98cbed70-68b2-4a91-959b-7124c7714c30"
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
                id:'98cbed70-68b2-4a91-959b-7124c7714c30'
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
                id:"ae9babbf-223a-5bc3-be72-07c1076da2bd"
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
                id:"4d117c31-107e-4981-a728-324d87ee0213"
            }
        }
    },
    //业务-FTP同步-FTP同步
    {
        path : 'business/FTPSync',
        component : FTPSync,
        name: 'FTPSync',
        meta: {
            pageInfo: {
                page: "FTPSync",
                node: 'business',
                name: "FTP同步",
                id:"9c1fe9e6-fcd6-5dab-bbcb-1a6019f7b95c"
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
                id:"3ca8480e-7930-4cc2-93ce-68a9be08b00d"
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
            id:"6beb7533-2d8d-5383-80e9-4315381b94d6"
        }
      }
    },
  
]
