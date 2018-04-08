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
                id: "a8388dc2-79e6-4719-bc2d-1d24d57a2326"
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
                id:"f8c274b2-897d-48f3-99de-27ff9c392540"
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
                id:"697a81d9-7bc0-4856-acd4-81f35ef460e8"
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
                id:"9b4cacda-a034-44e1-a69c-f7d73c2ffdeb"
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
                id:"48a8168b-6ebb-4913-ba42-106c8b6d2e6b"
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
                id:"08536a73-52ca-4fa0-b487-0df764c00a7d"
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
                id: "cc50267a-9083-483b-93f8-de7ada2d0104"
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
                id: "f81e2b29-dd3e-4897-86ea-a7cc41ee230b"
            }
        }
    }
]
