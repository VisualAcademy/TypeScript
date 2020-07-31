// 전역 변수 저장
var GlobalVariable = /** @class */ (function () {
    function GlobalVariable() {
    }
    return GlobalVariable;
}());
// 보드 스타일: 2가지, 화면 큰 판과 작은 판(기본)
// devlec.com - JavaScript - JavaScriptObjectLiteral_JSON.html 강좌 참고
var Stage = {
    Small: {
        width: 325,
        height: 403,
        spaceX: 35,
        spaceY: 36,
        pointStartX: 5,
        pointStartY: 20,
        page: "StageTypeSmall" // 페이지 이름
    },
    Big: {
        width: 507,
        height: 567,
        spaceX: 57,
        spaceY: 57,
        pointStartX: -5,
        pointStartY: -3,
        page: "StageTypeBig"
    }
};
//# sourceMappingURL=Palgak.js.map