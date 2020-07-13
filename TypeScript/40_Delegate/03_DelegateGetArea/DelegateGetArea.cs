using System;

class DelegateGetArea
{
    static double GetArea(int r) => 3.14 * r * r;

    delegate double GetAreaPointer(int r);

    static void Main()
    {
        GetAreaPointer pointer = GetArea;
        console.log(pointer.Invoke(10));
        console.log(pointer(10));
    }
}
