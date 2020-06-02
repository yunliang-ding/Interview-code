// 事件冒泡详解 https://blog.csdn.net/weixin_43482353/article/details/99347549
// 手写promise-简单版本
let p = new Promise((res, rej) => {
    try {
        res({})
    } catch (e) {
        rej(e)
    }
})
// 手写防抖
function debunce(fn, time) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, time)
    }
}
function GJ(fn) {
    function res(val) {
        console.log(val)
    };
    function rej(val) {
        console.log(val)
    };
    fn(res, rej)
}
new GJ(function (res, rej) {
    res(12)
})
function deepCopy(obj){
    //判断是否是简单数据类型，
    if(typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}