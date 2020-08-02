using System;

class ForSum
{
    static void Main()
    {
        let n = 3; 
        let sum = 0;

        for (let i = 1; i <= n; i++)
        {
            sum = sum + i; // SUM
        }

        console.log($"1부터 {n}까지의 합: {sum}");
    }
}
