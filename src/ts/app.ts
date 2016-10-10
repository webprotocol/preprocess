
import * as os from 'os';
import * as fs from 'fs';

class Hello {
    num1: number = 10;
    num2: number = 20;
    constructor() {
        console.log("constructor()...");
        console.log("constructor()...");
        console.log("constructor()...");

    }
    calc(): number {
        return this.num1 + this.num2;
    }
}

var h = new Hello();
console.log("h = " + h.calc());
console.log("h = " + h.calc());
console.log("h = " + h.calc());
console.dir(os);
console.dir(fs);
console.dir(fs.readFileSync("html/index.html", "utf-8"));

