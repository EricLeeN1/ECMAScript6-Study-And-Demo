let arr = Array();
let arr1 = Array(3);
let arr2 = Array(1,2,3);
console.log(arr); // []
console.log(arr1); // [ <3 empty items> ]
console.log(arr2); // [ 1, 2, 3 ]


// let arr = Array.of();
// let arr1 = Array.of(3);
// let arr2 = Array.of(3,1,2); 
// console.log(arr); // []
// console.log(arr1); // [ 3 ]
// console.log(arr2); // [ 3, 1, 2 ]

// 为了弥补数组构造函数的Array()的不足，需要使用Array.of来替代Array()或者new Array();