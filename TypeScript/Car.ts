interface IEarth {
    gogo();
}
interface IKorea {

}
class Car implements IEarth, IKorea {
    name: string;
    constructor(public color: string, name: string) {
        this.name = name;
    }
    gogo(): void {
        console.log(`${this.color} 색 ${this.name} 이름의 자동차가 달립니다.`);
    }
}

var car = new Car("Red", "좋은자동차");
car.gogo();
var myCar = new Car("Blue", "내 자동차");
myCar.gogo();
