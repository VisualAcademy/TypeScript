// Stact 클래스: LIFO(Last In First Out) 형태의 데이터 저장
// Push(): 스택 구조에 데이터 입력
// Pop(): 스택 구조에서 데이터 출력
// Overflow: 스택이 가득찼을 때 발생
// Underflow: 스택이 비었을 때 발생
using System;
using System.Collections; // 주요 자료구조 관련 클래스들

class StackNote
{
    
    {
        //[1] Stack 클래스의 인스턴스 생성
        Stack stack = new Stack();

        //[2] 데이터 입력
        stack.Push("첫 번째");
        stack.Push("두 번째");
        stack.Push("세 번째"); 

        //[3] 데이터 출력
        console.log(stack.Pop()); // 세 번째
        console.log(stack.Pop()); // 두 번째
        console.log(stack.Pop()); // 첫 번째

        //[!] 비어있는 스택에서 Pop() 요청하면 에러
        try
        {
            console.log(stack.Pop()); // 언더플로우 에러
        }
        catch (Exception ex)
        {
            console.log($"예외 내용: {ex.Message}");
        }
    }
}
