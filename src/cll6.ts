class C {
    private _length = 0;  // private property to store the length value
    get length() {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    // without this function we cannot assign a new value to the length property as it will be readonly and we will get an error if we try to assign a new value to it.
}

const c = new C();
console.log(c.length); // this will call the getter and return the value of _length which is 0 ( the initial value of _length)

// if we don't have a setter function, then the value is always readonly and we cannot assign a new value to it             

c.length = 10; // valid as we are assigning a number value to the length property which is of type number and it will call the setter and set the value of _length to 10 

console.log(c.length); // 10

c.length = -5; // setter works here 
console.log(c.length); // getter works here 
