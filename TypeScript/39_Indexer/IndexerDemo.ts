namespace IndexerDemo {
    //[?] 인덱서(Indexer)와 for 문(for in 문, for of 문)을 사용하여 배열 반복
    let cars = ["CLA", "CLS", "AMG"];

    //[0] 인덱서: this[let index] 형태로 정의되어 개체명[0], 개체명[1] 형태로 호출됨 
    console.log(cars[0]);
    console.log(cars[1]);
    console.log(cars[2]);

    //[1] for 문으로 배열 반복
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }

    //[2] for in 문으로 배열 반복
    for (let key in cars) {
        console.log(`${key} - ${cars[key]}`);
    }

    //[3] for of 문으로 배열 반복
    for (let value of cars) {
        console.log(value);
    }
}
