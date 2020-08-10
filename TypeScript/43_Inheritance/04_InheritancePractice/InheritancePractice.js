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
var InheritancePractice;
(function (InheritancePractice) {
    var Developer = /** @class */ (function () {
        function Developer() {
            this.toString = function () {
                return "개발자";
            };
        }
        return Developer;
    }());
    var WebDeveloper = /** @class */ (function (_super) {
        __extends(WebDeveloper, _super);
        function WebDeveloper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toString = function () { return "\uC6F9 \uAC1C\uBC1C\uC790"; };
            return _this;
        }
        return WebDeveloper;
    }(Developer));
    var MobileDeveloper = /** @class */ (function (_super) {
        __extends(MobileDeveloper, _super);
        function MobileDeveloper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toString = function () { return "\uBAA8\uBC14\uC77C \uAC1C\uBC1C\uC790"; };
            return _this;
        }
        return MobileDeveloper;
    }(Developer));
    var developer = new Developer();
    console.log("" + developer); // 개발자 
    var web = new WebDeveloper();
    console.log("" + web); // 웹 개발자
    var mobile = new MobileDeveloper();
    console.log("" + mobile); // 모바일 개발자
})(InheritancePractice || (InheritancePractice = {}));
//# sourceMappingURL=InheritancePractice.js.map