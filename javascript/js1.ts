// 面试准备
/** 手动实现 es6 几种高阶函数 map, filter, some, find, every, reduce ... */
/** 熟练 call , apply 以及几种常见的框架的应用场景 */

['1','2','3'].map(parseInt) // 总结

// 事件队列

//
/* 实现一个add方法，使计算结果能够满足如下预期： currying
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
*/
// 数组的empty不会参与迭代

// ResizeObserver 检测dom尺寸变化
/*
    var ro = new ResizeObserver( entries => {
    for (let entry of entries) {
        const cr = entry.contentRect;
        console.log('Element:', entry.target);
        console.log(`Element size: ${cr.width}px x ${cr.height}px`);
        console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
    }
    });

    // 观察一个或多个元素
    ro.observe(eleZxx);
*/
// js eventLoop https://www.cnblogs.com/goloving/p/12790991.html
// node eventLoop 