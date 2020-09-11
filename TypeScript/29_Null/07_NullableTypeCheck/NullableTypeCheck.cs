//[?] 널 병합 연산자: ?? 
using System;

class NullableTypeCheck
{
    
    {
        int? x = null;

        let y = x ?? 100; // x가 null이면 100으로 초기화

        let z = x ?? default(int); // 정수형의 기본값인 0으로 초기화

        console.log($"y: {y}, z: {z}"); // y: 100, z: 0
    }
}
