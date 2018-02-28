import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST,ENVIRNMENTTEST2} from '../config/environment.js'

// 登录接口
export const  login  = function(params) {
  let url = ENVIRNMENTTEST + '/common/login';
  return ajaxPost(url,params)
}

// 导入记录查询
export const  getUploadRecord  = function(params) {
  let url = ENVIRNMENTTEST + '/getUploadRecord';
  return ajaxPost(url,params)
}
