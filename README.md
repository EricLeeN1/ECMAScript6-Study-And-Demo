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
			2. 具备块级作用域(此时相当于匿名函数立即调用)
			3. 不允许重复声明
		2. 代码块：{}包起来的代码
			比如：if、for、while
		3. 用处
			1. 封闭空间
				`(function(){//code})()`=>`{//code}`
			2. i值问题
				`for (var i = 0; i < aBtn.length; i++){(function(i){//code})(i)}`=>`for (let i = 0; i < xx.length; i++){//code}`
		4. 例子:day01/base-let.html
	2. const-常量
		1. 特点
			1. 必须给初始值,一旦赋值，以后再也不能修改了
			2. 不允许重复声明
		2. 例子:day01/base-const.html
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