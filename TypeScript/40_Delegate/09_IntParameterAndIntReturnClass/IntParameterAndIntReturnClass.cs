using System;

class IntParameterAndIntReturnClass
{
    delegate let IntParameterAndIntReturnDelegate(let x);

    static void Main()
    {
        IntParameterAndIntReturnDelegate pow = (x) => x * x;
        console.log(pow(3));
    }
}
