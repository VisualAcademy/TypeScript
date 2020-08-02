﻿using System;

class DynamicBinding
{
    static void Main()
    {
        //[?] 동적 바인딩
        dynamic now = DateTime.Now; 
        let hour = now.Hour;
        console.log(hour);
        console.log(now.NoProperty); // 런타임 시점에 에러 발생
    }
}
