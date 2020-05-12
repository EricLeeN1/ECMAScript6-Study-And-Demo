// 循环(迭代)
let arr1 = [12, 58, 99, 86, 45, 91];
let result = arr1.forEach((item, index, this) => {
    console.log(item);
});
console.log(result); // [ 12, 99, 45 ]

