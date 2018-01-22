import Welcome from '@/components/welcome/Welcome'

export default[
    { //概述-欢迎页面
        path : 'welcome/welcome',
        component : Welcome,
        name : 'welcome',
        meta : {
            pageInfo: {
                page: "welcome",
                node: 'welcome',
                name: "概述",
                id: "080101"
            }
        }
    }
]