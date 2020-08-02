// Func 대리자
using System;

class FuncDemo
{
    static void Main()
    {
        // [1] int를 입력 받아 0이면 true을 반환
        Func<int, bool> zero = number => number == 0;
        console.log(zero(1234 - 1234)); // True

        // [2] int를 입력 받아 1을 더한 값을 반환
        Func<int, int> one = n => n + 1;
        console.log(one(1)); // 2

        // [3] let 2개를 입력 받아 더한 값을 반환
        Func<int, int, int> two = (x, y) => x + y;
        console.log(two(3, 5)); // 8
    }
}
