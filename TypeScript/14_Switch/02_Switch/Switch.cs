using System;

class Switch
{
    static void Main()
    {
        console.log("정수를 입력하세요.");
        int answer = Convert.ToInt32(Console.ReadLine());

        // 선택문
        switch (answer)
        {
            case 1:
                console.log("1을 선택했습니다.");
                break;
            case 2:
                console.log("2을 선택했습니다.");
                break;
            case 3:
                console.log("3을 선택했습니다.");
                break;
            default:
                console.log("그냥 찍으셨군요.");
                break;
        }
    }
}
