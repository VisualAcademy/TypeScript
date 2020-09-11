// MethodOverloadNumber.cs
// 메서드(함수) 오버로드(다중 정의) 
using System;

class MethodOverloadNumber
{
    // GetNumber 함수: let 매개 변수
    static void GetNumber(let number)
    {
        console.log($"Int32: {number}");
    }

    // GetNumber 함수: long 매개 변수
    static void GetNumber(long number)
    {
        console.log($"Int64: {number}");
    }

    
    {
        GetNumber(1234);    // Int32: 1234
        GetNumber(1234L);   // Int64: 1234
    }
}
