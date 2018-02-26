import { ajaxPost,ajaxGet } from "../api/api.js";
import { ENVIRNMENT, ENVIRNMENTTEST, ENVIRNMENTTEST2 } from "../config/environment.js";

/*产品信息*/
// 产品列表查询接口
export const getProductList = function(params) {
    let url = ENVIRNMENTTEST + '/getProductList';
    return ajaxPost(url,params)
}
// 产品详情信息查询接口
export const getProductDetail = function(params) {
  let url = ENVIRNMENTTEST + "/getProductDetail";
  return ajaxPost(url, params);
};
// 产品信息修改接口
export const updateProduct = function(params) {
  let url = ENVIRNMENTTEST + "/updateProduct";
  return ajaxPost(url, params);
};
// 产品信息删除接口
export const deleteProduct = function(params) {
  let url = ENVIRNMENTTEST + "/deleteProduct";
  return ajaxPost(url, params);
};
// 产品信息新增接口
export const saveProduct = function(params) {
  let url = ENVIRNMENTTEST + "/saveProduct";
  return ajaxPost(url, params);
};
// 系统默认分类管理——三级查询
export const getDefaultProductType = function(params) {
  let url = ENVIRNMENTTEST2 + "/Product/getDefaultProductType";
  return ajaxPost(url, params);
};

/*分类管理*/
// 分类列表查询
export const getListProductType = function(params) {
  let url = ENVIRNMENTTEST2 + "/Product/getListProductType";
  return ajaxPost(url, params);
};
// 分类新增
export const createProductType = function(params) {
  let url = ENVIRNMENTTEST2 + "/Product/createProductType";
  return ajaxPost(url, params);
};
// 分类删除
export const deleteProductType = function(params) {
  let url = ENVIRNMENTTEST2 + "/Product/deleteProductType";
  return ajaxPost(url, params);
};
// 分类修改
export const updateProductType = function(params) {
  let url = ENVIRNMENTTEST2 + "/Product/updateProductType";
  return ajaxPost(url, params);
};

/*自定义属性*/
// 自定义属性列表查询
// export const getCustomAttributeList = function(params) {
//   let url = ENVIRNMENTTEST + '/getCustomAttributeList';
//   return ajaxPost(url,params)
// }
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
