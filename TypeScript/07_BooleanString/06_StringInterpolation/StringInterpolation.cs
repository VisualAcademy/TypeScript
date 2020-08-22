using System;

class StringInterpolation
{
    static void Main()
    {
        // 문자열 보간(String Interpolation) 
        string message = "String Interpolation";
        console.log("Message: {0}", message); // WriteLine() 메서드 기본 제공
        console.log("Message: " + message); // 더하기 연산자
        console.log($"Message: {message}"); // 문자열 보간법
    }
}
