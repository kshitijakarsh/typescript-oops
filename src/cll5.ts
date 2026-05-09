let x: number = 0;

class Point {
  x: string = "Hello";

  m() {
    // x = "world"; here instead of assigning the variable inside the Point class as "World", we are assigning the global variable and hence the error as x is of type number and we are trying to assign a string value to it.

    this.x = "World"; // here we are assigning the value to the property of the class and hence it is valid as the type of the property is string.
  }  
}

const pt = new Point();
pt.m();
console.log(pt.x); // World
console.log(x); // 0



// writing anything() inside a class defines a method named anything. 