let arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// es5合并数组

// arr1 = arr1.concat(arr2, arr3);
// console.log(arr1.concat(arr2, arr3)); // [ 'a', 'b', 'c', 'd', 'e' ]

// es6合并数组

console.log([...arr1, ...arr2, ...arr3]); // [ 'a', 'b', 'c', 'd', 'e' ]

// 上述方法属于浅拷贝，当修改了引用指向的值时，会同步反映到新数组中
const a1 = "Eric";
console.log([...a1]) // [ 'E', 'r', 'i', 'c' ]