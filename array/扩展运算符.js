console.log(...[1, 2, 3]);
// 1 2 3

console.log(1, ...[2, 3, 4], 5);
// 1 2 3 4 5


function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
add(...numbers);

const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
console.log(a1);// [1, 2]