import ProductInfo from '@/components/production/ProductInfo'
import EditProduct from '@/components/production/EditProduct'
import ProductType from '@/components/production/ProductType'
import BatchImportPro from '@/components/production/BatchImportPro'
import HistoriesPro from '@/components/production/HistoriesPro'
import ProductTemplate from '@/components/production/ProductTemplate'
import MetarialManagement from '@/components/production/MetarialManagement'
import NewProduct from '@/components/commonComponents/NewProduct'

export default[
    { //产品-产品分类
        path : 'production/productType',
        component : ProductType
    },
    //产品-产品信息
    {
        path : 'production/productInfo',
        component : ProductInfo
    },
    //产品-新建产品
    {
        path : 'production/newProduct',
        component : NewProduct
    },
    //产品-编辑产品
    {
        path : 'production/editProduct',
        component : EditProduct
    },
    //产品-批量导入
    {
        path : 'production/batchImportPro',
        component : BatchImportPro
    },
    //产品-历史记录
    {
        path : 'production/HistoriesPro',
        component : HistoriesPro
    },
    //产品-产品模板页
    {
        path : 'production/productTemplate',
        component : ProductTemplate
    },
    //产品-素材管理
    {
        path : 'production/metarialManagement',
        component : MetarialManagement
    }
]