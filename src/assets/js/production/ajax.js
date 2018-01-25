import { ajaxPost } from "../api/api.js";
import { ENVIRNMENT, ENVIRNMENTTEST } from "../config/environment.js";

// 产品列表查询接口
export const getProductList = function(params) {
    let url = ENVIRNMENTTEST + '/getProductList';
    return ajaxPost(url,params)
}
// 产品自定义分类列表查询接口
export const getListProductType = function(params) {
  let url = ENVIRNMENT + '/Product/getListProductType';
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
// 产品自定义分类修改查询接口
export const updateProductType = function(params) {
  let url = ENVIRNMENT + "/updateProductType";
  return ajaxPost(url, params);
};
// 产品自定义分类删除查询接口
export const deleteProductType = function(params) {
  let url = ENVIRNMENT + "/deleteProductType";
  return ajaxPost(url, params);
};
// 产品详情信息查询接口
export const getProductDetail = function(params) {
  let url = ENVIRNMENT + "/getProductDetail";
  return ajaxPost(url, params);
};
// 产品三级分类查询接口-系统默认
export const getDefaultProductType = function(params) {
  let url = ENVIRNMENT + "/Product/getDefaultProductType";
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
<<<<<<< HEAD
  let url = ENVIRNMENT + "/saveProduct";
  return ajaxPost(url, params);
};
=======
  let url = ENVIRNMENT + '/saveProduct';
  return ajaxPost(url,params)
}
// 自定义属性修改
export const updateCustomAttribute = function(params) {
  let url = ENVIRNMENT + '/updateCustomAttribute';
  return ajaxPost(url,params)
}
>>>>>>> c629306ee6efb92948ab4a313936c7c9b0654877
