import {ajaxPost} from '../api/api.js';

const TEST = 'http://47.92.149.109:7108/mockjsdata/2'

// 追溯查询
export const  getDetailCode  = function(params) {
  let url = TEST + '/Code/getDetailCode';
  return ajaxPost(url,params)
}
