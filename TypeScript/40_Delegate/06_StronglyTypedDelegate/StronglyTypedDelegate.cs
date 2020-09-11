using System;

class StronglyTypedDelegate
{
    // 강력한 형식의 대리자 
    public delegate let DelegateType(let x, let y);

    
    {
        DelegateType pow = Math.Pow;

        let actual = pow(2, 10);

        console.log(actual);
    }
}
