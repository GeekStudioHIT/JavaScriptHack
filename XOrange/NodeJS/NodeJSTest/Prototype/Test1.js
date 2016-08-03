function A(name) {
    this.name = name;
}
//noinspection JSAnnotator
A.prototype.toString() = function () {
    return this.name;
};

var a = new A("hehe");
console.log(a);