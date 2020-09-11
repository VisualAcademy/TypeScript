﻿using System;

class ExceptionHandling
{
    
    {
        let a = 3;
        let b = 0;

        try
        {
            //[1] b가 0이므로 런타임 에러 발생
            a = a / b;
        }
        catch (Exception ex)
        {
            console.log($"예외(에러)가 발생됨: {ex.Message}");
        }
        finally
        {
            console.log("try 구문을 정상 종료합니다.");
        }

        try
        {
            //[2] Exception 클래스에 에러 메시지 지정하여 무조건 에러 발생
            throw new Exception("내가 만든 에러");
        }
        catch (Exception e)
        {
            console.log($"예외(에러)가 발생됨: {e.Message}");
        }
        finally
        {
            console.log("try 구문을 정상 종료합니다.");
        }
    }
}
