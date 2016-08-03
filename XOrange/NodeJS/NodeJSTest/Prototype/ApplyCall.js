var a = 1;

function test(param) {
    return this.a + param;
}

var b = {
    a: 2
};

// console.log(test.apply(b, [2]));
console.log(test.call(b, 2));
