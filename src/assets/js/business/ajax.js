import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT} from '../config/environment.js'

// 收货信息列表查询接口
export const getReceiptList = function (params) {
  let url = ENVIRNMENT + '/getReceiptList';
  return ajaxPost(url, params)
}
// 收货信息详情接口
export const getReceiptDetail = function (params) {
  let url = ENVIRNMENT + '/getReceiptDetail';
  return ajaxPost(url, params)
}
// 收货信息新增接口
export const saveReceipt = function (params) {
  let url = ENVIRNMENT + '/saveReceipt';
  return ajaxPost(url, params)
}
// 收货信息删除接口
export const deleteReceipt = function (params) {
  let url = ENVIRNMENT + '/deleteReceipt';
  return ajaxPost(url, params)
}
// 收货信息修改接口
export const updateReceipt = function (params) {
  let url = ENVIRNMENT + '/updateReceipt';
  return ajaxPost(url, params)
}
// 生产信息列表查询接口
export const getListProduction = function (params) {
  let url = ENVIRNMENT + '/Production/getListProduction';
  return ajaxPost(url, params)
}
// 生产信息详情接口
export const getDetailProduction = function (params) {
  let url = ENVIRNMENT + '/Production/getDetailProduction';
  return ajaxPost(url, params)
}
// 生产信息新增接口
export const createProduction = function (params) {
  let url = ENVIRNMENT + '/Production/createProduction';
  return ajaxPost(url, params)
}
// 生产信息列表删除接口
export const deleteProduction = function (params) {
  let url = ENVIRNMENT + '/Production/deleteProduction';
  return ajaxPost(url, params)
}
// 生产信息修改接口
export const updateProduction = function (params) {
  let url = ENVIRNMENT + '/Production/updateProduction';
  return ajaxPost(url, params)
}
// 发货信息列表查询接口
export const getInvoiceList = function (params) {
  let url = ENVIRNMENT + '/getInvoiceList';
  return ajaxPost(url, params)
}
// 发货信息详情接口
export const getInvoiceDetail = function (params) {
  let url = ENVIRNMENT + '/getInvoiceDetail';
  return ajaxPost(url, params)
}
// 发货信息新增接口
export const saveInvoice = function (params) {
  let url = ENVIRNMENT + '/saveInvoice';
  return ajaxPost(url, params)
}
// 发货信息删除接口
export const deleteInvoice = function (params) {
  let url = ENVIRNMENT + '/deleteInvoice';
  return ajaxPost(url, params)
}
// 发货信息修改接口
export const updateInvoice = function (params) {
  let url = ENVIRNMENT + '/updateInvoice';
  return ajaxPost(url, params)
}
// 产品列表查询接口
export const getProductList = function (params) {
  let url = ENVIRNMENT + '/getProductList';
  return ajaxPost(url, params)
}
// 节点列表查询接口
export const getListNode = function (params) {
  let url = ENVIRNMENT + '/Node/getListNode';
  return ajaxPost(url, params)
}

// 用户自定义属性接口
export const getCustomAttributeList = function (params) {
  let url = ENVIRNMENT + '/getCustomAttributeList';
  return ajaxPost(url, params)
}
// 用户自定义属性详情接口
export const getCustomAttributeDetail = function (params) {
  let url = ENVIRNMENT + '/getCustomAttributeDetail';
  return ajaxPost(url, params)
}