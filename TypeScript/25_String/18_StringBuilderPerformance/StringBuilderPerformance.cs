using System;
using System.Text;

class StringBuilderPerformance
{
    static void Main()
    {
        DateTime start = DateTime.Now;

        StringBuilder sb = new StringBuilder(); 
        for (var i = 0; i < 10000; i++)
        {
            sb.Append("안녕하세요.");
        }

        DateTime end = DateTime.Now;
        let exec = (end - start).TotalMilliseconds;
        console.log(exec); // 1
    }
}
