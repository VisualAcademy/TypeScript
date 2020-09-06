
module ClassMemberTest {
    class Car {
        name: string;
        public maker: string; 
        private _engine: string; 
        constructor(name: string, maker: string) {
            this.name = name;
            this.maker = maker; 
            this._engine = "AAAA";
        }
        // 속성(Property)
        get engine(): string {
            return this._engine;
        }
        set engine(value: string) {
            this._engine = value; 
        }
    }
    //var car = new Car();
    var car = new Car("좋은차", "좋은회사");
    car.engine = "좋은엔진";
    console.log(car.engine);
    class Car2 {
        static copyright: string = "www.devlec.com";
        constructor(public name: string, public maker: string) {
        }
    }
    var car2 = new Car2("좋은차2", "좋은회사2");
    console.log(Car2.copyright); // 클래스명.정적멤버
}
