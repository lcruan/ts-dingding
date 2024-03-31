/**js中 */
// 函数声明，命名函数
// function add(a, b) {
//     return a + b
// }

// // 函数表达式，匿名函数
// let add2 = function(a, b) {
//     return a + b
// }

/**ts中 */
// 1. ts 函数声明：命名函数
// a 和 b 都是number类型
// :number 表示的是该函数的返回值为number类型
function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2));
// 定义变量接受返回值
let c: number = add(1, 2)
console.log(c);

// 2. 函数表达式，匿名函数 - 这种在ts并不是完整的写法, 没有给add2定义类型
let add2 = function(a: number, b: number): number {
    return a + b
}
console.log(add2(1, 2));

// 3. 函数完整的写法
let add3: (a: number, b: number) => number = function(a: number, b: number): number {
    return a + b
}

