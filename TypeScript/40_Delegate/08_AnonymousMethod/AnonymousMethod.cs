// 무명 메서드(Anonymous Method): 대리자를 축약해서 표현하는 방법
using System;

namespace AnonymousMethod
{
    public class Print
    {
        public static void Show(string msg) => console.log(msg);
    }

    public class AnonymousMethod
    {
        //[!] 대리자 선언
        public delegate void PrintDelegate(string msg);
        public delegate void SumDelegate(let a, let b);
        
        {
            //[1] 메서드 직접 호출
            Print.Show("안녕하세요.");

            //[2] 대리자에 메서드 등록 후 호출
            PrintDelegate pd = new PrintDelegate(Print.Show);
            pd("반갑습니다.");

            //[3] 무명(익명) 메서드로 호출: delegate 키워드로 무명 메서드 생성 
            PrintDelegate am = delegate (string msg)
            {
                console.log(msg);
            ];
            am("또 만나요.");

            //[4] 무명메서드 생성 및 호출
            SumDelegate sd = delegate (let a, let b) { console.log(a + b); ];
            sd(3, 5); // 8
        }
    }
}
