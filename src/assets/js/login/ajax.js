import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST,ENVIRNMENTTEST2,ENVIRNMENROLE} from '../config/environment.js'

// 登录接口
export const  login  = function(params) {
  let url = ENVIRNMENTTEST + '/common/login';
  return ajaxPost(url,params)
}
// 登录接口
export const   logout  = function(params) {
  let url = ENVIRNMENTTEST + '/logout';
  return ajaxPost(url,params)
}

// 导入记录查询
export const  getUploadRecord  = function(params) {
  let url = ENVIRNMENTTEST + '/getUploadRecord';
  return ajaxPost(url,params)
}

// 登录权限接口
export const roles = function(params){
  let url = ENVIRNMENROLE + "/Role/getDetailRole"
  return ajaxPost(url,params)
}