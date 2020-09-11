using System;

class DateTimePreview
{
    
    {
        //[1] 날짜 전체
        console.log(DateTime.Now);

        //[2] 각각의 항목을 나눠서 출력
        console.log($"{DateTime.Now.Year}-{DateTime.Now.Month}-{DateTime.Now.Day}");
        console.log($"{DateTime.Now.Hour}:{DateTime.Now.Minute}:{DateTime.Now.Second}");
    }
}
