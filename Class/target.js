class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
    }
}

// let x = new Shape(); // Error: 本类不能实例化,可以做初始类
let y = new Rectangle(3, 4);