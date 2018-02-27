import {ajaxPost,ajaxGet} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST,ENVIRNMENTTEST2} from '../config/environment.js';

// 企业详情查询
export const  getEnterpriseDetail  = function(params) {
    let url = ENVIRNMENTTEST + '/getEnterpriseDetail';
    return ajaxPost(url,params)
}
// 企业信息修改
export const  updateEnterprise  = function(params) {
    let url = ENVIRNMENTTEST + '/updateEnterprise';
    return ajaxPost(url,params)
}
// 员工详情查询
export const  getEmployeeDetail  = function(params) {
    let url = ENVIRNMENTTEST + '/getEmployeeDetail';
    return ajaxPost(url,params)
}
// 员工详情修改
export const  updateEmployee  = function(params) {
    let url = ENVIRNMENTTEST + '/updateEmployee';
    return ajaxPost(url,params)
}
// 员工详情修改
export const  deleteEmployee  = function(params) {
    let url = ENVIRNMENTTEST + '/deleteEmployee';
    return ajaxPost(url,params)
}
// 员工信息列表查询
export const  getEmployeeList  = function(params) {
    let url = ENVIRNMENTTEST + '/getEmployeeList';
    return ajaxPost(url,params)
}
// 员工信息新增
export const  saveEmployee  = function(params) {
    let url = ENVIRNMENTTEST + '/saveEmployee';
    return ajaxPost(url,params)
}

// 角色列表查询
export const  getListRole  = function(params) {
    let url = ENVIRNMENTTEST2 + '/Role/getListRole';
    return ajaxPost(url,params)
}
// 角色新增
export const  createRole  = function(params) {
    let url = ENVIRNMENTTEST2 + 'Role/createRole';
    return ajaxPost(url,params)
}
// 角色删除
export const  deleteRole  = function(params) {
    let url = ENVIRNMENTTEST2 + 'Role/deleteRole';
    return ajaxPost(url,params)
}
// 角色修改
export const  updateRole  = function(params) {
    let url = ENVIRNMENTTEST2 + 'Role/updateRole';
    return ajaxPost(url,params)
}
// 角色详情查询
export const  getDetailRole  = function(params) {
    let url = ENVIRNMENTTEST2 + 'ole/getDetailRole';
    return ajaxPost(url,params)
}

// 节点列表查询接口
export const getListNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/getListNode';
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

