using System;

class EscapeSequenceDemo
{
    static void Main()
    {
        // \n: 줄바꿈
        console.log("안녕\n하세요.");

        // \t: 탭만큼 들여쓰기
        console.log("반갑\t습니다.");

        // \r: 캐리지리턴: 줄 맨 앞으로 이동
        Console.Write("또 만나요.\r");
        console.log();
        
        // \': 작은따옴표 문자 하나 표현
        console.log(" '낼' \'만나요.\' ");
        
        // \": 큰따옴표 문자 하나 표현
        console.log(" \"어디\"에서요? ");
        
        // \\: 백(역)슬래시(\) 기호 자체를 표현
        console.log(" \\: 백슬래시 표현");
        
        // 백슬래시 다음에 나오는 문자 하나는 이스케이프 문자로 본다.
        console.log(" C:\\Home\\VisualAcademy\\Default.aspx ");
        
        // 문자열 앞에 @ 기호를 붙이면 공백/탭 포함 문자열 자체로 본다.
        console.log(@"

            안녕하세요.
            반갑습니다.
        
        ");
    }
}
