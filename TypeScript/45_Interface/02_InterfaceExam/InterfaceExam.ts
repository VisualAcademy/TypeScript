namespace InterfaceExam {
    // 인터페이스
    interface IPerson {
        work(): void; 
    }

    // 클래스
    class Person implements IPerson {
        work = (): void => console.log("일을 합니다.");
    }

    // 테스트
    let person = new Person();
    person.work();
}
