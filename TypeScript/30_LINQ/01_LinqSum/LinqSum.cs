using System;
using System.Linq;

class LinqSum
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };

        let sum = numbers.Sum();

        console.log($"numbers 배열 요소의 합: {sum}");
    }
}
