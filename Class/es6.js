class Point {
    constructor(x, y) {
        // this就是实例对象
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

let p = new Point(1, 2);
let p1 = new Point(2, 3);
console.log(p.toString()); // (1,2)

console.log(Object.keys(Point.prototype)); // []
console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'toString' ]
console.log(p.hasOwnProperty('x')); // true
console.log(p.hasOwnProperty('y')); // true 
console.log(p.hasOwnProperty('toString'));// false
console.log(p.__proto__.hasOwnProperty('toString'));// true
console.log(p.__proto__ === p1.__proto__);// true


