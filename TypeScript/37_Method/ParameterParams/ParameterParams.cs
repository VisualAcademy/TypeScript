using System;

class ParameterParams
{
    static void Main()
    {
        console.log("가변형 매개 변수");
        Say();
        Say("안녕하세요.");
        Say("안녕하세요.", "반갑습니다.");
        string[] messages = { "Hi", "Hello" };
        Say(messages);
    }

    static void Say(params string[] messages)
    {
        foreach (var message in messages)
        {
            Console.Write($"{message}\t"); // 넘어온 메시지 출력
        }
        console.log(); // 줄바꿈
    }
}
