import { ajaxPost,ajaxGet } from "../api/api.js";
import { ENVIRNMENT, ENVIRNMENTTEST } from "../config/environment.js";

/*产品信息*/
// 产品列表查询接口
export const getProductList = function(params) {
    let url = ENVIRNMENTTEST + '/getProductList';
    return ajaxPost(url,params)
}
// 自定义字段信息查询
export const getColumnInfo = function(params) {
  let url = ENVIRNMENT + '/getColumnInfo';
  return ajaxPost(url,params)
}
// 自定义属性列表查询
export const getCustomAttributeList = function(params) {
  let url = ENVIRNMENTTEST + '/getCustomAttributeList';
  return ajaxPost(url,params)
}
// 产品详情信息查询接口
export const getProductDetail = function(params) {
  let url = ENVIRNMENT + "/getProductDetail";
  return ajaxPost(url, params);
};
// 产品信息修改接口
export const updateProduct = function(params) {
  let url = ENVIRNMENT + "/updateProduct";
  return ajaxPost(url, params);
};
// 产品信息删除接口
export const deleteProduct = function(params) {
  let url = ENVIRNMENT + "/deleteProduct";
  return ajaxPost(url, params);
};
// 产品信息新增接口
export const saveProduct = function(params) {
  let url = ENVIRNMENT + "/saveProduct";
  return ajaxPost(url, params);
};
// 系统默认分类管理——三级查询
export const getDefaultProductType = function(params) {
  let url = ENVIRNMENT + "/Product/getDefaultProductType";
  return ajaxPost(url, params);
};

/*分类管理*/
// 分类列表查询
export const getListProductType = function(params) {
  let url = ENVIRNMENT + "/Product/getListProductType";
  return ajaxPost(url, params);
};
// 分类修改
export const updateProductType = function(params) {
  let url = ENVIRNMENT + "/Product/updateProductType";
  return ajaxPost(url, params);
};
// 分类删除
export const deleteProductType = function(params) {
  let url = ENVIRNMENT + "/Product/deleteProductType";
  return ajaxPost(url, params);
};
// 分类详情
export const getDetailProductType = function(params) {
  let url = ENVIRNMENT + "/Product/getDetailProductType";
  return ajaxPost(url, params);
};
// 分类模板下载（暂无）
export const download_modle_product_type = function(params) {
  let url = ENVIRNMENT + "/Product/download_modle_product_type";
  return ajaxGet(url, params);
};

// 自定义属性修改
export const updateCustomAttribute = function(params) {
  let url = ENVIRNMENT + '/updateCustomAttribute';
  return ajaxPost(url,params)
}
