// debounce 防抖
function debounce(fn, delay = 200) {
  if (typeof fn !== 'function') { // 参数类型为函数
    throw new TypeError('fn is not a function');
  }
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  }
}
document.querySelector('body').addEventListener('mousemove', debounce((e) => { console.log(e) }, 200))
// throttle 节流 // 通过一定的频率来修改标志位，来重新放行
function throttle(fn, interval = 200) {
  let flag = null;
  return function (...args) {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        fn.call(this, ...args);
      }, interval);
    }
  }
}
document.querySelector('body').addEventListener('mousemove', debounce((e) => { console.log(e) }, 200))