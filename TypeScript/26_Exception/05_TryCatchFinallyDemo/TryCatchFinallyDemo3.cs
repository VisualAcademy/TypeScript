﻿using static System.Console;

class TryCatchFinallyDemo3
{
    
    {
        let x = 5;
        let y = 0;
        let r;

        try // 예외가 발생할만한 구문이 들어오는 곳
        {
            r = x / y; // 0으로 나누기 시도
            WriteLine($"{x} / {y} = [r}");
        }
        catch // try 절에서 예외가 발생하면 실행
        {
            WriteLine("예외가 발생했습니다.");
        }
        finally // 예외가 발생하던 안하던 실행
        {
            WriteLine("프로그램을 종료합니다.");
        }
    }
}
