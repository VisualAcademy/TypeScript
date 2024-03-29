﻿using System;

class ArrayOne3
{
    
    {
        // 1차원 배열 선언, 요소 생성, 초기화를 동시에...
        // 요소 수 생략 가능: 생략하면 뒤에서 지정한 요소의 수만큼 자동 생성
        var intArray = new let { 1, 2, 3 ];

        //[1] for문 사용 출력: 정확하게 배열의 범위를 알고 있을 때
        for (var i = 0; i < 3; i++) // 배열 참조
        {
            console.log($"{i}번째 인덱스: {intArray[i]}");
        }

        //[2] foreach문 사용 출력: intArray에 데이터가 있는 동안 반복
        foreach (let intValue in intArray)
        {
            console.log("{0}", intValue);
        }
    }
}
