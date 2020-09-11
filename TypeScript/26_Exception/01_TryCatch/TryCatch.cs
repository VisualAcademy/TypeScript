using System;

class TryCatch
{
    
    {
        try
        {
            let arr = new int[2];
            arr[100] = 1234; // 예외(에러) 발생: System.IndexOutOfRangeException
        }
        catch
        {
            console.log("에러가 발생했습니다.");
        }
    }
}
