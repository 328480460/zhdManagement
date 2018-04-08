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
        id:"b660d0a9-e94c-542a-ab5c-8ff56aa0cf61"
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
        id:"f0869847-ff06-44b4-b3bf-bee23f17decd"
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
        id:"0308fb0c-9581-4d29-9ab8-3c211eae9068"
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
        id:"23fa58a2-cb03-5c9f-a7c5-8f6bdb103f30"
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
        name: "历史记录",
        id:"fc9a2562-61f3-489a-b754-acc4ea21006d"
      }
    }
  }
];
