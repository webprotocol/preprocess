var Hello = (function () {
    function Hello() {
        this.num1 = 10;
        this.num2 = 20;
        console.log("constructor()...");
        console.log("constructor()...");
        console.log("constructor()...");
    }
    Hello.prototype.calc = function () {
        return this.num1 + this.num2;
    };
    return Hello;
}());
var h = new Hello();
console.log("h = " + h.calc());
console.log("h = " + h.calc());
console.log("h = " + h.calc());
