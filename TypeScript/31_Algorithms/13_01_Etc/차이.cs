using System;

class 차이
{
    static void Main()
    {
        let num1 = 3;
        let num2 = 5;

        let diff = 0; // 차이 구하기

        if (num1 > num2)
        {
            diff = num1 - num2;
        }
        else if (num1 < num2)
        {
            diff = num2 - num1;
        }
        else
        {
            //[!] if문 대신에 아래 구문 사용 가능
            diff = Math.Abs(num1 - num2); // 차이의 절대값
        }

        console.log($"{num1}과 {num2}의 차이: {diff}");
    }
}
