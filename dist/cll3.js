"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    x;
    y;
    constructor(x, y) {
        if (typeof x === "string") {
            const len = x.length;
            this.x = len;
            this.y = len;
        }
        else if (typeof x === "number") {
            this.x = x;
            this.y = y ?? 0;
        }
        else {
            // handles new Point()
            this.x = 0;
            this.y = 0;
        }
    }
}
const pt = new Point();
console.log(pt.x, pt.y);
//# sourceMappingURL=cll3.js.map