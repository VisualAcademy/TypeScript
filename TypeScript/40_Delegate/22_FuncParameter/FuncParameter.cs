using System;

class FuncParameter
{
    // 메서드의 매개 변수로 람다 식 전달 
    static void Calc(int x, int y, Func<int, int, int> calc) => console.log(calc(x, y));
    static void Main()
    {
        Calc(3, 5, (x, y) => x + y);
        Calc(3, 5, (x, y) => x * y);
    }
}
