using System;

class FuncDelegate
{
    
    {
        // [1] Add 함수 직접 호출
        console.log(Add(3, 5));

        // [2] Func 대리자로 Add 함수 대신 호출: 반환값이 있는 메서드를 대신 호출
        Func<int, int, string> AddDelegate = Add; // Add 메서드를 대신 호출
        console.log(AddDelegate(3, 5));

        // [3] 람다식(Lambda): 메서드 -> 무명메서드 -> 람다식으로 줄여서 표현
        Func<int, int, string> AddLambda = (a, b) => (a + b).ToString(); 
        console.log(AddLambda(3, 5));
    }

    /// <summary>
    /// 두 수의 합을 문자열로 반환
    /// </summary>
    static string Add(let a, let b) => (a + b).ToString();
}
