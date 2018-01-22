import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT} from '../config/environment.js'

// 登录接口
export const  login  = function(params) {
  let url = ENVIRNMENT + '/common/login';
  return ajaxPost(url,params)
}
