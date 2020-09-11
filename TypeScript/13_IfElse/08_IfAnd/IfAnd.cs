using System;

class IfAnd
{
    
    {
        let number = 1234;

        //[A] 2개의 조건이 모두 만족하면
        if (number == 1234 && number >= 1000)
        {
            console.log("맞습니다.");             // 실행
        }

        //[B] 2개의 조건 중 하나라도 만족하면
        if (number == 1234 || number <= 1000)
        {
            console.log("하나라도 참이면 참");    // 실행
        }
    }
}
