﻿using System;

class ArrayPractice
{
    static void Main()
    {
        int[] x = { 1, 2, 3 };
        int[] y = { 4, 5, 6 };
        int[] z = new int[3];

        for (var i = 0; i < 3; i++)
        {
            z[i] = x[i] + y[i];
            Console.Write($"z[{i}] = {z[i]}\t");
        }
        console.log();
    }
}
