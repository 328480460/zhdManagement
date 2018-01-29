import {ajaxPost,ajaxGet} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST} from '../config/environment.js';

// 企业详情查询
export const  getEnterpriseDetail  = function(params) {
    let url = ENVIRNMENT + '/getEnterpriseDetail';
    return ajaxPost(url,params)
}
// 企业信息修改
export const  updateEnterprise  = function(params) {
    let url = ENVIRNMENT + '/updateEnterprise';
    return ajaxPost(url,params)
}
// 员工详情查询
export const  getEmployeeDetail  = function(params) {
    let url = ENVIRNMENT + '/getEmployeeDetail';
    return ajaxPost(url,params)
}
// 员工详情修改
export const  updateEmployee  = function(params) {
    let url = ENVIRNMENT + '/updateEmployee';
    return ajaxPost(url,params)
}
// 员工信息列表查询
export const  getEmployeeList  = function(params) {
    let url = ENVIRNMENT + '/getEmployeeList';
    return ajaxPost(url,params)
}
// 员工信息新增
export const  saveEmployee  = function(params) {
    let url = ENVIRNMENT + '/saveEmployee';
    return ajaxPost(url,params)
}
// 角色列表查询
export const  getListRole  = function(params) {
    let url = ENVIRNMENT + '/Role/getListRole';
    return ajaxPost(url,params)
}
// 节点列表查询接口
export const getListNode = function(params) {
  let url = ENVIRNMENT + '/Node/getListNode';
  return ajaxPost(url,params)
}
/**
 * 自定义属性管理
 */
// 自定义字段信息查询
export const getColumnInfo = function(params) {
  let url = ENVIRNMENT + '/getColumnInfo';
  return ajaxPost(url,params)
}
// 自定义属性修改
export const updateCustomAttribute = function(params) {
  let url = ENVIRNMENT + '/updateCustomAttribute';
  return ajaxPost(url,params)
}
// 自定义属性关联查询
export const getAttributeRelationState = function(params) {
  let url = ENVIRNMENT + '/getAttributeRelationState';
  return ajaxPost(url,params)
}
// 自定义属性列表查询
export const getCustomAttributeList = function(params) {
  let url = ENVIRNMENTTEST + '/getCustomAttributeList';
  return ajaxPost(url,params)
}
// 自定义属性新增
export const saveCustomAttributes = function(params) {
  let url = ENVIRNMENTTEST + '/saveCustomAttributes';
  return ajaxPost(url,params)
}
// 自定义属性删除
export const deleteCustomAttribute = function(params) {
  let url = ENVIRNMENTTEST + '/deleteCustomAttribute';
  return ajaxPost(url,params)
}
// 自定义属性详情
export const  getCustomAttributeDetail = function(params) {
  let url = ENVIRNMENT + '/getCustomAttributeDetail';
  return ajaxGet(url,params)
}

