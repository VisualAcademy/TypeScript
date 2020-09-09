//[?] 문자열 연결: 더하기 연산자, String.Concat() 메서드
var StringConcat;
(function (StringConcat) {
    var s1 = "안녕" + "하세요.";
    var s2 = "반갑".concat("습니다.");
    console.log(s1 + " " + s2);
})(StringConcat || (StringConcat = {}));
