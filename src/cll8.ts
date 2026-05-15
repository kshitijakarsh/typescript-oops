// implements clause

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// since we have the ping method in Pingable interface marked as required, we need to have it in all the classes that implement that.

// additionally if we implement any interface in a class, we can only call the functions that are defined in that interface and nothing else, even if we have other functions in that class, we cannot call them directly without type assertion or type casting.

// class Ball implements Pingable {
//     pong() {
//         console.log("pong!");
//     }

//     pong = () => {
//         console.log("pong!");
//     }
// }

const sonar = new Sonar();
sonar.ping(); // ping!

interface A {
  x: number;
  y?: number;
}

class C implements A {
  x: number;
  constructor(x = 0, y = 0) {
    this.x = x;
  }
}

const c = new C();
console.log(c.x); // 10
// console.log(c.y); // undefined

// since y is an optional property in the interface A, we can choose to not initialize it in the class C and it will not throw any error, but if we try to access it then it will return undefined.