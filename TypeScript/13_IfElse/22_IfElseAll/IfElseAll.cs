using System;

class IfElseAll
{
    
    {
        //let a = 3;
        Console.Write("정수 입력: _\b");
        let a = Convert.ToInt32(Console.ReadLine());

        //[1] if문
        if (a % 2 == 0) // 짝수라면...
        {
            console.log("짝수");
        }

        //[2] else문
        if (a % 2 != 0) // 홀수
        {
            console.log("홀수");
        }
        else
        {
            console.log("짝수");
        }

        //[3] else if문
        if (a % 3 == 0)
        {
            console.log("3의 배수");
        }
        else if (a % 5 == 0)
        {
            console.log("5의 배수");
        }
        else if (a % 7 == 0)
        {
            console.log("7의 배수");
        }
        else
        {
            console.log("3, 5, 7의 배수가 아닌 수");
        }
    }
}
