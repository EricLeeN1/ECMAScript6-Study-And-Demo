function show(a, b, ...args) {
    console.log(a);// 1
    console.log(b);// 2
    console.log(...args);// 3 4 5 6 7 8
}

show(1, 2, 3, 4, 5, 6, 7, 8)