var myArray = [
    { "name": "John Doe", "age": 29 },
    { "name": "Anna Smith", "age": 24 },
    { "name": "Peter Jones", "age": 39 }
];

myArray.sort(function (a, b) {
    return a.age - b.age;
});

console.log(myArray);