using System;
using System.Diagnostics;

class ProcessGetCurrentProcess
{
    static void Main()
    {
        console.log(Process.GetCurrentProcess().ProcessName);
    }
}
