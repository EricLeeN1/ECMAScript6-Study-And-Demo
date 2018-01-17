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
		
### (2).字符串链接

	1. 之前'aaa'+变量名+'bbb'
	2. 现在`aaa${变量名}bbb`

### (3).解构赋值
	
	1. var [a, b, c] = [12, 3, 5]
	2. 模式匹配=>左侧的样子需要和右侧一样
		1. [a, [b, c], d] = [12, [3, 4], 5];
	3. 赋值还可以给默认值 
		语法. var {time = 12,id=0} = {};
	4. 用处
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