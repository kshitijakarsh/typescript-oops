class Point {
  x: number;
  y: number;

  // this is known as constructor overloading, it can be used to create multiple constructors for a class, but in TypeScript we can only have one constructor implementation, so we can use optional parameters and type guards to achieve the same effect.

  // it can be used when we have use cases such as a person wants to create an account with just a username and password, or with a username, password and email, or with a username, password, email and phone number, etc.

  constructor();
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x?: string | number, y?: number) {
    if (typeof x === "string") {
      const len = x.length;
      this.x = len;
      this.y = len;
    } else if (typeof x === "number") {
      this.x = x;
      this.y = y ?? 0;
    } else {
      // handles new Point()

      this.x = 0;
      this.y = 0;
    }
  }
}

const pt = new Point();
console.log(pt.x, pt.y);
