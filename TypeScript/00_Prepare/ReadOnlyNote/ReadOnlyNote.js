var WhitchService = /** @class */ (function () {
    function WhitchService(serviceName) {
        // 읽기 전용 속성은 생성자에 의해서 초기화해서 사용 가능
        this._serviceName = serviceName;
    }
    WhitchService.prototype.run = function () {
        console.log(this._serviceName + " \uAE30\uB2A5\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.");
    };
    return WhitchService;
}());
var file = new WhitchService("[1] 파일 로그");
file.run();
var db = new WhitchService("[2] DB 로그");
db.run();
//# sourceMappingURL=ReadOnlyNote.js.map