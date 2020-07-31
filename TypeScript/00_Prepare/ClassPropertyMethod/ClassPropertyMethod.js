// 클래스
var Point = /** @class */ (function () {
    function Point() {
    }
    // 메서드(함수)
    Point.prototype.Draw = function () {
        console.log("X: " + this.X + ", Y: " + this.Y);
    };
    return Point;
}());
var point = new Point();
point.X = 100;
point.Y = 200;
point.Draw();
//# sourceMappingURL=ClassPropertyMethod.js.map