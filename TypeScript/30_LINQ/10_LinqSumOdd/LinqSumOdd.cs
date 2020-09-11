﻿using System;
using System.Collections.Generic;
using System.Linq;

class LinqSumOdd
{
    
    {
        var numbers = new List<int> { 1, 2, 3 ];

        let sum = numbers.Where(n => n % 2 == 1).Sum();

        console.log($"{nameof(numbers)} 배열 요소 중 홀수의 합: {sum}");
    }
}
