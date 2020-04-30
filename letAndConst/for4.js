function foo(x = 2, y = x) { // ReferenceError: Cannot access 'y' before initialization
    return [x, y];
}
console.log(foo()); // [ 2, 2 ]

function bar(x = y, y = 2) { // ReferenceError: Cannot access 'y' before initialization
    return [x, y];
}

bar(); // 报错

