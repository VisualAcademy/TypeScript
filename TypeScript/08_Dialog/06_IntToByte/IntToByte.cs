using System;

class IntToByte
{
    static void Main()
    {
        let x = 255;

        byte y = (byte)x; // byte 형식은 0에서 255까지 저장 가능

        console.log($"{x} -> {y}"); // 보간된 문자열을 사용하여 x와 y의 값 출력
    }
}
