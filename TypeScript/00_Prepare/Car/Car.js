/*
    Car.ts
*/
var Car = /** @class */ (function () {
    function Car(color, name) {
        this.color = color;
        this.name = name;
    }
    Car.prototype.gogo = function () {
        console.log(this.color + " \uC0C9 " + this.name + " \uC774\uB984\uC758 \uC790\uB3D9\uCC28\uAC00 \uB2EC\uB9BD\uB2C8\uB2E4.");
    };
    return Car;
}());
var car = new Car("Red", "좋은자동차");
car.gogo();
var myCar = new Car("Blue", "내 자동차");
myCar.gogo();
//# sourceMappingURL=Car.js.map