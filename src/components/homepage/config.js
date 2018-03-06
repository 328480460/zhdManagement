export const menu = [
  {
    id: "00",
    name: "概述",
    icon: "el-icon-menu",
    disabled: false,
    node: "welcome",
    page: "welcome"
  },
  {
    id: "01",
    name: "产品",
    icon: "el-icon-menu",
    disabled: false,
    node: "production",
    children: [
      {
        id: "0101",
        name: "产品信息",
        disabled: false,
        children: [
          {
            id: "010101",
            name: "产品信息",
            disabled: false,
            page: "productInfo"
          },
          {
            id: "010102",
            name: "自定义分类",
            disabled: false,
            page: "productType"
          }
        ]
      },
      {
        id: "0102",
        name: "批量导入",
        disabled: false,
        children: [
          {
            id: "010201",
            name: "批量导入",
            disabled: false,
            page: "batchImportPro"
          },
          {
            id: "010202",
            name: "历史记录",
            disabled: false,
            page: "historiesPro"
          }
        ]
      },
      {
        id: "0103",
        name: "产品页模板",
        disabled: false,
        children: [
          {
            id: "010301",
            name: "产品模板页",
            disabled: false,
            page: "productTemplate"
          },
          {
            id: "010302",
            name: "素材管理",
            disabled: false,
            page: "metarialManagement"
          }
        ]
      }
    ]
  },
  {
    id: "02",
    name: "节点",
    icon: "el-icon-menu",
    disabled: false,
    node: "node",
    children: [
      {
        id: "0201",
        name: "节点管理",
        disabled: false,
        children: [
          {
            id: "020101",
            name: "节点管理",
            disabled: false,
            page: "nodeInfo"
          }
        ]
      },
      {
        id: "0202",
        name: "批量导入",
        disabled: false,
        children: [
          {
            id: "020201",
            name: "批量导入",
            disabled: false,
            page: "batchImportNode"
          },
          {
            id: "020202",
            name: "历史记录",
            disabled: false,
            page: "historiesNode"
          }
        ]
      }
    ]
  },
  {
    id: "03",
    name: "追溯",
    icon: "el-icon-menu",
    disabled: false,
    node: "trace",
    children: [
      {
        id: "0301",
        name: "链条合成",
        disabled: false,
        children: [
          {
            id: "030101",
            name: "链条合成",
            disabled: false,
            page: "chainSynthesis"
          }
        ]
      },
      {
        id: "0302",
        name: "溯源查询",
        disabled: false,
        children: [
          {
            id: "030201",
            name: "溯源查询",
            disabled: false,
            page: "traceCodeQuery"
          }
        ]
      },
      {
        id: "0303",
        name: "溯源码管理",
        disabled: false,
        children: [
          {
            id: "030301",
            name: "溯源码申请",
            disabled: false,
            page: "traceCodeApplay"
          }
        ]
      }
    ]
  },
  {
    id: "04",
    name: "业务",
    icon: "el-icon-menu",
    disabled: false,
    node: "business",
    children: [
      {
        id: "0401",
        name: "收货信息",
        disabled: false,
        children: [
          {
            id: "040101",
            name: "收货信息",
            disabled: false,
            page: "getGoodsInfo"
          }
        ]
      },
      {
        id: "0402",
        name: "生产信息",
        disabled: false,
        children: [
          {
            id: "040201",
            name: "生产信息",
            disabled: false,
            page: "productGoodsInfo"
          }
        ]
      },
      {
        id: "0403",
        name: "发货信息",
        disabled: false,
        children: [
          {
            id: "040301",
            name: "发货信息",
            disabled: false,
            page: "sendGoodsInfo"
          }
        ]
      },
      {
        id: "0404",
        name: "批量导入",
        disabled: false,
        children: [
          {
            id: "040401",
            name: "批量导入",
            disabled: false,
            page: "multiImport"
          },
          {
            id: "040402",
            name: "历史记录",
            disabled: false,
            page: "importHistoryBusiness"
          }
        ]
      },
      {
        id: "0405",
        name: "FTP同步",
        disabled: false,
        children: [
          {
            id: "040501",
            name: "FTP同步",
            disabled: false,
            page: "FTPSync"
          },
          {
            id: "040502",
            name: "历史记录",
            disabled: false,
            page: "FTPHistoryBusiness"
          }
        ]
      },
      {
        id: "0406",
        name: "系统对接",
        disabled: false,
        children: [
          {
            id: "040601",
            name: "系统对接",
            disabled: false,
            page: "systemInsert"
          }
        ]
      }
    ]
  },
  {
    id: "05",
    name: "文档",
    icon: "el-icon-menu",
    disabled: false,
    node: "document",
    children: [
      {
        id: "0501",
        name: "文档管理",
        disabled: false,
        children: [
          {
            id: "050101",
            name: "文档管理",
            disabled: false,
            page: "documentAdministration"
          }
        ]
      }
    ]
  },
  {
    id: "06",
    name: "质量",
    icon: "el-icon-menu",
    disabled: false,
    node: "quality",
    children: [
      {
        id: "0601",
        name: "质量问题管理",
        disabled: false,
        children: [
          {
            id: "060101",
            name: "质量问题管理",
            disabled: false,
            page: "qualityAdministration"
          }
        ]
      },
      {
        id: "0602",
        name: "召回管理",
        disabled: false,
        children: [
          {
            id: "060201",
            name: "召回管理",
            disabled: false,
            page: "recallAdministration"
          }
        ]
      }
    ]
  },
  {
    id: "07",
    name: "设置",
    icon: "el-icon-menu",
    disabled: false,
    node: "settings",
    children: [
      {
        id: "0701",
        name: "企业信息",
        disabled: false,
        children: [
          {
            id: "070101",
            name: "企业信息",
            disabled: false,
            page: "enterpriseInfo"
          }
        ]
      },
      {
        id: "0702",
        name: "账号设置",
        disabled: false,
        children: [
          {
            id: "070201",
            name: "账号信息",
            disabled: false,
            page: "accountSetting"
          }
        ]
      },
      {
        id: "0703",
        name: "员工设置",
        disabled: false,
        children: [
          {
            id: "070301",
            name: "员工管理",
            disabled: false,
            page: "staffManagement"
          },
          {
            id: "070302",
            name: "角色权限",
            disabled: false,
            page: "rolePermission"
          },
          {
            id: "070303",
            name: "待定邀请",
            disabled: false,
            page: "invitation"
          }
        ]
      },
      {
        id: "0704",
        name: "自定义属性",
        disabled: false,
        children: [
          {
            id: "070401",
            name: "产品类型",
            disabled: false,
            page: "customProductType"
          },
          {
            id: "070402",
            name: "节点类型",
            disabled: false,
            page: "customNodeType"
          },
          {
            id: "070403",
            name: "业务类型",
            disabled: false,
            page: "customBusinessType"
          },
          {
            id: "070404",
            name: "文档类型",
            disabled: false,
            page: "customDocumentType"
          },
          {
            id: "070405",
            name: "质量问题",
            disabled: false,
            page: "qualityProblem"
          }
        ]
      }
    ]
  },
];
