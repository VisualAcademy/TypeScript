//[?] System.String 클래스 == string 키워드
var StringClass;
(function (StringClass) {
    var s1 = new String("안녕하세요."); // String 클래스
    var s2 = "반갑습니다."; // string 키워드
    console.log(s1 + " " + s2);
})(StringClass || (StringClass = {}));
