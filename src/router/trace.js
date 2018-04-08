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
          id:"7b9e89b5-cd0e-57a3-a2d7-82bb03544239"
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
          id:"0be7169e-0398-5fca-b051-9ec5cc9aba8f"
        }
      }
    },
    { //追溯-申请溯源码
      path : 'trace/traceCodeApplay',
      component : TraceCodeApplay,
      name: 'traceCodeApplay',
      meta: {
        pageInfo: {
          page: "traceCodeApplay",
          node: 'trace',
          name: "申请溯源码",
          id:"9fa24960-bed2-4b95-8894-986e533d0829"
        }
      }
    },
]
