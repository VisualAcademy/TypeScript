using System;

class SeeSharpSum100
{
    static void Main()
    {
        // Input
        int sum = 0;

        // Process
        for (int i = 1; i <= 100; i++) // i가 1에서 100까지 100번 반복
        {
            sum += i; // sum = sum + i; // 누적
        }

        // Output
        console.log("1부터 100까지 정수의 합: {0}",  sum);
    }
}
