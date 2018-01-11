import NodeInfo from '@/components/node/NodeInfo'
import BatchImportNode from '@/components/node/BatchImportNode'
import HistoriesNode from '@/components/node/HistoriesNode'
import NewNode from '@/components/node/NewNode'
import NodeDetails from '@/components/node/NodeDetails'

export default[
    { //节点-节点管理
        path : 'node/nodeInfo',
        component : NodeInfo
    },
    //节点-添加节点
    {
      path : 'node/newNode',
      component : NewNode
    },
    //节点-节点详情
    {
      path : 'node/nodeDetails',
      component :NodeDetails
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
