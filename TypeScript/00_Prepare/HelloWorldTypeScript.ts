module HelloWorldTypeScript {
    module TypeScript {
        export class Car {
            public name: string;
        }
    }

    var car = new TypeScript.Car();

    car.name = "좋은 차";
}