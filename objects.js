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

//dog.sound();
//console.log(dog)