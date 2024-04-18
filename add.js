function addNumbers(x,y) {
    return x+y;
}

console.log(addNumbers(2,5));

function evenNumbers(number){
    let result = number.filter(number => number % 2 == 0);

    return result;
}

module.exports = {addNumbers, evenNumbers}