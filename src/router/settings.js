import EnterpriseInfo from '@/components/settings/EnterpriseInfo'
import AccountSetting from '@/components/settings/AccountSetting'
import StaffManagement from '@/components/settings/StaffManagement'
import RolePermission from '@/components/settings/RolePermission'
import Invitation from '@/components/settings/Invitation'
import CustomProductType from '@/components/settings/CustomProductType'
import CustomNodeType from '@/components/settings/CustomNodeType'
import CustomBusinessType from '@/components/settings/CustomBusinessType'
import CustomDocumentType from '@/components/settings/CustomDocumentType'

export default[
    { //设置-企业信息
        path : 'settings/enterpriseInfo', component : EnterpriseInfo
    },
    //设置-账号信息
    {
    path : 'settings/accountSetting', component : AccountSetting
    },
    //设置-员工设置-员工管理
    {
    path : 'settings/staffManagement', component : StaffManagement
    },
    //设置-员工设置-角色权限
    {
    path : 'settings/rolePermission', component : RolePermission
    },
    //设置-员工设置-待定邀请
    {
    path : 'settings/invitation', component : Invitation
    },
    //设置-自定义属性-产品类型
    {
    path : 'settings/customProductType', component : CustomProductType
    },
    //设置-自定义属性-节点类型
    {
    path : 'settings/customNodeType', component : CustomNodeType
    },
    //设置-自定义属性-业务类型
    {
    path : 'settings/customBusinessType', component : CustomBusinessType
    },
    //设置-自定义属性-文档类型
    {
    path : 'settings/customDocumentType', component : CustomDocumentType
    }
]