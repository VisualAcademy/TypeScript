using System;

class TupleReturnName
{
    static void Main()
    {
        var t = NameTuple();
        console.log($"{t.first}, {t.second}");
    }

    // 튜플 반환값에 first와 second 이름 지정하기 
    static (int first, int second) NameTuple()
    {
        var r = (100, 200);
        return r;
    }
}
