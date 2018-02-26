import {ajaxPost,ajaxGet} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST,ENVIRNMENTTEST2} from '../config/environment.js'

// 收货信息列表查询接口
export const getReceiptList = function (params) {
  let url = ENVIRNMENTTEST + '/getReceiptList';
  return ajaxPost(url, params)
}
// 收货信息详情接口
export const getReceiptDetail = function (params) {
  let url = ENVIRNMENTTEST + '/getReceiptDetail';
  return ajaxPost(url, params)
}
// 收货信息新增接口
export const saveReceipt = function (params) {
  let url = ENVIRNMENTTEST + '/saveReceipt';
  return ajaxPost(url, params)
}
// 收货信息删除接口
export const deleteReceipt = function (params) {
  let url = ENVIRNMENTTEST + '/deleteReceipt';
  return ajaxPost(url, params)
}
// 收货信息修改接口
export const updateReceipt = function (params) {
  let url = ENVIRNMENTTEST + '/updateReceipt';
  return ajaxPost(url, params)
}
// 生产信息列表查询接口
export const getListProduction = function (params) {
  let url = ENVIRNMENTTEST2 + '/Production/getListProduction';
  return ajaxPost(url, params)
}
// 生产信息详情接口
export const getDetailProduction = function (params) {
  let url = ENVIRNMENTTEST2 + '/Production/getDetailProduction';
  return ajaxPost(url, params)
}
// 生产信息新增接口
export const createProduction = function (params) {
  let url = ENVIRNMENTTEST2 + '/Production/createProduction';
  return ajaxPost(url, params)
}
// 生产信息列表删除接口
export const deleteProduction = function (params) {
  let url = ENVIRNMENTTEST2 + '/Production/deleteProduction';
  return ajaxPost(url, params)
}
// 生产信息修改接口
export const updateProduction = function (params) {
  let url = ENVIRNMENTTEST2 + '/Production/updateProduction';
  return ajaxPost(url, params)
}
// 发货信息列表查询接口
export const getInvoiceList = function (params) {
  let url = ENVIRNMENTTEST + '/getInvoiceList';
  return ajaxPost(url, params)
}
// 发货信息详情接口
export const getInvoiceDetail = function (params) {
  let url = ENVIRNMENTTEST + '/getInvoiceDetail';
  return ajaxPost(url, params)
}
// 发货信息新增接口
export const saveInvoice = function (params) {
  let url = ENVIRNMENTTEST + '/saveInvoice';
  return ajaxPost(url, params)
}
// 发货信息删除接口
export const deleteInvoice = function (params) {
  let url = ENVIRNMENTTEST + '/deleteInvoice';
  return ajaxPost(url, params)
}
// 发货信息修改接口
export const updateInvoice = function (params) {
  let url = ENVIRNMENTTEST + '/updateInvoice';
  return ajaxPost(url, params)
}

// 产品列表查询接口
export const getProductList = function (params) {
  let url = ENVIRNMENTTEST + '/getProductList';
  return ajaxPost(url, params)
}
// 节点列表查询接口
export const getListNode = function (params) {
  let url = ENVIRNMENTTEST2 + '/Node/getListNode';
  return ajaxPost(url, params)
}

// 下载模板
export const downLoad = function (params) {
  let url = ENVIRNMENTTEST + '/downLoad/business?type=Receipt';
  return ajaxGet(url, params)
}
// 上传模板
export const upload = function (params) {
  let url = ENVIRNMENTTEST2 + '/upload/business';
  return ajaxPost(url, params)
}

// 用户自定义属性接口
export const getCustomAttributeList = function (params) {
  let url = ENVIRNMENTTEST + '/getCustomAttributeList';
  return ajaxPost(url, params)
}
// 用户自定义属性详情接口
export const getCustomAttributeDetail = function (params) {
  let url = ENVIRNMENTTEST + '/getCustomAttributeDetail';
  return ajaxPost(url, params)
}
