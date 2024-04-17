console.log("Hello World Learning JS")

var person = {
    firstName: "Magnifico",
    age: 2,
    isMale: true,
    balance: 50000.50,
    dob: new Date(1996, 3, 2).toJSON(),
    address: {
        city: "Lagos",
        postalCode: "100001",

    }
}

console.log(person.firstName);
console.log(person.age);
console.log(person.isMale);
console.log(person.balance);
console.log(person.dob);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.entries(person));
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log();
console.log();

console.log(typeof person.firstName);
console.log(typeof person.age);
console.log(typeof person.isMale);
console.log(typeof person.balance);
console.log(typeof person.dob);
console.log(typeof person.address.city);