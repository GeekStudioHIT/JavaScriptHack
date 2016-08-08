# JavaScript 异步
- [参考](http://web.jobbole.com/82291/)
- single thread
	- JavaScript 是 single thread，而 Java 是 multi thread。multi thread 的优点，比如当在做耗时 IO 处理时，CPU 是闲置的，这个时候开个 thread 去处理 IO，就可以把 CPU 资源给利用上。另外，在 CPU 多核的时候，也可以用 single thread 去调用多核 CPU。但是 Python 有个全局解释所，代码不能同时运行在多核上，这就苦逼了。
- 回调函数
	- 我的理解就是调用用户提供的函数，在 C/C++ 中，就可以通过 函数指针 来实现回调函数。
在 JavaScript，如果在 setTimeout() 或 setInterval() 中执行回调函数，那么这个 setTimeout() 或 setInterval 会直接返回，等到一定的时间就会去执行这个回调函数，这样便实现了异步。


