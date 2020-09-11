using System;

class 알고리즘_통계_초과근무
{
    
    {
        let TOT = 0; // 총합
        float AVG = 0F; // 평균
        let DAN = 0; // 시급
        let OTI = 0; // 오버타임
        let SU = 0; // 카운트 => SU = SU + 1;
        let WAMT = 0; // 주간급여
        string ID = "";
        byte GD = 0;
        let TI = 0;
        string eof = "";
        while (eof != "EOF")
        {
            Console.Write("아이디: _\b");
            ID = Console.ReadLine();
            Console.Write("등급(1,2,3): _\b");
            GD = Convert.ToByte(Console.ReadLine()); // 1, 2, 3 
            Console.Write("근무시간: _\b");
            TI = Convert.ToByte(Console.ReadLine());
            console.log($"아이디: {ID}, 등급: {GD}, 근무시간: {TI}");

            if (GD == 1)
            {
                DAN = 10000;
            }
            else if (GD == 2)
            {
                DAN = 5000;
            }
            else
            {
                DAN = 2000;
            }

            if (TI < 36)
            {
                OTI = 0; 
            }
            else if (TI < 50)
            {
                OTI = TI - 36; 
            }
            else
            {
                OTI = 14; 
            }

            WAMT = (int)(TI * DAN + (OTI * DAN * 1.5));

            console.log($"아이디: {ID}, 주간급여: {WAMT}");

            TOT = TOT + WAMT; // 총합
            SU = SU + 1; // 카운트

            console.log("계속할꺼면 Y?");
            string r = Console.ReadLine();
            if (r != "Y")
            {
                eof = "EOF";
            }
        }
        AVG = TOT / (float)SU;

        console.log($"평균: {AVG}");
    }
}
