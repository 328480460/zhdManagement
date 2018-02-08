import ChainSynthesis from '@/components/trace/ChainSynthesis'
import TraceCodeApplay from '@/components/trace/TraceCodeApplay'
import TraceCodeQuery from '@/components/trace/TraceCodeQuery'

export default[
    { //追溯-链条合成
      path : 'trace/chainSynthesis',
      component : ChainSynthesis,
      name: 'chainSynthesis',
      meta: {
        pageInfo: {
          page: "chainSynthesis",
          node: 'trace',
          name: "链条合成",
          id: "040101"
        }
      }
    },
    { //追溯-溯源查询
      path : 'trace/traceCodeQuery',
      component : TraceCodeQuery,
      name: 'traceCodeQuery',
      meta: {
        pageInfo: {
          page: "traceCodeQuery",
          node: 'trace',
          name: "溯源查询",
          id: "040201"
        }
      }
    },
    { //追溯-追溯码管理
      path : 'trace/traceCodeApplay',
      component : TraceCodeApplay,
      name: 'traceCodeApplay',
      meta: {
        pageInfo: {
          page: "traceCodeApplay",
          node: 'trace',
          name: "追溯码管理",
          id: "040301"
        }
      }
    },
]
