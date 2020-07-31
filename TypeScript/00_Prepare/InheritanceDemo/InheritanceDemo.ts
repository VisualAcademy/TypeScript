//[?] 상속(Inheritance): 부모 클래스의 기능을 자식 클래스에서 물려받아 사용
module InheritanceDemo {
    // 부모 클래스 선언
    class Parent {
        foo = (): void => console.log('부모 클래스의 멤버 호출');
    }

    // 자식 클래스 선언
    class Child extends Parent {
        bar = (): void => console.log('자식 클래스의 멤버 호출');
    }

    // 자식 클래스의 인스턴스 생성 
    let child = new Child();
    child.foo(); // 부모 클래스의 멤버 호출
    child.bar(); // 자식 클래스의 멤버 호출
}
