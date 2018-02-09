import {ajaxPost} from '../api/api.js';
import {ENVIRNMENTTEST2} from '../config/environment.js'
const TEST = 'http://47.92.149.109:7108/mockjsdata/2'

// 追溯查询
export const  getDetailCode  = function(params) {
  // let url = ENVIRNMENTTEST2 + '/Code/getDetailCode';
  let url = 'http://47.92.149.109:7108/mockjsdata/2/ddd';
  return ajaxPost(url,params)
}
