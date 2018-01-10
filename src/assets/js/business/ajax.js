import {ajaxPost} from './api.js';

// 收货信息列表查询接口
export const  getReceiptList  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptList';
    return ajaxPost(url,params)
}
// 收货信息详情接口
export const  getInvoiceDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptDetail';
    return ajaxPost(url,params)
}
// 节点列表接口
export const getListNode = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/getListNode';
    return ajaxPost(url,params)
}
// 产品列表接口
export const getProductList = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getProductList';
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
