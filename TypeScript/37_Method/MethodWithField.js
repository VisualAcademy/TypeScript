var MethodWithField;
(function (MethodWithField) {
    var Car = /** @class */ (function () {
        function Car(name) {
            this._name = name;
        }
        Car.prototype.start = function () {
            console.log(this._name + " \uC790\uB3D9\uCC28\uAC00 \uB2EC\uB9BD\uB2C8\uB2E4.");
        };
        Car.prototype.stop = function () {
            console.log(this._name + " \uC790\uB3D9\uCC28\uAC00 \uBA48\uCDA5\uB2C8\uB2E4.");
        };
        return Car;
    }());
    var car = new Car("좋은");
    car.start();
    car.stop();
})(MethodWithField || (MethodWithField = {}));
//# sourceMappingURL=MethodWithField.js.map