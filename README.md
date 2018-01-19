# ECMAScript 6
	
	时间：2017/7/3 22:38:44 

### 资料参考自[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/ "阮一峰大大の书-ECMAScript 6 入门")及部分网络课程

## 一.编译方法

### (1).编译工具

	1. babel
	2. traceur-->Google出的编译器
	3. bootstrap-->引导程序非css的bootstrap

### (2).在线编译--主要用于测试

	1. [http://babeljs.cn/repl/](http://babeljs.cn/repl/)
	
### (3).node中使用
	
	1. 直接用，可能需要添加'use strict' --> node **.js
	2. 如果不能用的话输入--> node -- harmony_desctructuring **.js

## 二.语法
	
### (1).变量常量声明
	
	1. let-变量
		1. 特点：
			1. 只能在代码块内使用
			2. 具备块级作用域(此时相当于匿名函数立即调用)ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
			3. 不允许重复声明
			4. 不存在变量提升现象，
			5. 暂时性死区(temporal dead zone，简称 TDZ)，只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
            	1. “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
                   type x;// ReferenceError
                   在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。
                   这样的设计是为了让大家养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。
                   暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
		2. 代码块：{}包起来的代码
			比如：if、for、while
		3. do表达式（提案阶段）
            1. 本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。
		4. 用处
			1. 封闭空间
				`(function(){//code})()`=>`{//code}`
			2. i值问题
				`for (var i = 0; i < aBtn.length; i++){(function(i){//code})(i)}`=>`for (let i = 0; i < xx.length; i++){//code}`
		4. 例子:day01/base-let.html
	2. const-常量
		1. 特点
			1. 必须给初始值,一旦赋值，以后再也不能修改了
			2. 不允许重复声明，
			3. 只声明不赋值，就会报错，
			4. 也是只在声明所在的块级作用域内有效
			5. const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
		2. 例子:day01/base-const.html
		3. 对于数值，字符串与布尔值
    		等同于常量
		4. 对于对象与数组->保存的只是一个指针，只能保证这个指针是固定的，因此将一个对象声明为常量必须非常小心
    		1. 如果真的想将对象冻结，应该使用Object.freeze方法。
    		2. 详细参考页面js文件
	3. 原来的var--变量常量都行
		1. 只有函数作用域
	4. Es6 生命变量的六种方法
		1. var
		2. function
		3. let
		4. const
		5. import
		6. class
		tips:
			1. 一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；因此var a=1时;window.a = a;a是顶层对象的属性
			2. 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。因此let a=1时;window.a != a; 此时window.a undefined;
			a不是顶层对象的属性。
### (2).字符串链接

	1. 之前'aaa'+变量名+'bbb'
	2. 现在`aaa${变量名}bbb`

### (3).解构赋值
	
    概念：ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
    1. var [a, b, c] = [12, 3, 5]
    2. 模式匹配=>左侧的样子需要和右侧一样
    从数组中提取值，按照对应位置，对变量赋值。
    这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
        1. [a, [b, c], d] = [12, [3, 4], 5];
        2. let [foo] = [];let [bar,foo] = [1];
            1. 如果解构不成功，变量的值就等于undefined。
        3. 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
            1. let [x, y] = [1, 2, 3];  -> x=1,y=2;
            2. let [a,[b],d] = [1,[2,3],4]; -> a=1,b=2,d=4;
        4. 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。以下六个都会报错：
            1. let [foo] = 1;
            2. let [foo] = false;
            3. let [foo] = Nan;
            4. let [foo] = undefined;
            5. let [foo] = null;
            6. let [foo] = {};
        5. 对于Set结构，也可以使用数组的解构赋值。
            1. let [x,y,z] = new Set(['a','b','c']); -> x=a;y=b;z=c
    3. 赋值还可以给默认值 
        语法: let [time = 12,id=0] = []; -> time=12,id=0;
        tips: ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
        let [time = 12,id=0] = [13]; -> time=13,id=0 
    4. 对象的解构赋值
        1. 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
            1. let { bar, foo } = { foo: "aaa", bar: "bbb" };
                foo // "aaa"
                bar // "bbb"
            2. 如果变量名与属性名不一致，必须写成下面这样。
                1. let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
                baz // "aaa"
            3. 这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
                let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
        2. 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。相当于对象里面的key只是一个地址，value才是真正的值。同理被赋值的也就是value，同名属性key对应的value才是要赋值的数据。
            1. let { foo: baz } = { foo: "aaa", bar: "bbb" };
            baz // "aaa"
            foo // error: foo is not defined
            2. 上面的例子中 foo只是匹配的模式，baz才是要声明的变量。真正被赋值的是变量baz。
            3. 用于嵌套结构的对象。参看eg.3
                1. p是匹配模式。
            4. 解构失败，变量的值等于undefined。
                1. let {foo} = {bar: 'baz'};
                    foo // undefined
            5. 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
                1. // 报错
                let {foo: {bar}} = {baz: 'baz'};
            6. 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
                1. // 错误的写法
                let x;
                {x} = {x: 1};
                // SyntaxError: syntax error
                因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
                2. // 正确的写法
                let x;
                ({x} = {x: 1});
                3. 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。
                ({} = [true, false]);
                ({} = 'abc');
                ({} = []);
                上面的表达式虽然毫无意义，但是语法是合法的，可以执行。
                4. 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
                    1. let { log, sin, cos } = Math;
                    2. 上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。


    5. 字符串的解构赋值 -> 字符串被转换成了一个类似数组的对象。
    6. 数值和布尔值的解构赋值 ->  如果等号右边是数值和布尔值，则会先转为对象。  由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
    7. 函数参数的解构赋值 -> 传入参数的那一刻，数组参数就被解构成变量x和y.函数参数的解构也可以使用默认值。
    8. 圆括号问题 -> 因此，建议只要有可能，就不要在模式中放置圆括号。
	    1. 不能使用圆括号的情况
		    （1）变量声明语句 -> 变量声明语句，模式不能使用圆括号
			（2）函数参数 -> 函数参数也属于变量声明，因此不能带有圆括号。
			（3）赋值语句的模式 -> 将整个模式或者一部分模式放在圆括号之中，都会导致报错
		2. 可以使用圆括号的情况
			1. 赋值语句的非模式部分，可以使用圆括号。
    9. 用途
	    （1）交换变量的值
		（2）从函数返回多个值
			函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
		（3）函数参数的定义
			解构赋值可以方便地将一组参数与变量名对应起来。
		（4）提取 JSON 数据 
			解构赋值对提取 JSON 对象中的数据，尤其有用。
		（5）函数参数的默认值
			指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
		（6）遍历 Map 结构
			任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
		（7）输入模块的指定方法
			加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
	1. 运动框架里面
	2. 返回值
	
### (4).复制数组

	1. 循环->老方法
	2. `var arr2 =Array.from(arr);`
	3. `var arr2=[...arr];`
	4. 应用->函数参数
	`function show(...args) {
        args.push(5);
        console.log(args);
        //[1,2,3.4.5]
    }
    show(1, 2, 3, 4);`

### (5).循环
	
	1. 普通for
	2. forin
	3. forEach
	4. 新 for of  -->循环，可以循环数组，不能循环json
	5. 循环数组时，参考下面Map对象
		1. 可以用arr.entries()=>输出index,value
		2. 可以用arr.keys()=>输出index
		3. 由于其默认就是values因此不支持arr.values()
		真正目的为了循环 Map对象
		遍历（迭代、循环）整个对象， 表现类似for in 
	6. 别的遍历等

### (6).Map对象--2017/7/4 22:07:08 
	
	1. 和json相似，也是一种key:value形式
	2. Map对象为了和for of循环配合而生的
	3. 创建
		1. `var map = new Map();`
	4. 设置
		1. `map.set(name,value);`
	5. 获取
		1. `map.get('name');`
	6. 删除
		1. `map.delete('name');`
	7. 遍历
		1. 不能使用for in，没有效果
		2. `for (var i of map) {`=>相当于循环key&value`.entries()`
        		console.log(i);
    		}`=>[key,value]
		3. `for (var i of map.keys()) {`=>循环key
        		console.log(i);
    		};`
		4. `for (var i of map.values()) {`=>循环value
      			console.log(i);
    		};`

### (7).箭头函数`=>`
	
	1. 关于this问题=>指向了window
	2. arguments问题=>不能使用了
	3. 函数给默认值->之前也能用

### (8).对象简洁化
	
	`var name ='addd';
	 var age =101;
     var person={
     name,
     age,
     showAge:()=>{
        console.log(this.name)
     }
    };`
	1. 面向对象
		`class Person {//类
        	constructor(name, age) {
           		this.name = name;
            	this.age = age;
        	}
        	showName(){
            	return this.name
        	}
        	showAge(){
            	return this.age
        	}
    	}`
	2. 继承
		1. 之前:子类.prototype=new 父类();
		2. es6:
			`class Worker extends Person {
				constructor() {
            		super(name,age);//调用父级构造
        		}
			}`
	3. 应用->面向对象应用-队列类.html 

### (9).模块化->浏览器并未实现需要转
	
	-traceur和bootstrap
	
	1. 定义导出模块
		`const a = 12;
		export default a;`
		`const  a=5;
		const  b =12;
		function kuoda(n) {
    	return n*2;
		}
		export default {a,b,kuoda};`=>多个模块 
	2. 引入时候`type=module`
		1. `import modA from './a.js';`

### (10).Promise->承诺?
	
	1. 实质：一个对象，用来传递异步操作的数据(消息)
	2. 状态
		1. pending(等待、处理中)-->Resolve(完成)
							   -->Rejected(拒绝、失败)
	3. 创建
		`var p1 = new Promise(function(resolve,reject){});`
	4. 方法
		1. then(fnsuss,fnfail);	
		2. catch->捕获错误
		3. all->将多个promise对象组合。包装城一个新的promise
			1. `Promise.all([p1,p2,p2...]);`=>所有的promise对象都正确，才走成功,否则只要有一个错误，就错误
		4. race->返回一个promise对象(最先能执行的promise结果,那个最快就用哪个)=> `Promise.race([p1,p2]).then(function (value) {console.log(value);});
		5. Promise.reject()->生成错误promise
		6. Promise.resolve()->生成一个成功的promise
			1. 语法 `Promise.resolve(value);
					Promise.resolve(promise);
					Promise.resolve([arr1,arr2]);

### (11).Generator->生成器
		
	1. 实质：一个函数,可以遍历,就是一个状态机,配合yield语句
	2. 语法
		- `function show(){}`->普通函数
		- `function* show(){}`->generator函数
	3. 形式
		- 函数名字前有*
		- 函数内部使用yield语句
	4.使用
		`function* show() {
        	yield 'Hello';
        	yield 'Eric';
        	yield 'Keep Moving';
		};`
	5.方法
		1. next()=>`{value: "Hello", done: false}`
			1. value->yeild后面值
			2. done->布尔值表示是否遍历结束
	6. tips
		1. yield语句本身没有返回值，或者每次返回undefined
		2. next()可以带参数，给上一个yield值
		3. for...of循环generator函数 
		4. generator函数放到对象里面=>
		`var json = {
            *show(){
                yield 'a';
                yield 'b';
                return 'c';
            }
        };`