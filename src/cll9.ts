class Animal{
    move(){
        console.log("Moving Along!");
    }
}

class Dog extends Animal{
    woof(times : number){
        for(let i = 0; i < times; i++){
            console.log("Woof!");
        }
    }
}

const dog = new Dog();
dog.move(); // Moving Along!
dog.woof(3); // Woof! Woof! Woof!

// in the above code we have a class Animal which has a method move and a class Dog which extends the Animal class and has a method woof. We can create an instance of the Dog class and call both the move and woof methods.