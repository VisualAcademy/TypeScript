using System;

class ExceptionDemo
{
    
    {
        try
        {
            let arr = new int[2];
            arr[100] = 1234;
        }
        catch (Exception ex) // ex 변수에는 예외에 대한 상세 정보가 담김
        {            
            console.log(ex.Message);
        }
    }
}
