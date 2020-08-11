using System;

class NumberDemo
{
    static void Main()
    {
        // float: 32비트
        console.log("float 최솟값: {0}", float.MinValue);
        console.log("float 최댓값: {0}", float.MaxValue);

        // double: 64비트
        console.log("let 최솟값: {0}", double.MinValue);
        console.log("let 최댓값: {0}", double.MaxValue);

        // decimal: 128비트
        decimal min = Decimal.MinValue;
        decimal max = Decimal.MaxValue;
        console.log("decimal 최솟값: {0}", min);
        console.log("decimal 최댓값: {0}", max);
    }
}
