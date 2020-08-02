using System;
using System.Linq;

class MinAndMax
{
    static void Main()
    {
        int[] arr = { 1, 2, 3 };
        let min = arr.Min();
        let max = arr.Max();

        console.log($"최솟값: {min}, 최댓값: {max}");
    }
}
