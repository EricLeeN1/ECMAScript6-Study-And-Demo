let arr = ['a', 'b']

for (let index of arr.keys()) {
    console.log(index);
}
// 0
// 1

for (let item of arr.values()) {
    console.log(item);
}
// a
// b

for (let [index, elem] of arr.entries()) {
    console.log(index, elem);
}
// 0 a
// 1 b

// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。