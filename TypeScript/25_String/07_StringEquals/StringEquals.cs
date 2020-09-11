//[?] 문자열 비교하는 2가지 방법 정리
using System;

class StringEquals
{
    
    {
        string userName = "RedPlus";
        string userNameInput = "redPlus";

        //[1] == 연산자 사용
        if (userName.ToLower() == userNameInput.ToLower())
        {
            console.log("[1] 같습니다.");
        }

        //[2] string.Equals() 메서드 사용
        if (string.Equals(userName, userNameInput,
            StringComparison.InvariantCultureIgnoreCase))
        {
            console.log("[2] 같습니다.");
        }
    }
}
