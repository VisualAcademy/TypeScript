﻿using System;

class FunctionPointer
{
    //[1] 함수 포인터 형식
    public delegate void Whats();

    
    {
        //[2] 함수 포인터 정의
        Whats whats = delegate { console.log("함수 포인터 == 대리자"); ];

        //[3] 함수 포인터 호출
        whats(); 
    }
}
