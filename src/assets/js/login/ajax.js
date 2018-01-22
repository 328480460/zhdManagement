import {ajaxPost} from '../api/api.js';
import {ENVIRNMENTTEST} from '../config/environment.js'

// 登录接口
export const  login  = function(params) {
  let url = ENVIRNMENTTEST + '/common/login';
  return ajaxPost(url,params)
}
