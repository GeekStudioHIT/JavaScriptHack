function Animal() {
    this.species = "动物";
}

function Cat(name) {
    this.name = name;
}

Cat.prototype = new Animal();
// console.log(Cat.prototype);
Cat.prototype.constructor = Cat;
var cat1 = new Cat("Jemmy");
console.log(cat1);