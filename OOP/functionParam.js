function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log(this.name);
    }
}
const PersonOne = new Person('Blessing', 25);
console.log(PersonOne.name);


function Human(_name, _age) {
    this.name = _name;
    this.age = _age;
}

function Eployee(_name, _age, _designation){
    this.designation = _designation;
    this.setAge = newage => {
        console.log('setting age from ${this.age} to ${newage}')
    }
}
    }
}