﻿using System;

public class Page
{
    public string Message { get; private set; } = "읽기 전용 속성";
}

class PropertyPrivateSet
{
    
    {
        Page page = new Page();
        //page.Message = "외부에서 쓰기 불가능";
        console.log(page.Message); // 읽기 전용 속성
    }
}
