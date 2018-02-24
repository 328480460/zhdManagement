// 当前环境信息配置
// ENVIRNMENT = 'develop' 时对应 'http://47.92.149.109:7108/mockjsdata/2';
// ENVIRNMENT = 'test' 时对应 'http://192.168.1.73:8764/meatWebServer';
/*接口文档格式*/
const develop = 'http://47.92.149.109:7108/mockjsdata/2';
/*本地测试地址*/
const test = 'http://192.168.1.60:8764/meatWebServer';//test  张力
const test2 = "http://192.168.1.222:8764/meatWebServer";//test2  刘高阳

/*统一外网地址*/
// const test = 'http://47.92.98.208/meatWebServer';
// const test2 = "http://47.92.98.208/meatWebServer";

export const ENVIRNMENT = develop;
export const ENVIRNMENTTEST = test;
export const ENVIRNMENTTEST2 = test2;
