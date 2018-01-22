import {ajaxPost} from '../api/api.js';

// 登录接口
export const  login  = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/common/login';
  // let url = 'http://192.168.1.47:8764/meatWebServer/common/login';
  return ajaxPost(url,params)
}
