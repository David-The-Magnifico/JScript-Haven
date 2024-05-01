function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log(this.name);
    }
}
const PersonOne = new Person('Blessing', 25);
console.log(PersonOne.name);