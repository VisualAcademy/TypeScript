// 인터페이스는 클래스에 포함될 수 있는 속성 또는 메서드에 대한 표준 규약 제공
var Interface;
(function (Interface) {
    // 클래스 선언 및 인터페이스 상속 
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.go = function () {
            console.log('인터페이스에 정의된 모든 멤버를 반드시 구현해야 합니다.');
        };
        return Car;
    }());
    var car = new Car();
    car.go();
})(Interface || (Interface = {}));
//# sourceMappingURL=Interface.js.map