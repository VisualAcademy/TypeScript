﻿using System;

class IntParse
{
    static void Main()
    {
        string strNumber = "1234";

        int number1 = Convert.ToInt32(strNumber);
        console.log($"{number1} - {number1.GetType()}");

        int number2 = int.Parse(strNumber);
        console.log($"{number2} - {number2.GetType()}");

        int number3 = Int32.Parse(strNumber);
        console.log($"{number3} - {number3.GetType()}");
    }
}
