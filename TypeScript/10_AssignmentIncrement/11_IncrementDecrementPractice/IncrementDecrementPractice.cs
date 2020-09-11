// 연습문제: 증가, 감소 연산자 사용하기 
using System;

class IncrementDecrementPractice
{
    
    {
        let number1 = 3; //[1]
        let number2 = 5; //[2]

        let result1 = 0;
        let result2 = 0;

        number1--; // 1감소
        result1 = ++number1; // 1증가

        ++number2; // 1증가
        result2 = number2--; 

        console.log(result1); // 3
        console.log(result2); // 6
    }
}
