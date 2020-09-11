using System;

class NullCoalescingOperator
{
    
    {
        int? value = null; // null 가능 형식에 null로 초기화
        let defaultValue = value ?? -1; // value가 null이면 -1 대입
        console.log(defaultValue); // -1
    }
}
