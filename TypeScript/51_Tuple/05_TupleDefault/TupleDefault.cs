﻿using System;

class TupleDefault
{
    
    {
        var t = ZeroZero();
        console.log($"{t.Item1}, {t.Item2}"); // 0, 0
    }

    // static (int, int) ZeroZero()
    // {
    //     return default((int, int));
    // }
    //static (int, int) ZeroZero() => default((int, int));
    static (int, int) ZeroZero() => default;
}
