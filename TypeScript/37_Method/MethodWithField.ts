namespace MethodWithField {
    class Car {
        _name: string;
        constructor(name: string) {
            this._name = name; 
        }
        start() {
            console.log(`${this._name} 자동차가 달립니다.`)
        }
        stop() {
            console.log(`${this._name} 자동차가 멈춥니다.`)
        }
    }

    const car = new Car("좋은");
    car.start();
    car.stop(); 
}
