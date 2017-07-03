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
	
### (1).变量声明
	
	1. let
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
	2. const
	3. 原来的var
		1. 只有函数作用域
		
