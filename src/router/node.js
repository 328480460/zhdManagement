import NodeInfo from "@/components/node/NodeInfo";
import BatchImportNode from "@/components/node/BatchImportNode";
import HistoriesNode from "@/components/node/HistoriesNode";
import NewNode from "@/components/node/NewNode";
import NodeDetails from "@/components/node/NodeDetails";

export default [
  {
    //节点-节点管理
    path: "node/nodeInfo",
    component: NodeInfo,
    name: "nodeInfo",
    meta: {
      pageInfo: {
        page: "nodeInfo",
        node: "node",
        name: "节点管理",
        id: "020101"
      }
    }
  },
  //节点-添加节点
  {
    path: "node/newNode",
    component: NewNode,
    name: "newNode",
    meta: {
      pageInfo: {
        page: "newNode",
        node: "node",
        name: "添加节点",
        id: "02010101"
      }
    }
  },
  //节点-节点详情
  {
    path: "node/nodeDetails",
    component: NodeDetails,
    name: "nodeDetails",
    meta: {
      pageInfo: {
        page: "nodeDetails",
        node: "node",
        name: "节点详情",
        id: "02010102"
      }
    }
  },
  //节点-批量导入
  {
    path: "node/batchImportNode",
    component: BatchImportNode,
    name: "batchImportNode",
    meta: {
      pageInfo: {
        page: "batchImportNode",
        node: "node",
        name: "批量导入",
        id: "020201"
      }
    }
  },
  //节点-历史记录
  {
    path: "node/historiesNode",
    component: HistoriesNode,
    name: "historiesNode",
    meta: {
      pageInfo: {
        page: "historiesNode",
        node: "node",
        name: "批量导入",
        id: "020202"
      }
    }
  }
];
