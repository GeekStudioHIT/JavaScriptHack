// // 继承属性
// var o = {a: 1, b: 2};
// o.prototype = {b: 3, c: 4};
// console.log(o.prototype.b);

// // 继承方法
// var o = {
//     a: 2,
//     m: function() {
//         return this.a + 1;
//     }
// };
//
// console.log(o.m());
//
// var p = Object.create(o);
//
// p.a = 12;
// console.log(p.m());

// // 使用普通语法创建对象
// var o = {a: 1};

// // 使用构造器创建对象
// function Graph() {
//     this.vertexes = [];
//     this.edges = [];
// }
//
// Graph.prototype = {
//     addVertex: function (v) {
//         this.vertexes.push(v);
//     }
// };
//
// var g = new Graph();
// console.log(g);

// 使用 Object.create 创建对象
// var a = {a: 1};
// var b = Object.create(a);
// console.log(b.a);

// // class
// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
//
// class Square extends Polygon {
//     constructor(sideLength) {
//         super(sideLength, sideLength);
//     }
//
//     get area() {
//         return this.height * this.width;
//     }
//
//     set sideLength(newLength) {
//         this.height = newLength;
//         this.width = newLength;
//     }
// }
//
// var square = new Square(2);
// // console.log(square.get());
//
