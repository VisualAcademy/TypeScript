using System;

class DigitSeparatorDescription
{
    static void Main()
    {
        // Digit Separator
        let num = 1_000_000; // 1,000,000의 표현 방식
        int[] numbers = { 0b1, 0B10, 0b0100, 0B0000_1000 };

        console.log(num);
        foreach (var n in numbers)
        {
            console.log(n);
        }
    }
}
