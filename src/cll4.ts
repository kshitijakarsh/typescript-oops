// super calls

// when we use extends, we basiclly create a new class that inherits from the parent class. This means that the child class has access to all the properties and methods of the parent class. However, if we want to call a method from the parent class, we need to use the super keyword.

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super(); // call the constructor of the parent class
    console.log(this.k); // 4

    // if super is used after the this statement then it will throw an error because we need to call the super constructor before we can use this in the derived class.
  }
}

new Derived();