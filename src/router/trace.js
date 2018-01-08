import ChainSynthesis from '@/components/trace/ChainSynthesis'
import TraceCodeApplay from '@/components/trace/TraceCodeApplay'
import TraceCodeQuery from '@/components/trace/TraceCodeQuery'

export default[
    { //追溯-链条合成
        path : 'trace/chainSynthesis', component : ChainSynthesis
    },
    //追溯-溯源查询
    {
    path : 'trace/traceCodeQuery', component : TraceCodeQuery
    },
    //追溯-追溯码管理
    {
    path : 'trace/traceCodeApplay', component : TraceCodeApplay
    }
]