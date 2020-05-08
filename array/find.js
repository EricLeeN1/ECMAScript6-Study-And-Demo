// let arr1 = [1, 4, -5, 19];
// let result = arr1.find(n => n < 0);
// let result1 = arr1.find((val, i, arr) => {
//     return val > 3
// });
// console.log(result); // -5
// console.log(result1); // 4

// 组实例的find方法，用于
// ！！！找出第一个符合条件的数组成员！！！。
// 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

// find方法的毁掉函数可以接受三个参数，依次为当前的值、当前的位置和原数组

let arr2 = [1, 5, 10, 15]

let result2 = arr2.findIndex(function (value, index, arr) {
    return value > 9;
}) // 2

console.log(result2);


// 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

// 两个方法都可以接受第二个参数，用来绑定回调函数的this对象

function f(v) {
    return v > this.age;
}

let person = { name: 'john', age: 20 };
console.log([10, 12, 26, 15].find(f, person)); // 26

// 可以发现NaN,弥补了数组的indexOf方法的不足, indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。
console.log([NaN].indexOf(NaN)); // -1
console.log([NaN].findIndex(x => Object.is(NaN, x))); // 0