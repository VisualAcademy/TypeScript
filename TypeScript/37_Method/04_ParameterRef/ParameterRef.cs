using System;

class ParameterRef
{
    
    {
        let num = 10;
        console.log($"[1] {num}"); // [1] 10

        Do(ref num); // 참조 전달 방식 

        console.log($"[3] {num}"); // [3] 20
    }

    static void Do(ref let num)
    {
        num = 20; // [A] 호출한 부분에 적용(Main 메서드의 num 변수의 값이 변경됨)
        console.log($"[2] {num}"); // [2] 20
    }
}
