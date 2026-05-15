// super class, this is used to override any base class methods, and to add any new methods that are needed.

class Base {
    greet(){
        console.log("Hello from Base Class!");
    }
}

class Derived extends Base {
    greet(name? : string){
        if(name === undefined){ 
            // super.greet();
            console.log("Hello from Derived Class!");
        } else {
            console.log(`Hello, ${name}!`);
        }
    }
}

const d = new Derived();
d.greet(); // Hello from Base Class!
d.greet("Alice"); // Hello, Alice!

// in the above code we have a base class called Base which has a method greet and a derived class called Derived which extends the Base class and overrides the greet method. We can call the greet method of the base class using super.greet() and we can also add new functionality to the greet method in the derived class.