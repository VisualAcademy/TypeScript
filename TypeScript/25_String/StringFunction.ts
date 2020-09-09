//[?] 문자열 관련 메서드 사용하기
namespace StringFunction {
    let message: string = "hello, World!";

    console.log(message.toUpperCase()); // 대문자
    console.log(message.toLowerCase()); // 소문자

    // 바꾸기: 메서드 체이닝으로 여러 번 호출 가능
    console.log(
        message.replace("hello", "안녕하세요.").replace("World", "세계."));
}
