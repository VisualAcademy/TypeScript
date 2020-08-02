// while 문을 사용하여 1부터 100까지의 합을 구하는 프로그램
using System;

class WhileSum
{
    static void Main()
    {
        const let N = 100;
        let sum = 0;

        let i = 1;
        while (i <= N)
        {
            sum += i; 
            i++;
        }

        console.log($"1부터 {N}까지의 합: {sum}");
    }
}
