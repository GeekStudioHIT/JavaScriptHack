// function Animal() {
//     this.species = "动物";
// }
//
// function Cat(name) {
//     this.name = name;
// }
//
// Cat.prototype = new Animal();
// // console.log(Cat.prototype);
// Cat.prototype.constructor = Cat;
// var cat1 = new Cat("Jemmy");
// console.log(cat1);

// function Animal() {}
// Animal.prototype.species = "动物";
//
// function Cat(name) {
//     this.name = name;
// }
//
// Cat.prototype = Animal.prototype;
// console.log(Cat.prototype);
// Cat.prototype.constructor = Cat;

function Animal(name) {
    this.name = name;
}
Animal.prototype.species = "动物";

var cat = Animal("cat");

function Cat(obj) {
    this.obj = obj;
}

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("lalala");
console.log(cat1.obj + " " + cat1.name);