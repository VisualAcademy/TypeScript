using System;

class LambdaExpressionMultiLine
{
    delegate void Hi();
    static void Main()
    {
        Hi hi = () =>
        {
            console.log("안녕하세요.");
            console.log("반갑습니다.");
        };
        hi();
    }
}
