class Greeter{
    readonly greeting: string = "Hello, World!";

    constructor(message: string){

        // this way of assignment is safer and better than directly assigning the value to the property as it allows us to check if the message is undefined before assigning it to the greeting property. This can help prevent runtime errors if the message is not provided when creating an instance of the Greeter class.

        if(message !== undefined){
            this.greeting = message;
        }

        // this.greeting = message;
    }

    // whenever a constructor is used, we need to necessarily pass some value to be assigned, if no value is passed then the default greeting value i.e. "Hello, World!" will be assigned to the greeting property.

    // err(){
    //     this.greeting = "not ok"; // Error: Cannot assign to 'greeting' because it is a read-only property.
    // }
}

const g = new Greeter("Hi there!");

// in case of no constructor, the value of g will be "Hello, World!" as it is the default value assigned to the greeting property.

console.log(g.greeting); // Output: Hi there!

// g.err(); // This will cause a compile-time error due to the attempt to modify a read-only property.