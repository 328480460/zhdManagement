import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST,ENVIRNMENTTEST2} from '../config/environment.js'

// 概况数据查询接口
export const  getViewCount  = function(params) {
  let url = ENVIRNMENTTEST2 + '/getViewCount';
  return ajaxPost(url,params)
}

