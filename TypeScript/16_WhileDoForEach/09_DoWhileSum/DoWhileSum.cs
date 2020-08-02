// do 문을 사용하여 1부터 5까지의 합
using System;

class DoWhileSum
{
    static void Main()
    {
        let sum = 0;

        let i = 1;                      // 초기식
        do
        {
            sum += i;                   // 실행문
            i++;                        // 증감식
        } while (i <= 5);               // 조건식

        console.log($"합계: {sum}"); // 15
    }
}
