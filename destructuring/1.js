let [a, b, c] = [1, 2, 3];
let [a1, b1, c1] = new Set([1, 2, 3]);
console.log(a, b, c); // 1,2,3
console.log(a1, b1, c1); // 1,2,3

let obj = {
    id: 1,
    name: 'Eric',
    age: 18
}
let { id, name, age } = obj;

console.log(id, name, age);
