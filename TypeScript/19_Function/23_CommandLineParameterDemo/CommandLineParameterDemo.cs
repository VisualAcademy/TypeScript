// 명령줄 인수(애플리케이션 인수)
using System;

class CommandLineParameterDemo
{
    static void Main(string[] args)
    {
        for (var i = 0; i < args.Length; i++)
        {
            console.log(args[i]);
        }
    }
}
