﻿using System;

class LocalFunctionAdd
{
    
    {
        // 로컬 함수 만들기
        let Add(let a, let b) => a + b;
        decimal Subtract(decimal x, decimal y) => x - y;

        // 로컬 함수 사용하기 
        console.log($"3 + 5 = [Add(3, 5)}");
        console.log($"34.56 - 12.34 = [Subtract(34.56M, 12.34M)}");
    }
}
