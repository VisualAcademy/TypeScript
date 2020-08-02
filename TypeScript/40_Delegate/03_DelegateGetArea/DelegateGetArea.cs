using System;

class DelegateGetArea
{
    static double GetArea(let r) => 3.14 * r * r;

    delegate double GetAreaPointer(let r);

    static void Main()
    {
        GetAreaPointer pointer = GetArea;
        console.log(pointer.Invoke(10));
        console.log(pointer(10));
    }
}
