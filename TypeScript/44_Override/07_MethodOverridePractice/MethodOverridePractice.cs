﻿using System;

namespace MethodOverridePractice
{
    public class ParentClass
    {
        public virtual void Hi1() => console.log("기본: 안녕하세요.");
        public void Hi2() => console.log("기본: 반갑습니다.");
        public void Hi3() => console.log("기본: 또 만나요.");
    }

    public class ChildClass : ParentClass
    {
        public override void Hi1() => console.log("파생: 안녕하세요.");
        public new void Hi2() => console.log("파생: 반갑습니다.");
        public new void Hi3() => base.Hi3(); // 기본 클래스의 멤버에 접근
    }

    class Parent
    {
        public void Say() => console.log("부모가 말하다.");
        public void Hi() => console.log("부모가 인사하다.");
        public virtual void Walk() => console.log("부모가 걷다.");
    }

    class Child : Parent
    {
        // 내가 새롭게 정의해서 사용하겠다.
        //public void Say() => console.log("자식이 말하다.");
        // 새롭게 정의 : 오버라이드
        public new void Hi() => console.log("자식이 인사하다.");
        // 새롭게 정의 : 오버라이드(override):재정의
        public override void Walk() => console.log("자식이 걷다.");
    }

    class MethodOverridePractice
    {
        
        {
            ChildClass child = new ChildClass();
            child.Hi1(); // virtual -> override
            child.Hi2(); // X -> new
            child.Hi3(); // X <- base

            Child baby = new Child();
            baby.Say(); // 자식이 예의가 없다.
            baby.Hi(); // 자식이 예의바르다.
            baby.Walk(); // 부모가 관대하다.
        }
    }
}
