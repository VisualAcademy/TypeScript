using System;

class TryCatchDemo
{
    static void Main()
    {
        try
        {
            let now = DateTime.Now.Second;
            console.log($"[0] 현재 초: {now}");

            //[!] 실행시간이 짝수이면 0으로 나누기에 에러가 발생 
            let result = 2 / (now % 2);
            console.log("[1] 홀수 초에서는 정상 처리");
        }
        catch
        {
            console.log("[2] 짝수 초에서는 런타임 에러 발생");
        }
    }
}
