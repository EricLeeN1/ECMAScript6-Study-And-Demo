// 直接复制数组
const a1 = [1, 2];
// const a2 = a1; // 此时复制的指向底层数据结构的指针，而不是克隆一个全新的数组

// a2[0] = 2;
// console.log(a1);// [2, 2]
 
// es5 复制数组
// const a2 = a1.concat();
// a2[0] = 2;
// console.log(a1); // [1, 2]

// es6 可以使用扩展运算符来复制数组

const a2 = [...a1];
a2[0] = 2;
console.log(a1); // [1, 2]