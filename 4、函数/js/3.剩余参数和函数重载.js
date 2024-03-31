// 剩余参数
function fn(x, y, ...args) {
    console.log(x, y, args);
}
fn('', '', 1, 2, 3, 4, 5, 6);
// 函数实现
function newAdd(x, y) {
    if (typeof x == 'string' && typeof y == 'string') {
        return x + y; // 字符串拼接
    }
    else if (typeof x == 'number' && typeof y == 'number') {
        return x + y; // 数字相加
    }
}
console.log(newAdd(1, 2));
console.log(newAdd('张', '三'));
