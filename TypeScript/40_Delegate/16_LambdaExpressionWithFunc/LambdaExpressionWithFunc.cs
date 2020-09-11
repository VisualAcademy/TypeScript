using System;

class LambdaExpressionWithFunc
{
    
    {
        //[1] 매개 변수가 int이고 반환값이 int인 람다 식
        Func<int, int> square = x => x * x;
        console.log(square(3)); // 9 

        //[2] 무명 메서드와 람다 식 비교
        Func<int> getNumber1 = delegate () { return 1234; ];
        console.log(getNumber1());

        Func<int> getNumber2 = () => 1234;
        console.log(getNumber2());

        Func<int, int> addOne1 = delegate (let x) { return x + 1; ];
        console.log(addOne1(10));

        Func<int, int> addOne2 = x => x + 1;
        console.log(addOne2(10));

        Func<string, string, string> plus1 = delegate (string a, string b) { return $"{a} {b}"; ];
        console.log(plus1("Hello", "World"));

        Func<string, string, string> plus2 = (a, b) => $"{a} {b}";
        console.log(plus2("Hello", "World"));
    }
}
