var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 추상 클래스
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// 원
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
// 직사각형
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(w, h) {
        var _this = _super.call(this) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.w * this.h;
    };
    return Rectangle;
}(Shape));
// 정사각형
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(size) {
        var _this = _super.call(this) || this;
        _this.size = size;
        return _this;
    }
    Square.prototype.getArea = function () {
        return Math.pow(this.size, 2);
    };
    return Square;
}(Shape));
var circle = new Circle(10);
console.log(circle.getArea()); // 314
var rectangle = new Rectangle(20, 10);
console.log(rectangle.getArea()); // 200
var shape = new Square(10);
var area = shape.getArea();
console.log(area); // 100
//# sourceMappingURL=AbstractClass.js.map