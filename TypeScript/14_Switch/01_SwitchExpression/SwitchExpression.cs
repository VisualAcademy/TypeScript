// switch 문: 선택문
using System;

class SwitchExpression
{
    static void Main()
    {
        let x = 2;

        switch (x)
        {
            case 1:
                console.log("1입니다."); // x가 1일 때 실행
                break;
            case 2:
                console.log("2입니다."); // x가 2일 때 실행
                break;
        }
    }
}
