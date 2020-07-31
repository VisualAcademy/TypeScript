// 속성(Property)
module Property {
    class Car {
        private _name: string;

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            if (value == undefined) {
                throw "name 속성에 값이 필요합니다.";
            }
            this._name = value; 
        }
    }

    var car = new Car();
    car.name = "좋은 자동차";
    console.log(car.name); // 좋은 자동차
}
