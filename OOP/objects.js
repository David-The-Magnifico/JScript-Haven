let animal ={
    type: "Unknown",
    sound: function(){
        console.log("The " +this.type + "makes a sound");
    }
}

let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "Brown";


let goat = {
    color: "black"
};
Object.setPrototypeOf(goat, animal);
goat.type = "Goat";
console.log(goat);

let vehicle = {wheel: 4};
let car = {
    seats: 5,
    _proto_: vehicle,
    wheels: 6,

};

console.log('vehicle:', vehicle, vehicle._proto_);
console.log('car:', car, car._proto_);
console.log('car.wheel:', car.wheel);