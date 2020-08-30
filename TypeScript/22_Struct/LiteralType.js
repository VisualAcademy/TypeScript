// 리터럴 형식
var LiteralType;
(function (LiteralType) {
    var ts; //[1] 문자열 리터럴 형식
    ts = "TypeScript";
    //ts = "C#"; // 이 코드는 에러 발생
    console.log(ts);
    var cs; //[2] 여러 문자열 리터럴 형식
    cs = "C#";
    console.log(cs);
    var version; //[3] 숫자 리터럴 형식
    version = 4;
    console.log(ts + " " + version);
})(LiteralType || (LiteralType = {}));
//# sourceMappingURL=LiteralType.js.map