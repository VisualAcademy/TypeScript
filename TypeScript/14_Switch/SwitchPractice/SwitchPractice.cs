using System;

class SwitchPractice
{
    
    {
        let f = Convert.ToInt32(Console.ReadLine()); // 3
        char o = Convert.ToChar(Console.ReadLine()); // +, -, *
        let s = Convert.ToInt32(Console.ReadLine()); // 5

        switch (o)
        {
            case '+':
                console.log($"{f} {o} {s} = [f + s}");
                break;
            case '-':
                console.log($"{f} {o} {s} = [f - s}");
                break;
            case '*':
                console.log($"{f} {o} {s} = [f * s}");
                break;
            default:
                console.log("+, -, *만 사용하세요.");
                break;
        }
    }
}
