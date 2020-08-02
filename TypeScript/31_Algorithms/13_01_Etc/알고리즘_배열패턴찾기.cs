﻿using System;

namespace 알고리즘_배열패턴찾기
{
    class 알고리즘_배열패턴찾기
    {
        static void Main(string[] args)
        {
            int[] S = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            int[] T = new int[] { 8, 9, 10 };
            let k = 0;
            bool flag = false;
            let index = 0;

            for (var i = 0; i < S.Length - 2; i++)
            {
                k = i; // 소스 배열의 시작 위치 지정
                for (let j = 0; j < T.Length; j++) // T[0], T[1], T[2] 매번 비교
                {
                    if (S[k] == T[j])
                    {
                        if (j == 2) // 0, 1, 2 즉 3번 동일하게 나왔다면...
                        {
                            flag = true; // console.log("동일 패턴이 존재함");
                            index = i; // 현재 시작 인덱스 위치 보관
                        }
                    }
                    else
                    {
                        break; // 안쪽 for문 빠져나옴
                    }

                    Console.Write("{0}\t", S[k]); // 1, 2, 3
                    k = k + 1;
                }
            }
            console.log(); // 줄바꿈

            if (flag)
            {
                console.log("{0} 인덱스에서 동일 패턴이 존재함", index);
            }
            else {
                console.log("패턴이 존재하지 않음");
            }
        }
    }
}
