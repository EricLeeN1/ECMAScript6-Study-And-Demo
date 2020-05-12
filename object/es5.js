function User(name, pass) {
    this.name = name;
    this.pass = pass;
}

User.prototype.showName = function () {
    console.log(this.name);
}

User.prototype.showPass = function () {
    console.log(this.pass);
}

function VipUser(name, pass, level) {
    User.call(this, name, pass);
    this.level = level;
}

VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;

VipUser.prototype.showLevel = function () {
    console.log(this.level);
}

let v1 = new VipUser('blue', '123456', 3);

let ul = new User('eric', '123456')

ul.showName() // eric
ul.showPass() // 123456
v1.showName() // blue
v1.showPass() // 123456
v1.showLevel() // 3