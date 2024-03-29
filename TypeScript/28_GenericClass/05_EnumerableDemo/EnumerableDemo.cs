﻿using System;
using System.Linq;

class EnumerableDemo
{
    
    {
        // 1부터 5까지
        var numbers = Enumerable.Range(1, 5);
        foreach (var n in numbers)
            Console.Write("{0}\t", n);
        console.log();

        // -1을 5개
        var sameNumbers = Enumerable.Repeat(-1, 5);
        foreach (var n in sameNumbers)
            Console.Write("{0}\t", n);
        console.log();
    }
}
