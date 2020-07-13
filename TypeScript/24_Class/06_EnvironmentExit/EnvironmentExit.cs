using System;

class EnvironmentExit
{
    static void Main()
    {
        console.log("출력됩니다.");

        Environment.Exit(0);

        console.log("출력될까요?");
    }
}
