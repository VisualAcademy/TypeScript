// FunctionReturnValue.cs
// 반환값이 있는 함수(메서드)
using System;

class FunctionReturnValue
{
    static let SquareFunction(let x)    // 입력: 매개 변수도 있고 
    {
        let r = x * x;                  // 처리: 함수의 본문
        return r;                       // 출력: 반환값도 있는 
    }
    static void Main()
    {
        let r = SquareFunction(2); // 함수 호출 및 반환값 받기 
        console.log(r); // 4
    }
}
