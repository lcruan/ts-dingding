let getName: (x: string, y?: string) => string = function(x: string = '李', y?: string): string {
    return x + y
}

// 可选参数 ? 必选参数不能位于可选参数后
// console.log(getName('zhang'));

// 默认参数 是可以放在必选参数以及可选参数之后
// console.log(getName());
