import {ajaxPost} from '../api/api.js';

// 节点列表查询接口
export const getListNode = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/getListNode';
  return ajaxPost(url,params)
}
//节点新增接口
export const createNode = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/createNode';
  return ajaxPost(url,params)
}
// 节点修改接口
export const updateNode = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/updateNode';
  return ajaxPost(url,params)
}
// 节点删除接口
export const deleteNode = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/deleteNode';
  return ajaxPost(url,params)
}
// 节点详情接口
export const getDetailNode = function(params) {
  let url = 'http://47.92.149.109:7108/mockjsdata/2/Node/getDetailNode';
  return ajaxPost(url,params)
}
