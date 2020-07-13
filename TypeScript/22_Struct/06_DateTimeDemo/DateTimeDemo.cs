using System;

class DateTimeDemo
{
    static void Main()
    {
        //[1] 현재 시간 출력: DateTime 구조체
        console.log($"현재 시간: {DateTime.Now}");

        //[2] 년, 월, 일, 시, 분, 초 출력
        console.log(DateTime.Now.Year);
        console.log(DateTime.Now.Month);
        console.log(DateTime.Now.Day);
        console.log(DateTime.Now.Hour);
        console.log(DateTime.Now.Minute);
        console.log(DateTime.Now.Second);
        console.log(DateTime.Now.Millisecond);

        //[3] DateTime 형식의 변수 선언 후 속성 또는 메서드 호출
        DateTime now = DateTime.Now;
        console.log(now.Date);
        console.log(now.ToLongTimeString());
    }
}
