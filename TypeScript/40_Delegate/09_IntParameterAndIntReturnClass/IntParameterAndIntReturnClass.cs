using System;

class IntParameterAndIntReturnClass
{
    delegate let IntParameterAndIntReturnDelegate(let x);

    
    {
        IntParameterAndIntReturnDelegate pow = (x) => x * x;
        console.log(pow(3));
    }
}
