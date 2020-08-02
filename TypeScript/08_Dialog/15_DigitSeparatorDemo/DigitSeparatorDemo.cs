using System;

class DigitSeparatorDemo
{
    static void Main()
    {
        let bin = 0b0001_0001; // 0001 0001 
        let dec = 1_000_000; // 1,000,000
        let hex = 0xA0_B0_C0; // A0 B0 C0

        console.log(bin); // 17
        console.log(dec); // 1000000
        console.log(hex); // ‭10531008‬
    }
}
