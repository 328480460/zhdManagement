import {ajaxPost} from '../api/api.js';

// 收货信息列表查询接口
export const getReceiptList = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptList';
  return ajaxPost(url, params)
}
// 收货信息详情接口
export const getReceiptDetail = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptDetail';
  return ajaxPost(url, params)
}
// 收货信息新增接口
export const saveReceipt = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/saveReceipt';
  return ajaxPost(url, params)
}
// 收货信息删除接口
export const deleteReceipt = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/deleteReceipt';
  return ajaxPost(url, params)
}
// 收货信息修改接口
export const updateReceipt = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/updateReceipt';
  return ajaxPost(url, params)
}
// 生产信息列表查询接口
export const getListProduction = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/getListProduction';
  return ajaxPost(url, params)
}
// 生产信息详情接口
export const getDetailProduction = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/getDetailProduction';
  return ajaxPost(url, params)
}
// 生产信息新增接口
export const createProduction = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/createProduction';
  return ajaxPost(url, params)
}
// 生产信息列表删除接口
export const deleteProduction = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/deleteProduction';
  return ajaxPost(url, params)
}
// 生产信息修改接口
export const updateProduction = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/updateProduction';
  return ajaxPost(url, params)
}
// 发货信息列表查询接口
export const getInvoiceList = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getInvoiceList';
  return ajaxPost(url, params)
}
// 发货信息详情接口
export const getInvoiceDetail = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getInvoiceDetail';
  return ajaxPost(url, params)
}
// 发货信息新增接口
export const saveInvoice = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/saveInvoice';
  return ajaxPost(url, params)
}
// 发货信息删除接口
export const deleteInvoice = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/deleteInvoice';
  return ajaxPost(url, params)
}
// 发货信息修改接口
export const updateInvoice = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/updateInvoice';
  return ajaxPost(url, params)
}
// 产品列表查询接口
export const getProductList = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getProductList';
  return ajaxPost(url, params)
}
// 节点列表查询接口
export const getListNode = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/getListNode';
  return ajaxPost(url, params)
}

// 用户自定义属性接口
export const getCustomAttributeList = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getCustomAttributeList';
  return ajaxPost(url, params)
}
// 用户自定义属性详情接口
export const getCustomAttributeDetail = function (params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getCustomAttributeDetail';
  return ajaxPost(url, params)
}