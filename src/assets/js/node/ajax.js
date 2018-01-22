import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT} from '../config/environment.js'

// 节点列表查询接口
export const getListNode = function(params) {
  let url = ENVIRNMENT + '/Node/getListNode';
  return ajaxPost(url,params)
}
//节点新增接口
export const createNode = function(params) {
  let url = ENVIRNMENT + '/Node/createNode';
  return ajaxPost(url,params)
}
// 节点修改接口
export const updateNode = function(params) {
  let url = ENVIRNMENT + '/Node/updateNode';
  return ajaxPost(url,params)
}
// 节点删除接口
export const deleteNode = function(params) {
  let url = ENVIRNMENT + '/Node/deleteNode';
  return ajaxPost(url,params)
}
// 节点详情接口
export const getDetailNode = function(params) {
  let url = ENVIRNMENT + '/Node/getDetailNode';
  return ajaxPost(url,params)
}
