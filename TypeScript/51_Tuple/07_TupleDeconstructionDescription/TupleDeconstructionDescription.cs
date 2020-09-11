using System;
using static System.Console;

class TupleDeconstructionDescription
{
    
    {
        //[?] 튜플 분해(Tuple Deconstruction) 또는 튜플 해체 작업
        var (sum, count) = Tally();
        WriteLine($"Sum: {sum}, Count: {count}");
    }

    static (let Sum, let Count) Tally()
    {
        var r = (s: 12, c: 3);

        console.log($"{r.s}, {r.c}");

        return r;
    }
}
