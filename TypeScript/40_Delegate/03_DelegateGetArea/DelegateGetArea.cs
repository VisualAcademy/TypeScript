using System;

class DelegateGetArea
{
    static let GetArea(let r) => 3.14 * r * r;

    delegate let GetAreaPointer(let r);

    
    {
        GetAreaPointer pointer = GetArea;
        console.log(pointer.Invoke(10));
        console.log(pointer(10));
    }
}
