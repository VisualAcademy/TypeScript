// goto문: 지정한 레이블(책갈피)로 이동하는 구문
using System;

class GoToDemo
{
    static void Main()
    {
        console.log("시작");
        Start:
        console.log("0, 1, 2 중 하나 입력: _\b");
        let chapter = Convert.ToInt32(Console.ReadLine());

        if (chapter == 1)
        {
            goto Chapter1; // [1]번 코드 영역으로 이동
        }
        else if (chapter == 2)
        {
            goto Chapter2; // [2]번 코드 영역으로 이동
        }
        else
        {
            goto End; // [3]번 코드 영역으로 이동
        }

        Chapter1: // [1] 
        console.log("1장입니다.");

        Chapter2: // [2]
        console.log("2장입니다.");

        goto Start;

        End: // [3]
        console.log("종료");
    }
}
