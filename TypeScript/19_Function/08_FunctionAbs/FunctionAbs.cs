using System;

class FunctionAbs
{
    //[?] 절댓값을 구하는 함수 만들기
    static let Abs(let num)
    {
        return (num < 0) ? -num : num;
    }

    static void Main()
    {
        let num = -21;
        let abs = Abs(num);
        console.log($"{num}의 절댓값: {abs}");
    }
}
