//[?] 문자열 관련 메서드 사용하기
var StringFunction;
(function (StringFunction) {
    var message = "hello, World!";
    console.log(message.toUpperCase()); // 대문자
    console.log(message.toLowerCase()); // 소문자
    // 바꾸기
    console.log(message.replace("hello", "안녕하세요.").replace("World", "세계."));
})(StringFunction || (StringFunction = {}));
