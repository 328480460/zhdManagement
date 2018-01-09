import QualityAdministration from '@/components/quality/QualityAdministration'
import RecallAdministration from '@/components/quality/RecallAdministration'

export default[
    { //质量-质量问题管理
        path : 'quality/qualityAdministration',
        component : QualityAdministration
    },
    //质量-召回管理
    {
        path : 'quality/recallAdministration',
        component : RecallAdministration
    }
]