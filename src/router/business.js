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
    { //业务-收货信息
        path : 'business/getGoodsInfo',
        component : GetGoodsInfo
    },
    { //业务-收货信息-新建收货信息
        path : 'business/newGetGoodsInfo',
        component : NewGetGoodsInfo
    },
    { //业务-收货信息-收货信息详情
        path : 'business/getGoodsInfoDetail',
        component : GetGoodsInfoDetail
    },
    { //业务-收货信息-编辑收货信息详情
        path : 'business/editGetGoodsInfoDetail',
        component : EditGetGoodsInfoDetail
    },
    //业务-生产信息
    {
        path : 'business/productGoodsInfo',
        component : ProductGoodsInfo
    },
    //业务-生产信息-新建生产信息
    {
        path : 'business/newProductGoodsInfo',
        component : NewProductGoodsInfo
    },
    //业务-生产信息-生产信息详情
    {
        path : 'business/productGoodsInfoDetail',
        component : ProductGoodsInfoDetail
    },
    //业务-生产信息-编辑生产信息
    {
        path : 'business/editProductGoodsInfoDetail',
        component : EditProductGoodsInfoDetail
    },
    //业务-发货信息
    {
        path : 'business/sendGoodsInfo',
        component : SendGoodsInfo
    },
     //业务-发货信息-新建发货信息
     {
        path : 'business/newSendGoodsInfo',
        component : NewSendGoodsInfo
    },
     //业务-发货信息-发货信息详情
     {
        path : 'business/sendGoodsInfoDetail',
        component : SendGoodsInfoDetail
    },
     //业务-发货信息-编辑发货信息
     {
        path : 'business/editSendGoodsInfoDetail',
        component : EditSendGoodsInfoDetail
    },
    //业务-批量导入-批量导入
    {
        path : 'business/multiImport',
        component : MultiImport
    },
    //业务-批量导入-历史记录
    {
        path : 'business/importHistoryBusiness',
        component : ImportHistoryBusiness
    },
    //业务-FTP同步-FTP配置
    {
        path : 'business/FTPSync',
        component : FTPSync
    },
    //业务-FTP同步-历史记录
    {
        path : 'business/FTPHistoryBusiness',
        component : FTPHistoryBusiness
    },
    //业务-系统对接
    {
        path : 'business/systemInsert',
        component : SystemInsert
    }
]