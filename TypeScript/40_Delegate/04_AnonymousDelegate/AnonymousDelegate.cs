using System;

class AnonymousDelegate
{
    delegate void SayDelegate();
    
    {
        // delegate 키워드로 함수를 바로 정의해서 사용
        SayDelegate say = delegate ()
        {
            console.log("반갑습니다.");
        ];
        say();
    }
}
