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
	<!-- 学一下哦 -->

### (9).模块化->浏览器并未实现需要转
	
	-traceur和bootstrap

####1.严格模式

	ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
	1. 变量必须声明后再使用；
	2. 函数的参数不能有同名属性，否则报错；
	3. 不能使用with语句；
	4. 不能对只读属性赋值，否则报错。const；
	5. 不能使用前缀0表示八进制数，否则报错；
	6. 不能删除不可删除的属性，否则报错；
	7. 不能删除变量delete prop，会报错，只能删除属性delete global[prop];
	8. eval不会再它的外层作用域引入变量；
	9. eval和arguments不能被重新赋值；
	10. arguments不会自动反应函数参数的变化；
	11. 不能使用arguments.callee;
	12. 不能使用arguments.caller;
	13. 禁止this指向全局对象；
	14. 不能使用fn.caller和fn.arguments获取函数调用的堆栈
	15. 增加了保留字(比如protected、static和interface)

	ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。

####2.export命令

	模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

	一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。

	在export命令后面，使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

	xport命令除了输出变量，还可以输出函数或类（class）。

	通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

	需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。 见m1.js

	它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。
	function和class的输出，也必须遵守这样的写法。

	export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新，

	最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

	export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

####3.import 命令

	使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

	import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

	如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
	
	import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。如果a是一个对象，改写a的属性是允许的。
	建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。

	import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

	import命令具有提升效果，会提升到整个模块的头部，首先执行。

	import语句会执行所加载的模块，因此可以有下面的写法。
	`import 'lodash';`仅仅执行lodash模块，但是不输入任何值；

	如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

	import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。

####4.模块的整体加载

	除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

	上面写法是逐一指定要加载的方法，整体加载的写法如下。
	import * as circle from './circle';

	注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。

####5.export default 命令

    为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

    上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。

    export default命令用在非匿名函数前，也是可以的。foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。

    下面比较一下默认输出和正常输出。

    `// 第一组
    export default function crc32() { // 输出
        // ...
    }

    import crc32 from 'crc32'; // 输入

    // 第二组
    export function crc32() { // 输出
        // ...
    };

    import {crc32} from 'crc32'; // 输入`
    默认输出的时候不需要{}大括号，正常时候需要大括号来包着参数
    export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
    本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

    正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
    `// 正确
    export var a = 1;
    // 正确
    var a = 1;
    export default a;
    // 错误
    export default var a = 1;`
    export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。

    同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
    `// 正确
    export default 42;

    // 报错
    export 42;`

    上面代码中，后一句报错是因为没有指定对外的接口，而前一句指定外对接口为default。 
    有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。
    `import _ from 'lodash';`
    如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
    `import _, { each, each as forEach } from 'lodash';`
    `export default function (obj) {
        // ···
        }
        export function each(obj, iterator, context) {
        // ···
        }
        export { each as forEach };`
    对应上面代码的export语句如下。
    上面代码的最后一行的意思是，暴露出forEach接口，默认指向each接口，即forEach和each指向同一个方法。
    export default也可以用来输出类。见myClass.js

####6.export 与 import的复合写法

    如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。参考exportAndImport.js

    上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

    模块的接口改名和整体输出，也可以采用这种写法。
    `// 接口改名
    export { foo as myFoo } from 'my_module';

    // 整体输出
    export * from 'my_module';`
    默认接口的写法如下。
    `export { default } from 'foo';`
    具名接口改为默认接口的写法如下。
    `export { es6 as default } from './someModule';`
    `// 等同于
    import { es6 } from './someModule';
    export default es6;`
    同样地，默认接口也可以改名为具名接口。
    `export { default as es6 } from './someModule';`

    下面三种import语句，没有对应的复合写法。

    `import * as someIdentifier from "someModule";
    import someIdentifier from "someModule";
    import someIdentifier, { namedIdentifier } from "someModule";`
    提案见以后

####7.模块的继承

    模块之间也可以继承

    
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
		2018/2/1 17:57:59 

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

### (12).Class->类的基本语法 

####1. 简洁 -> Class/1.Class基础.html

    typeof Point1
    "function"
    Point1 === Point1.prototype.constructor
    true
    
    类的数据类型就是函数，类本身就指向构造函数。
    
    使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。
    
    构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
    
    Point1.prototype = {
        constructor() {},
        toString() {},
        toValue() {},
    };

    在类的实例上面调用方法，其实就是调用原型上的方法。
    
    p1.constructor === Point1.prototype.constructor
    
    由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。

    prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。

    类的内部所有定义的方法，都是不可枚举的（non-enumerable）。用方法Object.keys()可以遍历；

    采用 ES5 的写法，prototype.toString添加的方法就是可枚举的。
    
    类的属性名，可以采用表达式。

    在constructor函数里面的属性与方法就是类的实例上的属性与方法,外面的方法都是prototype上的方法;如果构造器方法与原型方法重名，使用实力上的方法；

####2. 严格模式 -> Class/2.严格模式.html

    类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

    考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

####3.constructor方法 -> Class/3.Class-constructor.html

    constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
    
    一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

    constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

####4.类的实例对象 -> Class/4.类的实例对象.html

    1. 生成类的实例对象的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。
    
    2. 与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
    
    3.  x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。
    
    4.  p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。

    5. 这也意味着，可以通过实例的__proto__属性为“类”添加方法。
    
    6. __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

    7. 与 ES5 一样，类的所有实例共享一个原型对象。

    8. 代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。

####5.Class表达式 -> Class/5.Class表达式.html

	1. 与函数一样，类也可以使用表达式的形式定义
	2. 在5.Class表达式.html中使用表达式定义了一个类。这个类的名字是MyClass而不是Me,Me只在Class的内部代码可用，指代当前类。外部会报错。Me只在 Class 内部有定义。
	3. 如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。const MyClass = class { /* ... */ };
	4. 采用 Class 表达式，可以写出立即执行的 Class。

####6.不存在变量提升 -> Class/6.不存在变量提升.html

	1. 类不存在变量提升（hoist），这一点与 ES5 完全不同。

####7.私有方法和私有属性 -> Class/7.私有方法和私有属性.html

#####1. 现有的方法
	
	私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。
	
	1. 一种做法是在命名上加以区别。
		1. _bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。
	2. 另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
		1. 上面代码中，foo是公有方法，内部调用了bar.call(this, baz)。这使得bar实际上成为了当前模块的私有方法。
	3. 还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
		1. 上面代码中，bar和snaf都是Symbol值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。

	4. 正在提案中

####8.this的指向 -> Class/8.this的指向.html

	类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
	1. 一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。
	2. 另一种解决方法是使用箭头函数。
	3. 还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this。

####9.name属性 -> Class/9.name属性.html

	由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。

	name属性总是返回紧跟在class关键字后面的类名。

####10.Class 的取值函数（getter）和存值函数（setter） -> Class/10.Class 的取值函数（getter）和存值函数（setter）.html	

	与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

	prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。

	存值函数和取值函数是设置在属性的 Descriptor 对象上的。
	上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与 ES5 完全一致。    

####11.Class 的 Generator 方法 -> Class/11.Class 的 Generator 方法.html

	如果某个方法之前加上星号(*)，就表示该方法是一个Generator函数

	Foo类的Symbol.iterator方法前有一个星号，表示该方法是一个 Generator 函数。Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器。

####12.Class 的静态方法 -> Class/12.Class的静态方法.html 
	类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

	Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

	注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
	
	第二段代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。

	父类的静态方法，可以被子类继承。

	静态方法也是可以从super对象上调用的。

####13.Class 的静态属性和实例属性 -> Class/13.Class 的静态属性和实例属性.html

	静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

	目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

	提案：略

####14.new.target 属性  -> Class/14.new.target 属性.html

	new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

	Class 内部调用new.target，返回当前 Class。

	需要注意的是，子类继承父类时，new.target会返回子类。

	利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。

	上面代码中，Shape类不能被实例化，只能用于继承。

	注意，在函数外部，使用new.target会报错。

### (13).Class的继承

####1.简介 -> Class继承/1.简介.html	

    Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

    第一段代码中，该类通过extends关键字，继承了Point类的所有属性和方法。
    constructor方法和toString方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。

    构造器里面的super(x,y)是调用父类的constructor(x, y)；原型方法里面的super.sayMaps();// 调用父类原型上的sayMaps()
    
    子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

    ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

    如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。	下午回来继续写

    另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

    子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的。

    父类的静态方法，也会被子类继承
    hello()是A类的静态方法，B继承A，也继承了A的静态方法。

####2.Object.getPrototypeOf()  -> Class继承/1.简介.html

    Object.getPrototypeOf()方法可以用来从子类上获取父类

    方法Object.getPrototypeOf(ColorPoint) === Point

####3.super关键字 -> Class继承/2.super关键字.html

    super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。
    1. 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
        1. 子类B的构造函数之中的super()，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。
        2. 注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。
        3. new.target指向当前正在执行的函数。可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
    2. .
        1. 子类B当中的super.p()，就是将super当作一个对象使用。这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。
        2. 这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。因此实例上的方法或属性是不能通过super访问的，要访问的话或许可以用this；
        3. p是父类A实例的属性，super.p就引用不到它。
        4. 属性定义在父类的原型对象上，super就可以取到。
        5. 属性x是定义在A.prototype上面的，所以super.x可以取到它的值。
        6. ES6 规定，通过super调用父类的方法时，方法内部的this指向子类。
        7. super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()内部的this指向子类B，导致输出的是2，而不是1。也就是说，实际上执行的是super.print.call(this)。
        8. 由于this指向子类，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
        9. super.x赋值为3，这时等同于对this.x赋值为3。而当读取super.x的时候，读的是A.prototype.x，所以返回undefined。
        10. 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。
        11. super在静态方法之中指向父类，在普通方法之中指向父类的原型对象。
        12. 使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。
        13. console.log(super)当中的super，无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这时，如果能清晰地表明super的数据类型，就不会报错。
        14. super.valueOf()表明super是一个对象，因此就不会报错。同时，由于super使得this指向B，所以super.valueOf()返回的是一个B的实例。
        15. 由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字

####4.类的 prototype 属性和__proto__属性 -> Class继承/4.类的 prototype 属性和__proto__属性.html

    大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

    1. 子类的__proto__属性，表示构造函数的继承，总是指向父类。
    2. 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
    3. 这样的结果是因为，类的继承是按照下面的模式实现的。

####5. extends 的继承目标 -> Class继承/5.extends 的继承目标.html

    上面代码的A，只要是一个有prototype属性的函数，就能被B继承。由于函数都有prototype属性（除了Function.prototype函数），因此A可以是任意函数。

    三种特殊情况
    1. 子类继承Object类。
    这种情况下，C其实就是构造函数Object的复制，C的实例就是Object的实例。
    2. 不存在任何继承。
    这种情况下，A作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承Function.prototype。但是，A调用后返回一个空对象（即Object实例），所以A.prototype.__proto__指向构造函数（Object）的prototype属性。
    3. 子类继承null
    A也是一个普通函数，所以直接继承Function.prototype。但是，A调用后返回的对象不继承任何方法，所以它的__proto__指向Function.prototype，即实质上执行了下面的代码。

####6. 实例的 __proto__ 属性 -> Class继承/6.实例的 __proto__ 属性.html

	子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。
    
	代码中，ColorPoint继承了Point，导致前者原型的原型是后者的原型。

	因此，通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为。

####7.原生构造函数的继承 Class继承/6.原生构造函数的继承.html

	ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。下面是一个继承Array的例子。

	这意味着，ES6 可以自定义原生数据结构（比如Array、String等）的子类

	上面这个例子也说明，extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数。因此可以在原生数据结构的基础上，定义自己的数据结构。下面就是定义了一个带版本功能的数组。

	继承Object的子类，有一个行为差异。

	NewObj继承了Object，但是无法通过super方法向父类Object传参。这是因为 ES6 改变了Object构造函数的行为，一旦发现Object方法不是通过new Object()这种形式调用，ES6 规定Object构造函数会忽略参数。

####8.Mixin模式的实现 Class继承/7.Mixin模式的实现.html

	Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。
	
	