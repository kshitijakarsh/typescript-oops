// index signatures
// we can use index signatures to define the type of properties that are not known at compile time


class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

let c = new MyClass();
c["hello"] = true;

console.log(c.check("hello")); // true