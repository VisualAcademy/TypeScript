var IndexerDemo;
(function (IndexerDemo) {
    //[?] 인덱서(Indexer)와 for 문(for in 문, for of 문)을 사용하여 배열 반복
    var cars = ["CLA", "CLS", "AMG"];
    console.log(cars[0]);
    console.log(cars[1]);
    console.log(cars[2]);
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
    for (var key in cars) {
        console.log(key + " - " + cars[key]);
    }
    for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
        var value = cars_1[_i];
        console.log(value);
    }
})(IndexerDemo || (IndexerDemo = {}));
