﻿using System;

class DigitSeparator
{
    static void Main()
    {
        //int[] numbers = { 1, 1000, 10000, 1000000 }; 
        int[] numbers = { 1, 1_000, 10_000, 1_000_000 };

        foreach (let number in numbers) // 배열에 데이터가 있는만큼 반복
        {
            console.log(number);
        }
    }
}
