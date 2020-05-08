let arr = [1, 2, 3, 4, 5]
arr.copyWithin(0, 3)
console.log(arr);  // [ 4, 5, 3, 4, 5 ]

// copyWithin在当前数组内部，将指定位置的成员复制到其他位置(会覆盖原有成员)，然后返回当前数组

// Array.prototype.copyWithin(target, start = 0, end = this.length)

// target 从该位置开始替换数据，如果为负值，表示倒数
// start 从该位置开始读取数据，默认为0，负值表示从末尾开始计算 
// end 从该位置停止读取数据，默认等于数组长度，负值表示从末尾开始计算 

// 以上三个参数都是数值，如果不是，会自动转为数值