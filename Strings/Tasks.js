let x = 5;
let y = 3;
let result = 2 * (x + y);
console.log("Result: " + result);


let value = 37;
let remainder = value % 10;
let result1 = value + remainder;
console.log("Result: " + result1);


let x1 = 4;
let n = 3;
let result2 = x1;
for (let i = 1; i < n; i++) {
    result2 *= x1;
}
console.log("Result: " + result2);


let a = 100;
let x3 = a + 10;
let y3 = a - 10;
let z = a % 10;
let result3 = a / (x3 * y3 * z);
console.log("Result: " + result3);


function calc(x4) {
    function secondNumber(a) {
        return a * x4;
    }
    return secondNumber;
}

const answer = function (params){
    
}

let result4 = calc(3);
console.log(result4(2));
console.log(calc(3)(2));