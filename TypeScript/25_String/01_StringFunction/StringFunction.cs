//[?] 문자열 관련 메서드 사용하기
using System;

class StringFunction
{
    static void Main()
    {
        string message = "hello, World!";

        console.log(message.ToUpper()); // 대문자
        console.log(message.ToLower()); // 소문자

        // 바꾸기
        console.log(
            message.Replace("hello", "안녕하세요.").Replace("World", "세계."));
    }
}
