using System;

class FuncParameter
{
    // 메서드의 매개 변수로 람다 식 전달 
    static void Calc(let x, let y, Func<int, int, int> calc) => console.log(calc(x, y));
    
    {
        Calc(3, 5, (x, y) => x + y);
        Calc(3, 5, (x, y) => x * y);
    }
}
