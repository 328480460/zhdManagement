import ProductInfo from '@/components/production/ProductInfo'
import EditProduct from '@/components/production/EditProduct'
import ProductType from '@/components/production/ProductType'
import BatchImportPro from '@/components/production/BatchImportPro'
import HistoriesPro from '@/components/production/HistoriesPro'
import ProductTemplate from '@/components/production/ProductTemplate'
import MetarialManagement from '@/components/production/MetarialManagement'
import NewProduct from '@/components/production/NewProduct'

export default[
    //产品-产品信息-产品信息
    {
        path : 'production/productInfo',
        component : ProductInfo,
        name: 'productInfo',
        meta: {
            pageInfo: {
                page: "productInfo",
                node: 'production',
                name: "产品信息",
                id: "010101"
            }
        }
    },
    { //产品-产品信息-产品分类
        path : 'production/productType',
        component : ProductType,
        name: 'productType',
        meta: {
            pageInfo: {
                page: "productType",
                node: 'production',
                name: "产品分类",
                id: "010102"
            }
        }
    },
    //产品-产品信息-新增产品
    {
        path : 'production/newProduct',
        component : NewProduct,
        name: 'newProduct',
        meta: {
            pageInfo: {
                page: "newProduct",
                node: 'production',
                name: "新增产品",
                id: "01010101"
            }
        }
    },
    //产品-产品信息-编辑产品
    {
        path : 'production/editProduct',
        component : EditProduct,
        name: 'editProduct',
        meta: {
            pageInfo: {
                page: "editProduct",
                node: 'production',
                name: "编辑产品",
                id: "01010102"
            }
        }
    },
    //产品-批量导入-批量导入
    {
        path : 'production/batchImportPro',
        component : BatchImportPro,
        name: 'batchImportPro',
        meta: {
            pageInfo: {
                page: "batchImportPro",
                node: 'production',
                name: "批量导入",
                id: "010201"
            }
        }
    },
    //产品-批量导入-历史记录
    {
        path : 'production/historiesPro',
        component : HistoriesPro,
        name: 'historiesPro',
        meta: {
            pageInfo: {
                page: "historiesPro",
                node: 'production',
                name: "历史记录",
                id: "010202"
            }
        }
    },
    //产品-产品模板页-产品模板页
    {
        path : 'production/productTemplate',
        component : ProductTemplate,
        name: 'productTemplate',
        meta: {
            pageInfo: {
                page: "productTemplate",
                node: 'production',
                name: "产品模板页",
                id: "010301"
            }
        }
    },
    //产品-产品模板页-素材管理
    {
        path : 'production/metarialManagement',
        component : MetarialManagement,
        name: 'metarialManagement',
        meta: {
            pageInfo: {
                page: "metarialManagement",
                node: 'production',
                name: "历史记录",
                id: "010302"
            }
        }
    }
]
