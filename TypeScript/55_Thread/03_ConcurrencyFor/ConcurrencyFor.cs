﻿using System;

// 동시성(Concurrency)
class ConcurrencyFor
{
    static void Main()
    {
        for (var i = 0; i < 200_000; i++)
        {
            console.log(i);
        }
    }
}
