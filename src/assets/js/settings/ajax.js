import {ajaxPost} from '../api/api.js';

// 企业详情查询
export const  getEnterpriseDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getEnterpriseDetail';
    return ajaxPost(url,params)
}
// 企业信息修改
export const  updateEnterprise  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/updateEnterprise';
    return ajaxPost(url,params)
}
// 员工详情查询
export const  getEmployeeDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getEmployeeDetail';
    return ajaxPost(url,params)
}
// 员工详情修改
export const  updateEmployee  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/updateEmployee';
    return ajaxPost(url,params)
}
