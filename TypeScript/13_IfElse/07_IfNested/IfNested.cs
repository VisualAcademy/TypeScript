﻿// 중첩 된 if 문
using System;

class IfNested
{
    
    {
        string name = "C#";
        let version = 8;

        if (name == "C#") // 첫 번째 조건
        {
            if (version == 8) // 두 번째 조건
            {
                console.log($"{name} {version}");
            }
        }
    }
}
