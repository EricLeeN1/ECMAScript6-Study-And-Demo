// 汇总  一堆出来一个
let arr1 = [12, 58, 99, 86, 45, 91];
let result = arr1.reduce((tmp, item, index) => {
    return tmp + item
})

let result1 = arr1.reduce((tmp, item, index) => {
    if (index === arr1.length - 1) {
        return (tmp + item) / arr1.length
    } else {
        return tmp + item
    }
})
console.log(result); // 391 总数
console.log(result1); // 65.16666666666667 平均数
