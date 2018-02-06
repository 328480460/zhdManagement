import {ajaxPost} from '../api/api.js';
import {ENVIRNMENT,ENVIRNMENTTEST2} from '../config/environment.js'

// 节点列表查询接口
export const getListNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/getListNode';
  return ajaxPost(url,params)
}
//节点新增接口
export const createNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/createNode';
  return ajaxPost(url,params)
}
// 节点修改接口
export const updateNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/updateNode';
  return ajaxPost(url,params)
}
// 节点删除接口
export const deleteNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/deleteNode';
  return ajaxPost(url,params)
}
// 节点详情接口
export const getDetailNode = function(params) {
  let url = ENVIRNMENTTEST2 + '/Node/getDetailNode';
  return ajaxPost(url,params)
}

// 节点类型、类型列表接口
export const getlist = function(params) {
  let url = ENVIRNMENTTEST2 + '/TypeTables/getlist';
  return ajaxPost(url,params)
}

// 自定义属性列表查询
export const getCustomAttributeList = function(params) {
  let url = ENVIRNMENT + '/getCustomAttributeList';
  return ajaxPost(url,params)
}
// 自定义字段信息查询
export const getColumnInfo = function(params) {
  let url = ENVIRNMENT + '/getColumnInfo';
  return ajaxPost(url,params)
}
