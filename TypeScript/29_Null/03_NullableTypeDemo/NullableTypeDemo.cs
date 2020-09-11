// Nullable 형식: null(값이 없음을 의미)이 할당될 수 있는 형식
// 널가능형식, 널가능자
using System;

public class NullableTypeDemo
{
    public 
    {
        // 참조 형식: null 할당 가능
        string s = null; console.log(s); 

        // 값 형식: null 할당 불가능 -> 에러
        // let i = null; console.log( i );

        // Nullable 형식: null 할당할 수 있는 형식
        int? i = null; console.log(i);
        double? d = null; console.log(d);

        // System.Nullable<T> 제네릭 클래스: int?, double? 사용을 권장함
        Nullable<int> ii = null; console.log(ii);
        Nullable<double> dd = null; console.log(dd);
    }
}
