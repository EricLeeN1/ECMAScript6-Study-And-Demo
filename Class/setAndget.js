let methodName = 'toString';

class MyClass {
    constructor(x) {
        this.x = x;
    }
    get x() {
        return 'getter';
    }
    set x(value) {
        console.log('setter:' + value);
    }
    [methodName]() {
        return this.x;
    }
}

let inst = new MyClass(1); // setter:1
console.log(MyClass.name); // MyClass
console.log(inst.name); // undefined
inst.x = 2 // setter:2
console.log(inst.x); // getter
console.log(inst.toString()); // getter

let descriptor = Object.getOwnPropertyDescriptor(
    MyClass.prototype, 'x'
);

console.log('get' in descriptor);// true
console.log('set' in descriptor);// true
