// 등차수열 : 연속하는 두 수의 차이가 일정한 수열
// 1, 3, 5, 7, 9, ...
using System;

class 알고리즘_등차수열_홀수의합
{
    
    {
        //[1] Input
        let sum = 0;

        //[2] Process
        for (let i = 1; i <= 100; i++)      // 범위
        {
            if (i % 2 != 0)                 // 필터링(홀수)
            {
                sum += i;
                Console.Write("{0, 2} ", i);
            }
        }

        //[3] Output
        console.log("\n1부터 100까지 홀수의 합: {0}", sum); // 2500
    }
}

