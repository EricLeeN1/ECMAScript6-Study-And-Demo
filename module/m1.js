// // export 1;// 报错


// // 报错
// // var m = 1;
// // export m;

// console.log('上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。');

// console.log('正确写法');

// // 写法1
// export var m = 1;

// // 写法2
// var m = 1;
// export {
//     m
// };

// // 写法3
// var n = 1;
// export {
//     n as m
// };

// // // 报错
// // function f() {}
// // export f;

// // 正确
// export function f() {};

// // 正确
// function f() {}
// export {
//     f
// };

// // function foo() {
// //     // export default 'bar' // SyntaxError
// // }
// // foo() 报错

// export var foo = 'bar';
// setTimeout(() => foo = 'baz', 500);