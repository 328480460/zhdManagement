import axios from 'axios';

export const ajaxPost = function (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res.data)
            })
            .catch(() => {
                reject('error')
            })
    })
}