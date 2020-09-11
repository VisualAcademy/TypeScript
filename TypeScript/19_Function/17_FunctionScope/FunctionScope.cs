// Function Scope: 함수(메서드) 범위, 전역 변수와 지역 변수
using System;

public class FunctionScope
{
    static string message = "전역 변수"; // 필드

    static void ShowMessage()
    {
        string message = "지역 변수";
        console.log(message);  // 지역 변수
    }

    
    {
        ShowMessage();
        console.log(message); // 전역 변수
    }
}
