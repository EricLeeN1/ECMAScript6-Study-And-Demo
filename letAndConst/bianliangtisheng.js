// 变量提升

// var 的情况
console.log(foo); // 输出 undefined
var foo = 2;

// let 的情况
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
let bar = 2;


