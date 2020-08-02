using System;

class IfElseIfElse
{
    static void Main()
    {
        let number1 = 10;
        let number2 = 20;

        if (number1 > number2) // 조건 처리 1
        {
            console.log("number1이 더 큽니다.");
        }
        else if (number1 < number2) // 조건 처리 2
        {
            console.log("number2가 더 큽니다.");
        }
        else
        {
            console.log("둘 다 같습니다.");
        }
    }
}
