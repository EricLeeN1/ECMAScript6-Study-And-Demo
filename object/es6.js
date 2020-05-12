// es6的面向对象：
// class关键字、构造器和类分开了
// class里面直接加方法

// 继承:


class User {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }

    showName() {
        console.log(this.name);
    }

    showPass() {
        console.log(this.pass);
    }
}
// super 超类
class VipUser extends User {

    constructor(name, pass, level) {
        super(name, pass);
        this.level = level;
    }

    showLevel() {
        console.log(this.level);
    }
}

let ul = new User('eric', '123456')
let v1 = new VipUser('blue', '123456', 3);

ul.showName()
ul.showPass()
v1.showName()
v1.showPass()
v1.showLevel()

