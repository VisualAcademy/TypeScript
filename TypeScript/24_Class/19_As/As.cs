using System;

class As
{
    static void Main()
    {
        object x = 1234;         
        string s = x as string;
        console.log(s == null ? "null" : s);
    }
}
