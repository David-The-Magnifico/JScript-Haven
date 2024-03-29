// Functions
function addNumbers(number1, number2){
    var addition = number1 + number2;
    return addition;
}

var result1 = addNumbers(10, 10);
var result2 = addNumbers(7, 3);

console.log(result1, result2);

var person = {
    name: "Magnifico",
    age: 28,
    occupation: "Software Engineer"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("Magnifico".toUpperCase());
console.log("Magnifico".toLowerCase());
console.log("Magnifico".split(""));
console.log("Magnifico".indexOf("i"));
console.log("Magnifico".lastIndexOf("i"));
console.log("Magnifico".substring(0, 3));
console.log("Magnifico".substring(3, 6));
console.log("Magnifico".substring(6, 9));