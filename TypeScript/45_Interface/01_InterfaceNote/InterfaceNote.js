//[?] 인터페이스: 특정 멤버가 반드시 구현되어야 함을 보증
var InterfaceNote;
(function (InterfaceNote) {
    //[2] ICar 인터페이스를 상속하는 Car 클래스 선언
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.go = function () {
            console.log("인터페이스에 정의된 모든 멤버를 반드시 구현해야합니다.");
        };
        return Car;
    }());
    var car = new Car();
    car.go();
})(InterfaceNote || (InterfaceNote = {}));
//# sourceMappingURL=InterfaceNote.js.map