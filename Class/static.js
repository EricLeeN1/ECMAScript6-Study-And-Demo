let methodName = 'toString';

class MyClass {
    constructor(x) {
        this.x = x;
    }

    static classMethod() {
        console.log('Hello Eric');
    }

    classMethod() {
        console.log('Hello World');
    }

    [methodName]() {
        return this.x;
    }
}

class SonClass extends MyClass {

}

MyClass.classMethod(); // Hello Eric
SonClass.classMethod(); // Hello Eric
let ericClass = new MyClass(1);
ericClass.classMethod(); // Hello World