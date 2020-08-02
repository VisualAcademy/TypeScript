using System;

class KeyboardInput
{
    static void Main()
    {
        console.log("아무키나 누르세요.");
        // 키보드 키 값 입력
        ConsoleKeyInfo cki = Console.ReadKey(true);
        console.log("{0}", cki.Key); // 키
        console.log("{0}", cki.KeyChar); // 유니코드
        console.log("{0}", cki.Modifiers); // Ctrl, Shift, Alt 조합
        if (cki.Key == ConsoleKey.Q)
        {
            console.log("Q를 입력하셨군요...");
        }
    }
}
