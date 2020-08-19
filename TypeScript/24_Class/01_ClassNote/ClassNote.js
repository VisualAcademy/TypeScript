// ClassNote.ts: 클래스 레벨의 메서드 호출
var ClassNote;
(function (ClassNote) {
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.run = function () {
            console.log("[1] Car 클래스의 정적 메서드 run 메서드 실행");
        };
        Car.prototype.go = function () {
            console.log("[2] Car 클래스의 인스턴스 메서드 go 메서드 실행");
        };
        return Car;
    }());
    Car.run(); //[1] 클래스.메서드() 형태로 호출
    var car = new Car();
    car.go(); //[2] 개체.메서드() 형태로 호출
})(ClassNote || (ClassNote = {}));
//# sourceMappingURL=ClassNote.js.map