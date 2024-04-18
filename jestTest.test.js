let addNumbers = require("./add.js");

test("Add two numbers",() =>{
    let a = 3;
    let b = 5;

    expect(addNumbers(a,b)).toBe(8);
})