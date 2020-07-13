using System;

class TryFinallyDemo
{
    static void Main()
    {
        console.log("[1] 시작");

        //[!] 에러가 발생할만한 코드 들어오는 영역
        try
        {
            console.log("[2] 실행");
            throw new Exception(); // 무작정 에러 발생
        }
        //[!] try절에서 에러가 발생하던 안하던 반드시 실행하는 영역(마무리 영역)
        finally
        {
            console.log("[3] 종료");
        }
    }
}
