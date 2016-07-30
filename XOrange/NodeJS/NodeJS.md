# NodeJS
- [参考一](https://nqdeng.github.io/7-days-nodejs/#7)
- JS 是脚本语言，脚本语言都需要一个解析器。对于 HTML 页面的 JS，浏览器是解析器。对于独立运行的 JS，NodeJS 是解析器。每一种解析器都是一个运行环境，不但允许 JS 定义各种数据结构，进行各种计算，还允许 JS 使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的 JS 的用途是操作 DOM，浏览器就提供了 document 之类的内置对象。而运行在 NodeJS 中的 JS 的用途是操作磁盘文件或搭建 HTTP 服务器，NodeJS 就相应提供了 fs、http 等内置对象。
- NodeJS 的作者说，他创造 NodeJS 的目的是为了实现高性能服务器，他首先看重的是事件机制和异步 IO 模型的优越性，而不是 JS。
- 每一个文件就是一个模块，而文件路径就是模块名。编写每个模块时，都有 require、exports、module 三个预先定义好的变量可供使用。
- require 函数用于在当前模块中加载和使用别的模块，而模块名就是文件路径名。文件就是模块。
- exports 对象就是当前模块的导出对象，用于导出模块共有方法和属性。别的模块通过 require 函数使用当前模块时得到的就是当前模块的 exports 对象。
- module 对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。不是很理解 NodeJS 为什么要这么干。感觉多余。
- 一个模块中的 JS 代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
- 通过命令行参数传递给 NodeJS 以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其他模块完成工作。
- 二进制模块？
- NodeJS 是一个文件解析器，任何操作系统下安装 NodeJS 本质上做的事情都是把 NodeJS 执行程序复制到一个目录，然后保证这个目录在系统 PATH 环境变量下，以便终端可以使用 node 命令。
- CMD 模块系统？AMD 和 CMD？
- 模块路径解析，node_modules 目录？代码的目录结构和部署方式，修房子要先搭脚手架。NODE_PATH 环境变量。Python 的 sys.path。
- 多个子模块组成的大模块 —— 包。入口模块，其导出对象就是包的导出对象。
- 整体感。当模块的文件名是 index.js，直接用目录就可以加载整个包。
- package.json，自定义入口模块的文件名和存放位置。
- 我们在部署代码时需要一些技巧，让用户觉得自己是在使用一个命令行程序。
- 可执行脚本
	- [参考一](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)	
	- 命令行模式 和 API 模式？
- npm cache clear ?
- npm publish
	- please include the following file with any support request: npm-debug.js???
- 把所有内容一次性读取到内存中再一次性写入磁盘的方式不适合拷贝大文件，内存会爆仓。对于大文件，要读一点写一点，直到完成拷贝。
- JS 语言本身只有字符串数据类型，没有二进制数据类型。
- 字符串是只读的，并且对字符串的任何修改得到的都是一个新的字符串。Buffer 更像是可以做指针操作的 C 语言数组。.slice 是指向原 Buffer 中间的某个位置的指针。
- 拷贝一份 Buffer，首先创建一个新的 Buffer，并通过 .copy 方法把原 Buffer 中的数据复制过去。 
- Stream 基于事件机制工作，所有 Stream 的实例都继承于 NodeJS 提供的 EventEmitter。
- 处理数据前暂停数据读取，处理数据后继续读取数据。如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。根据 .write 的返回值来判断传入的数据是否写入目标了，还是临时放在缓存了，并根据 drain 事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据。
- path.join

	![](http://i.niupic.com/images/2016/07/29/egCTtJ.png)
- 不管大于 0xEF ??? 的单个字节在单字节编码下被解析成什么乱码字符，使用同样的单字节编码保存这些乱码字符时，背后对应的字节保持不变。
- 在 Linux 系统中，监听 2014 以下端口需要 root 权限。
- HTTP 请求本质是一个数据流，headers + body，可以用 request 对象来访问请求头数据，还能把 request 对象当做一个只读数据流来访问请求体数据。
- NodeJS 支持 SNI 技术，可以根据 HTTPS 客户端请求使用的域名动态使用不同的证书，因此同一个 HTTP 服务器可以使用多个域名提供服务。
- url
	![](http://i.niupic.com/images/2016/07/30/p7SGrC.png)
- url.parse
	![](http://i.niupic.com/images/2016/07/30/XUfijU.png)
- NodeJS 可以把多个程序组合在一起共同完成某项工作，并在其中充当胶水和调度器的作用。


