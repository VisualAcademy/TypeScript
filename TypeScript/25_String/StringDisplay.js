//[?] 문자열 묶는 2가지 표현 방법 정리
var StringDisplay;
(function (StringDisplay) {
    var displayName = "";
    var firstName = "길동";
    var lastName = "홍";
    //[1] 더하기(+) 연산자 사용
    displayName = "이름: " + lastName + firstName;
    console.log(displayName); // 이름: 홍길동
    //[2] 문자열 보간법 사용
    displayName = "\uC774\uB984: " + lastName + firstName;
    console.log(displayName); // 이름: 홍길동 
})(StringDisplay || (StringDisplay = {}));
