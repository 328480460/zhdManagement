import {ajaxPost} from '../api/api.js';

// 登录接口
export const  login  = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/common/login';
  return ajaxPost(url,params)
}
// 收货信息列表查询接口
export const  getReceiptList  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptList';
    return ajaxPost(url,params)
}
// 收货信息详情接口
export const  getReceiptDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptDetail';
    return ajaxPost(url,params)
}
// 节点列表接口
export const getListNode = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/getListNode';
    return ajaxPost(url,params)
}
// 产品列表查询接口
export const getProductList = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getProductList';
    return ajaxPost(url,params)
}
// 产品自定义分类列表查询接口
export const getListProductType = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Product/getListProductType';
  return ajaxPost(url,params)
}
// 产品详情信息查询接口
export const getProductDetail = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/getProductDetail';
  return ajaxPost(url,params)
}
// 产品系统默认分类查询接口
export const getDefaultProductType = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Product/getDefaultProductType';
  return ajaxPost(url,params)
}
// 产品信息修改接口
export const updateProduct = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/updateProduct';
  return ajaxPost(url,params)
}
// 产品信息删除接口
export const deleteProduct = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/deleteProduct';
  return ajaxPost(url,params)
}
// 产品信息新增接口
export const saveProduct = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/saveProduct';
  return ajaxPost(url,params)
}
// 用户自定义属性接口
export const getCustomAttributeList = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getCustomAttributeList';
    return ajaxPost(url,params)
}
// 用户自定义属性详情接口
export const getCustomAttributeDetail = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getCustomAttributeDetail';
    return ajaxPost(url,params)
}

// 生产信息列表查询接口
export const  getListProduction  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/getListProduction';
    return ajaxPost(url,params)
}
// 生产信息详情接口
export const  getDetailProduction  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/Production/getDetailProduction';
    return ajaxPost(url,params)
}
// 发货信息列表查询接口
export const  getInvoiceList  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getInvoiceList';
    return ajaxPost(url,params)
}
// 发货信息详情接口
export const  getInvoiceDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getInvoiceDetail';
    return ajaxPost(url,params)
}
