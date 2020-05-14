class Point {
    constructor(x, y) {
        // this就是实例对象
        this.x = x;
        this.y = y;
    }

    static hello() {
        console.log('hello world');
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x,y)
        // 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toSting();
    }
}

let cp = new ColorPoint(25, 8, 'green');
ColorPoint.hello();// hello world
console.log(cp.toString());
console.log(cp instanceof ColorPoint);// true
console.log(cp instanceof Point);// true
console.log(Object.getPrototypeOf(ColorPoint) === Point); // true
