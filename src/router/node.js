import NodeInfo from '@/components/node/NodeInfo'
import BatchImportNode from '@/components/node/BatchImportNode'
import HistoriesNode from '@/components/node/HistoriesNode'

export default[
    { //节点-节点管理
        path : 'node/nodeInfo',
        component : NodeInfo
    },
    //节点-批量导入
    {
        path : 'node/batchImportNode',
        component : BatchImportNode
    },
    //节点-历史记录
    {
        path : 'node/historiesNode',
        component : HistoriesNode
    }
]