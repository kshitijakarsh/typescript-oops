"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    greeting = "Hello, World!";
    constructor(message) {
        // this way of assignment is safer and better than directly assigning the value to the property as it allows us to check if the message is undefined before assigning it to the greeting property. This can help prevent runtime errors if the message is not provided when creating an instance of the Greeter class.
        if (message !== undefined) {
            this.greeting = message;
        }
        // this.greeting = message;
    }
}
const g = new Greeter("Hi there!");
// in case of no constructor, the value of g will be "Hello, World!" as it is the default value assigned to the greeting property.
console.log(g.greeting); // Output: Hi there!
// g.err(); // This will cause a compile-time error due to the attempt to modify a read-only property.
//# sourceMappingURL=cll2.js.map