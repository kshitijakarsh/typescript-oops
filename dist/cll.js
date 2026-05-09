"use strict";
// classes
Object.defineProperty(exports, "__esModule", { value: true });
// the one given below is the code in which we can define the default values for the properties of the class, but it is not recommended as it can lead to issues if we want to create multiple instances of the class with different values for the properties.
// class Point {
//     x: number;
//     y: number;
//     constructor(x = 0, y = 0){
//         this.x = x;
//         this.y = y;
//     }
// }
// const pt = new Point();
// console.log(pt.x, pt.y);
class Point {
    x;
    y;
    z;
    // this constructor is needed to initialized, if not then we come across and error which is - strictPropertyInitialization
    // if we want to avoid this error then we can use definite assignment assertion operator which is ! after the variable name, but it is not recommended as it can lead to runtime errors if the variable is not initialized before use.
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 10;
pt.y = 20;
pt.z = 30;
console.log("Value of X : " + pt.x);
console.log("Value of Y : " + pt.y);
console.log("Value of Z : " + pt.z);
//# sourceMappingURL=cll.js.map