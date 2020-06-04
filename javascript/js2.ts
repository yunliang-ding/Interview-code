// 手写promise-简单版本
let p = new Promise((res, rej) => {
    try {
        res({})
    } catch (e) {
        rej(e)
    }
})