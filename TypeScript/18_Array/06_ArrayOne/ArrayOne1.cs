﻿//[?] 1차원 배열을 선언/초기화하는 프로그램
using System;

class ArrayOne1
{
    static void Main()
    {
        int[] intArray; // 일차원 배열 선언
        intArray = new int[3]; // 메모리 영역 확보(0, 1, 2)

        intArray[0] = 1; // 배열 초기화
        intArray[1] = 2;
        intArray[2] = 3;

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
