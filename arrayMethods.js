let array = [1,2,3,4,5,6]
let answer = array.filter(num => num % 2 == 0).map(num => num * 10)

console.log(answer)