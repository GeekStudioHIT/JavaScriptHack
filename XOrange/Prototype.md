# Prototype
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
	- 每个对象都有一个指向它的原型（prototype）对象的内部链接，这个原型对象又有自己的原型，直到某个对象的原型为 null 为止（也就是不再有原型指向）。原型链（prototype chain）。
- [豆瓣](https://www.douban.com/note/293217333/)
	- JS 所有的东西都是对象，JS 中所有东西原型链的终点指向 Object.prototype。
- [阮一峰 JavaScript 面向对象编程 封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
	- object-based。
- [阮一峰 JavaScript 面向对象编程 构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
	- 构造函数绑定
	- prototype 模式
	- 直接继承 prototype
	- 利用空对象作为中介
	- 拷贝继承
	- JavaScript 构造函数继承方式总结：
		1. 最简单的方式，直接将父对象构造函数绑定到子对象的构造函数上，这样父对象里的内容也是子对象的内容，从而实现了继承。
		2. 将子对象的 prototype 对象指向一个父对象的 new 实例，然后记得让 子对象的 prototype 对象的 constructor 指向 子对象的构造方法（不这么做会造成继承链的紊乱，通俗一点就是，儿子继承了他爸，但他会以为自己是爸爸。）。但这种继承，子对象中所谓继承父对象而来的那些属性，只不过是在 子对象上的 prototype 上。
		3. 在第 2 种方法的基础上进行改进，直接将子对象的 prototype 对象指向父对象的 prototype 对象，这样的优点是节省内存（节省了生成的父对象的那个实例）。但是缺点是对子对象的 prototype 的修改就是对父对象的 prototype 的修改，并且无法集成父对象中那些可以变的属性。
		4. 利用空对象作为中介。这是在第 3 种方式的基础上，在子对象的 prototype 和 父对象的 prototype 中间，加一层 空对象。
		5. 纯粹拷贝继承。将父对象的所有不变属性和方法，拷贝进子对象。
- [阮一峰 JavaScript 面向对象编程 非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)
	- object() 方法
	- 浅拷贝
	- 深拷贝