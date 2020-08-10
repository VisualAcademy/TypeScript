var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//[?] 상속(Inheritance): 부모 클래스의 기능을 자식 클래스에서 물려받아 사용
var InheritanceDemo;
(function (InheritanceDemo) {
    // 부모 클래스 선언
    var Parent = /** @class */ (function () {
        function Parent() {
            this.foo = function () { return console.log('부모 클래스의 멤버 호출'); };
        }
        return Parent;
    }());
    // 자식 클래스 선언
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bar = function () { return console.log('자식 클래스의 멤버 호출'); };
            return _this;
        }
        return Child;
    }(Parent));
    // 자식 클래스의 인스턴스 생성 
    var child = new Child();
    child.foo(); // 부모 클래스의 멤버 호출
    child.bar(); // 자식 클래스의 멤버 호출
})(InheritanceDemo || (InheritanceDemo = {}));
//# sourceMappingURL=InheritanceDemo.js.map