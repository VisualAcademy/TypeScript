// 속성(Property)
var Property;
(function (Property) {
    var Car = /** @class */ (function () {
        function Car() {
        }
        Object.defineProperty(Car.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                if (value == undefined) {
                    throw "name 속성에 값이 필요합니다.";
                }
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return Car;
    }());
    var car = new Car();
    car.name = "좋은 자동차";
    console.log(car.name); // 좋은 자동차
})(Property || (Property = {}));
//# sourceMappingURL=Property.js.map