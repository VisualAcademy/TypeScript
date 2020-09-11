#define YES // #define NO

using System;

class DefineDemo
{
    
    {
#if YES
        // #define YES가 정의되어 있으면 현재 구문 실행
        console.log("YES");
#else
        console.log("NO");
#endif
    }
}
