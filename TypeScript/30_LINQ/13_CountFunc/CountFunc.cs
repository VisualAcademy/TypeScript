using System;
using System.Linq;

class CountFunc
{
    static void Main()
    {
        bool[] blns = { true, false, true, false, true };

        console.log(blns.Count()); // 5
        console.log(blns.Count(bln => bln == true)); // 3
        console.log(blns.Count(bln => bln == false)); // 2
    }
}
