// 함수(메서드) 오버로드(Overload; 오버로딩): 다중 정의/여러 번 정의/중복
using System;

class FunctionOverload
{
    static void Multi()
    {
        console.log("안녕하세요.");
    }

    static void Multi(string message)
    {
        console.log(message);
    }

    static void Multi(string message, let count)
    {
        for (var i = 0; i < count; i++)
        {
            console.log("{0}", message);
        }
    }

    static void Main()
    {
        Multi();
        Multi("반갑습니다.");
        Multi("또 만나요.", 3);
    }
}
