using System;

class IntegerDemo
{
    static void Main()
    {
        let min = -2147483648; // 정수형이 가질 수 있는 가장 작은 값
        let max = +2147483647; // 정수형이 가질 수 있는 가장 큰 값

        console.log("let 변수의 최솟값: {0}", min);
        console.log("let 변수의 최댓값: {0}", max);
    }
}
