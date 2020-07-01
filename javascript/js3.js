// 写一个原型链继承的例子
function Parent() {
  this.name = 'parent'
}
function Children() {
  this.age = 12
}
Children.prototype = new Parent() // 1: 子类的 prototype 指向父类的实例
console.log(new Children())
// 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享
function Parent() {
  this.array = [1,2,3,4,5]
}
function Children() {
}
Children.prototype = new Parent()
let c1 = new Children()
let c2 = new Children()
c1.array.push(6)
console.log(c1.array, c2.array, new Parent()) // [1,2,3,4,5,6], [1,2,3,4,5,6]
// 解决这类问题 借用构造函数 + 组合继承
// 其一, 保证了原型链中引用类型值的独立,不再被所有实例共享;
// 其二, 子类型创建时也能够向父类型传递参数
// 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.
function Parent() {
  this.array = [1,2,3,4,5]
}
function Children() {
  Parent.call(this) // 为每个实例 预先构造自己的属性
}
Children.prototype = new Parent() // 组合继承
let c1 = new Children()
let c2 = new Children()
c1.array.push(6)
console.log(c1.array, c2.array) // [1,2,3,4,5,6], [1,2,3,4,5]

// new 操作符 3件事情
let _obj = {} // 空对象
_obj.__proto__ == XXClass.prototype
XXClass.call(_obj) // 调用构造器
