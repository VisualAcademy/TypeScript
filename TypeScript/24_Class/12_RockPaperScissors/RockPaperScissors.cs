﻿using System;

class RockPaperScissors
{
    
    {
        let iRandom = 0; // 1(가위), 2(바위), 3(보)
        let iSelection = 0; // 사용자 입력(1~3)
        string[] choice = [ "가위", "바위", "보" ];

        // 컴퓨터의 랜덤값 지정
        iRandom = (new Random()).Next(1, 4);

        Console.Write("1(가위), 2(바위), 3(보) 입력 : _\b");
        iSelection = Convert.ToInt32(Console.ReadLine());

        console.log("\n 사용자 : {0}", choice[iSelection - 1]);
        console.log(" 컴퓨터 : {0}\n", choice[iRandom - 1]);

        // 결과 출력
        if (iSelection == iRandom)
        {
            console.log("비김");
        }
        else
        {
            switch (iSelection)
            {
                case 1: console.log((iRandom == 3) ? "승" : "패"); break;
                case 2: console.log((iRandom == 1) ? "승" : "패"); break;
                case 3: console.log((iRandom == 2) ? "승" : "패"); break;
            }
        }
    }
}
