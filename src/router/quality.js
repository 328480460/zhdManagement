import QualityAdministration from '@/components/quality/QualityAdministration'
import RecallAdministration from '@/components/quality/RecallAdministration'

export default[
  {
    //质量-质量问题管理
    path: "quality/qualityAdministration",
    component: QualityAdministration,
    name: "qualityAdministration",
    meta: {
      pageInfo: {
        page: "qualityAdministration",
        node: "quality",
        name: "质量问题",
        id: "060101"
      }
    }
  },
  {
    //质量-召回管理
    path: "quality/recallAdministration",
    component: RecallAdministration,
    name: "recallAdministration",
    meta: {
      pageInfo: {
        page: "recallAdministration",
        node: "quality",
        name: "召回管理",
        id: "060201"
      }
    }
  },
]
