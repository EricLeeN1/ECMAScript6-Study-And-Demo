console.log(Number.isFinite(15));// true
console.log(Number.isFinite(NaN));// false

console.log(Number.isNaN(15));// false
console.log(Number.isNaN(NaN));// true

console.log(Number.parseInt(12.34)); // 12
console.log(Number.parseInt("12.34")); // 12

console.log(Number.isInteger(25)); // true
console.log(Number.isInteger(25.1));// false

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(1.5));
console.log(Number.isSafeInteger(15));


// Number.isFinite() 检查一个数值是否为有限的（finite） boolean
// Number.isNan() 检查一个数值是否为NaN boolean
// Number.parseInt() 解析一个字符串，返回一个整数,第二个参数传基数2~36
// Number.isInteger() 检查一个数值是否为整数 Boolean
// Number.isSafeInteger() 检查一个整数是够落在数值范围之内 Boolean
// Number.EPSILON 实际上是JavaScript能够表示的最小精度。
// Number.MAX_SAFE_INTEGER 实际上是ES6里面数值范围的上限。
// Number.MIN_SAFE_INTEGER 实际上是ES6里面数值范围的下限。