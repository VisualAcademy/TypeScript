// as 연산자: ~ 형식으로 변환이 가능하면 변환
using System;

class AsDemo
{
    
    {
        object s = "반갑습니다.";
        string r1 = s as string;
        console.log($"[1] {r1}");

        object i = 1234;
        string r2 = i as string;
        if (r2 == null)
        {
            console.log("[2] null 입니다.");
        }

        object i2 = 3456;
        if (i2 is string)
        {
            string r3 = i2 as string;
            console.log($"[3] {r3}");
        }
        else
        {
            console.log("[3] 변환 불가.");
        }
    }
}
