import {ajaxPost} from '../api/api.js';

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
// 产品自定义分类删除查询接口
export const updateProductType = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Product/updateProductType';
  return ajaxPost(url,params)
}
// 产品自定义分类删除查询接口
export const deleteProductType = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Product/deleteProductType';
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
