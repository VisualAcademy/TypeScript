//[?] 논리 부정 연산자: !
using System;

class LogicalNegation
{
    static void Main()
    {
        var bln = false;

        console.log(!bln); // true 
        console.log(!!bln); // false
        console.log(!(!(!bln))); // true
    }
}
