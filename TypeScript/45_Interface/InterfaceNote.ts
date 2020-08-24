//[?] 인터페이스: 특정 멤버가 반드시 구현되어야 함을 보증
module InterfaceNote {
    // ICar 인터페이스 선언
    interface ICar {
        go(): void; // 함수 시그니처만 제공 
    }

    // ICar 인터페이스를 상속하는 Car 클래스 선언
    class Car implements ICar {
        go(): void {
            console.log('상속한 인터페이스에 정의된 모든 멤버를 반드시 구현해야 합니다.');
        }
    }

    let car = new Car();
    car.go(); 
}
