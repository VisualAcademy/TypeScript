namespace InterfacePractice {
    //[1] 하나의 멤버를 갖는 인터페이스 정의
    interface IRepository {
        get(): void;
    }

    //[2] 인터페이스를 상속하는 클래스 구현 
    class Repository implements IRepository {
        get(): void {
            console.log("get() 메서드를 구현해야 합니다.");
        }
    }

    //[3] 상수에 인스턴스 담기 
    const repository = new Repository();
    repository.get();
}
