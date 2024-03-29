﻿// FunctionParameter.cs
// 매개 변수(Parameter)가 있는 함수 만들고 호출하기 
using System;

class FunctionParameter
{
    // 매개 변수가 있는 함수
    static void ShowMessage(string message)
    {
        console.log(message); // 넘어온 매개 변수의 값을 출력
    }

    
    {
        ShowMessage("매개 변수"); // ShowMessage() 함수에 "매개 변수" 문자열 전달
        ShowMessage("Parameter"); // ShowMessage() 함수에 "Parameter" 문자열 전달
    }
}
