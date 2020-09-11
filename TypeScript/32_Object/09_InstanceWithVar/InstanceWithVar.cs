using System;

public class ExamClass { }

class InstanceWithVar
{
    
    {
        //[1] 클래스를 사용하기 위해 인스턴스 생성
        ExamClass exam1 = new ExamClass(); // 기본 방식
        console.log($"{exam1}");
        //[2] var 키워드를 사용하여 인스턴스 생성
        var exam2 = new ExamClass(); // 축약 방식 
        console.log($"{exam2}");
    }
}
