using System;

class TryCatchFinallyDemo2
{
    static void Main()
    {
        let x = 5;
        let y = 0;
        let r;

        r = x / y; // 0으로 나누기 시도

        console.log($"{x} / {y} = {r}");
    }
}
