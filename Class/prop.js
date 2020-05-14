class IncreasingCounter {
    constructor() {
        this._count = 0;
    }
    get value() {
        console.log('获取到当前的value');
        return this._count;
    }
    increment() {
        this._count++;
    }
}

class IncreasingCounter2 {
    _count = 0;
    get value() {
        console.log('获取到当前的value');
        return this._count;
    }
    increment() {
        this._count++;
    }
}

let n1 = new IncreasingCounter();
let n2 = new IncreasingCounter2();
n1.increment();
n2.increment();
console.log(IncreasingCounter._count); // undefined
console.log(n1._count); // 1
console.log(n2._count); // 1
