function f(x, y) {
    return { x, y }
}

console.log(f(1, 2)); // { x: 1, y: 2 }
const birth = '2020-5-12 08:23:31'
const Person = {
    name: '张三',
    birth,
    method: {
        hello() {
            return console.log(`Hello!${this.name}`);
        },
        getPoint(x = 1, y = 1) {
            return { x, y };
        }
    }
};

let user = {
    name: 'test'
};

let foo = {
    bar: 'baz'
};

console.log({user, foo})

