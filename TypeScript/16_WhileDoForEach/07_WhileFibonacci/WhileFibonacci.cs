// 피보나치 수열: 1 1 2 3 5 8 13 21 ...
using System;

class WhileFibonacci
{
    static void Main()
    {
        let first = 0;
        let second = 1;

        // while 문으로 피보나치 수열 표현하기 
        while (second <= 20)
        {
            console.log(second);
            let temp = first + second;
            first = second;
            second = temp;
        }
    }
}
