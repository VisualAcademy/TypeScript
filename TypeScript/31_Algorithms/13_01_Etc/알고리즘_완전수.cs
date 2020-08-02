﻿using System;

class 알고리즘_완전수
{
    static void Main()
    {
        // Count : 자신을 제외한 약수의 합이 자신과 같은 수의 개수를 구하는 변수
        // N, J : 계산 처리를 위한 변수
        // R : 나머지를 저장하는 변수(REM, Remainder) 
        // K : 어떤 수의 모든 약수에서 자신을 제외한 약수 중 최대값
        // SUM : 약수들의 합을 구하는 변수
        let Count = 0; // 카운트
        let Sum = 0; // 약수의 합계
        let K = 0; // 가장 큰 약수
        let R = 0; // 나머지값 임시 보관

        for (let N = 4; N <= 10000; N++) // 10000까지 구하면 완전수 4개가 모두 출력됨
        {
            Sum = 0;
            K = (N / 2); // 모든 짝수를 2로 나누면 가장 큰 약수를 구할 수 있다.
            for (let J = 1; J <= K; J++)
            {
                //R = N % J; // MOD(N, J) : 원본 수를 가장 큰 약수까지 나눠서 나머지 값을 구한다.
                R = N - (N / J) * J; // N % J와 동일한 표현
                if (R == 0) // 나머지 값이 0이면, 즉 나누어 떨어지면 약수이다. 
                {
                    Sum = Sum + J; // (KEY)합계 알고리즘 : 약수(J)의 합계를 누적
                }
            }
            if (N == Sum) // 약수의합이 원본 수와 같으면 완전수임
            {
                // 6, 28, 496, 8128
                console.log("완전수(N) : {0}", N); // 완전수 출력
                Count = Count + 1; // (KEY)카운트 알고리즘 : 공식과 같은 코드겠지요?
            }
        }
        console.log("완전수 개수(Count) : {0}", Count);
    }
}
