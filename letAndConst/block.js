function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}

f1(); // 5