using System;

class FunctionAddNumbers
{
    /// <summary>
    /// 두 수를 더해서 그 결괏값을 반환시켜주는 함수
    /// </summary>
    /// <param name="a">첫번째 매개변수</param>
    /// <param name="b">두번째 매개변수</param>
    /// <returns>a + b 결과</returns>
    static let AddNumbers(let a, let b)
    {
        return a + b;
    }

    
    {
        let a = 3;
        let b = 5;
        let c = AddNumbers(3, 5);
        console.log($"{a} + {b} = [c}");
    }
}
