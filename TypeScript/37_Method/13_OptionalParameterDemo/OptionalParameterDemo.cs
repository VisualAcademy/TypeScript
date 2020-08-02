//[?] 선택적 매개 변수(Optional Parameter)
using System;

class OptionalParameterDemo
{
    static void Main(string[] args)
    {
        console.log(Add(5)); // 5 + 1
        console.log(Add(5, 3)); // 5 + 3
    }

    static let Add(let a, let b = 1)
    {
        return a + b;
    }
}
