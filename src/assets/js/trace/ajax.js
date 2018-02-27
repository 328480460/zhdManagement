import {ajaxPost} from '../api/api.js';
import {ENVIRNMENTTEST2} from '../config/environment.js'

// 追溯查询
export const  getDetailCode  = function(params) {
  // let url = ENVIRNMENTTEST2 + '/Code/getDetailCode';
  let url = 'http://47.92.149.109:7108/mockjsdata/2/ddd';
  return ajaxPost(url,params)
}

// 追溯码列表查询
export const  codeApply  = function(params) {
  let url = ENVIRNMENTTEST2 + '/CodeApply';
  return ajaxPost(url,params)
}

// 追溯码申请
export const  createCodeApply  = function(params) {
  let url = ENVIRNMENTTEST2 + '/CodeApply/createCodeApply';
  return ajaxPost(url,params)
}

// 产品列表查询接口
export const getProductList = function (params) {
  let url = ENVIRNMENTTEST2 + '/getProductList';
  return ajaxPost(url, params)
}