﻿using System;

class TupleClass
{
    
    {
        var tp = new Tuple<string, bool, decimal>("철수", true, 1_000);
        console.log(
            $"{tp.Item1}(초등학생: {tp.Item2})가 {tp.Item3:C0}원짜리 빵을 샀다.");
    }
}
