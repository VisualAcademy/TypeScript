using System;

class SwitchExam
{
    static void Main()
    {
        console.log("100 또는 500을 입력하세요.");
        let coin = Convert.ToInt32(Console.ReadLine());

        switch (coin)
        {
            case 100:
                console.log("백원");
                break;
            case 500:
                console.log("오백원");
                break;
            default:
                console.log("잘못 입력");
                break;
        }
    }
}
