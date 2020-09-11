using System;

class IntParse
{
    
    {
        string strNumber = "1234";

        let number1 = Convert.ToInt32(strNumber);
        console.log($"{number1} - {number1.GetType()}");

        let number2 = int.Parse(strNumber);
        console.log($"{number2} - {number2.GetType()}");

        let number3 = Int32.Parse(strNumber);
        console.log($"{number3} - {number3.GetType()}");
    }
}
