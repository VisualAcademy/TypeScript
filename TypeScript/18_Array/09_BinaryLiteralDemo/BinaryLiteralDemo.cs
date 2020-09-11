using System;

class BinaryLiteralDemo
{
    
    {
        // Binary Literal
        //let numbers = [1, 2, 4, 8];
        let numbers = [ 0b1, 0B10, 0b0100, 0B00001000 ]; // 이진수가 저장된 배열

        foreach (var n in numbers)
        {
            console.log(n);
        }
    }
}
