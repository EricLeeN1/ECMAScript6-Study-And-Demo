// es6在Math对象上新增了17个静态方法

// console.log(Math.trunc(4.1)) // 4
// console.log(Math.trunc(4.6)) // 4
// console.log(Math.trunc(-4.99)) // -4
// console.log(Math.trunc('123.456')); // 123
// console.log(Math.trunc(true)); // 1
// console.log(Math.trunc(false)); // 0
// console.log(Math.trunc(null)); // 0
// console.log(Math.trunc(NaN)); // NaN
// console.log(Math.trunc('foo')); // NaN
// console.log(Math.trunc()); // NaN
// console.log(Math.trunc(undefined)); // NaN

// console.log(Math.sign(-5.1)); // -1
// console.log(Math.sign(5)); // 1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(-0)); // -0
// console.log(Math.sign(NaN)); // NaN

// console.log(Math.cbrt(-1));// -1
// console.log(Math.cbrt(2));// 1.2599210498948732

// console.log(Math.clz32(0));// 32
// console.log(Math.clz32(1));// 31
// console.log(Math.clz32(1000));// 22

// console.log(Math.imul(2, 4)); // 8

// console.log(Math.fround(1)); // 1
// console.log(Math.hypot(3, 4)); // 5

console.log(2 ** 3); // 8
let a = 4;
console.log(a **= 3); // 64


// 1、Math.trunc()去除一个数的小数部分，返回整数部分。对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。
// 2、Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。对于无法转为数值的值，会返回NaN,
// 参数是正数时，返回+1；
// 参数是负数时，返回-1；
// 参数是0时，返回0；
// 参数是-0时，返回-0；
// 参数其他值，返回NaN；
// 3、Math.cbrt()用于计算一个数的立方根,对于非数值，该方法内部也是先使用Number()方法将其转为数值。
// 4、Math.clz32()将参数转为32位无符号整数的形式，然后返回这个32位值里面有多少个前导0；
// 5、Math.imul()方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数；
// 6、Math.fround()方法返回一个数的32位单精度浮点数形式；
// 6、Math.hypot()方法返回所有参数的平方和的平方根，如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就返回NaN；

console.log(typeof 123n); // bigint
console.log(BigInt(123)); // 123n

// 为了与Number类型区别，BigInt类型的数据必须添加后缀n。