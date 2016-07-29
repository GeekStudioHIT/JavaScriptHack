var counter1 = require('./util/counter');
var counter2 = require('./util/counter');

// counter.js 并没有因为被 require 两次而初始化两次，而是被缓存起来，重复利用。
console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

