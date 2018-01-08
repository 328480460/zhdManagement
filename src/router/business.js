import FTPSync from '@/components/business/FTPSync'
import GetGoodsInfo from '@/components/business/GetGoodsInfo'
import MultiImport from '@/components/business/MultiImport'
import ProductGoodsInfo from '@/components/business/ProductGoodsInfo'
import SendGoodsInfo from '@/components/business/SendGoodsInfo'
import SystemInsert from '@/components/business/SystemInsert'
import ImportHistoryBusiness from '@/components/business/ImportHistoryBusiness'
import FTPHistoryBusiness from '@/components/business/FTPHistoryBusiness'
import NewGetGoodsInfo from '../components/business/NewGetGoodsInfo'
import GetGoodsInfoDetail from '../components/business/GetGoodsInfoDetail'
import EditGetGoodsInfoDetail from '../components/business/EditGetGoodsInfoDetail'

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
    //业务-发货信息
    {
        path : 'business/sendGoodsInfo',
        component : SendGoodsInfo
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