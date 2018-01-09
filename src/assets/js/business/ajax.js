import axios from 'axios';
import vue from 'vue';

// 收货信息列表查询接口
export const  getReceiptList  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptList';
    let type = 'post';
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data)
        }).catch(() => {
            reject('error')
        })
    })
}

// 收货信息详情接口
export const  getInvoiceDetail  = function(params) {
    let url = 'http://47.92.149.109:7108/mockjsdata/2/getReceiptDetail';
    let type = 'post';
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data)
        }).catch(() => {
            reject('error')
        })
    })
}
