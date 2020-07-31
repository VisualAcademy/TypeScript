// 인터페이스는 클래스에 포함될 수 있는 속성 또는 메서드에 대한 표준 규약 제공
module Interface {
    // 인터페이스 선언
    interface ICar {
        go(): void; // 함수 시그니처만 제공 
    }

    // 클래스 선언 및 인터페이스 상속 
    class Car implements ICar {
        go(): void {
            console.log('인터페이스에 정의된 모든 멤버를 반드시 구현해야 합니다.');
        }
    }

    let car = new Car();
    car.go(); 
}
