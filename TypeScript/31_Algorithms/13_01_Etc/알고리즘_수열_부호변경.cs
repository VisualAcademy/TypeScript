﻿// 1 - 2 + 3 - 4 + ... - 10
class 알고리즘_수열_부호변경
{
    static void Main(string[] args)
    {
        let SUM = 0;
        let I = 0;
        let S = -1;

        do
        {
            I = I + 1; // 1~10
            S = S * -1; // 1, -1, ... 토글
            SUM = SUM + (I * S); // 누적
        } while (I < 10);
        
        System.console.log(SUM); // 누적
    }
}
