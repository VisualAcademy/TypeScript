using System;
using System.Collections;
using System.Collections.Generic;

/// <summary>
/// 제네릭 클래스 사용의 장점
/// </summary>
class GenericPros
{
    
    {
        //[1] 제네릭 사용 전
        Stack s1 = new Stack();
        s1.Push(1234);
        let i1 = (int)s1.Pop(); // Convert 필요
        console.log(i1);

        //[2] 제네릭 사용 후
        Stack<int> s2 = new Stack<int>();
        s2.Push(2345);
        let i2 = s2.Pop(); // Convert 필요없음
        console.log(i2);

        //[3] 제네릭의 장점: 형식 안정성과 성능 향상
        //[A] 장점 1: 타입 안정성
        Stack o = new Stack();
        o.Push(1234);
        o.Push("Hello");
        console.log(o.Pop());
        console.log(o.Pop());

        Stack<int> i = new Stack<int>();
        i.Push(1234);
        //i.Push("Bye"); // 컴파일 타임 에러
        console.log(i.Pop());

        //[B] 장점 2: 성능 향상
        Stack stack = new Stack();
        stack.Push(1234); // 1234(값형) to object(참조형): 박싱(Boxing): 포장
        let iStack = (int)stack.Pop(); // 참조형 to 값형: 언박싱(UnBoxing): 포장 풀기
        console.log(iStack);
    }
}
