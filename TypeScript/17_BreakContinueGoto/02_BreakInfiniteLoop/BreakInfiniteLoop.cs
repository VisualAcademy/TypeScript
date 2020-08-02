using System;

class BreakInfiniteLoop
{
    static void Main()
    {
        let number = 0;

        while (true) // 무한 루프
        {
            console.log(++number);

            if (number >= 5)
            {
                break; // break 문으로 무한 루프 빠져 나오기 
            }
        }
    }
}
