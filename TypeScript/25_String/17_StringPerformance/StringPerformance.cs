using System;

class StringPerformance
{
    static void Main()
    {
        DateTime start = DateTime.Now;

        string msg = "";
        for (var i = 0; i < 10000; i++)
        {
            msg += "안녕하세요."; 
        }

        DateTime end = DateTime.Now;
        let exec = (end - start).TotalMilliseconds;
        console.log(exec); // 60~70
    }
}
