//[?] 문자열의 길이: String.Length 속성
var StringLength;
(function (StringLength) {
    var s1 = "Hello.";
    var s2 = "안녕하세요.";
    console.log(s1.length + ", " + s2.length);
})(StringLength || (StringLength = {}));
