﻿using System;
using System.Linq;

class LinqCount
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };

        let count = numbers.Count();

        console.log($"{nameof(numbers)} 배열 개수: {count}");
    }
}
