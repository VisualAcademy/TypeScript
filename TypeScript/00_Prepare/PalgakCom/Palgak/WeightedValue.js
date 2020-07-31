/// <reference path="./Util.ts" />
// 가중치 설정(원본)
var WeightedValue = WeightedValue || {};
WeightedValue.value = {
    // 차
    // 원본: 194~233
    //c: [
    //    [206, 208, 207, 213, 214, 213, 207, 208, 206],
    //    [206, 212, 209, 216, 233, 216, 209, 212, 206],
    //    [206, 208, 207, 214, 216, 214, 207, 208, 206],
    //    [206, 213, 213, 216, 216, 216, 213, 213, 206],
    //    [208, 211, 211, 214, 215, 214, 211, 211, 208],
    //    [208, 212, 212, 214, 215, 214, 212, 212, 208],
    //    [204, 209, 204, 212, 214, 212, 204, 209, 204],
    //    [198, 208, 204, 212, 212, 212, 204, 208, 198],
    //    [200, 208, 206, 212, 200, 212, 206, 208, 200],
    //    [194, 206, 204, 212, 200, 212, 204, 206, 194]
    //],
    // 수정: 194~233, 1차 완료(적당함)
    c: [
        [206, 208, 207, 213, 214, 213, 207, 208, 206],
        [206, 212, 210, 216, 233, 216, 210, 212, 206],
        [206, 208, 207, 214, 216, 214, 207, 208, 206],
        [206, 213, 213, 216, 216, 216, 213, 213, 206],
        [208, 211, 211, 214, 215, 214, 211, 211, 208],
        [208, 212, 212, 214, 215, 214, 212, 212, 208],
        [204, 209, 204, 212, 214, 212, 204, 209, 204],
        [198, 208, 204, 194, 194, 194, 204, 208, 198],
        [200, 208, 206, 194, 194, 194, 206, 208, 200],
        [194, 196, 195, 194, 194, 194, 195, 196, 194]
    ],
    // 마
    // 원본: 78~107
    //m: [
    //    [90, 90, 90, 96, 90, 96, 90, 90, 90],
    //    [90, 96, 103, 97, 94, 97, 103, 96, 90],
    //    [92, 98, 99, 103, 99, 103, 99, 98, 92],
    //    [93, 108, 100, 107, 100, 107, 100, 108, 93],
    //    [90, 100, 99, 103, 104, 103, 99, 100, 90],
    //    [90, 98, 101, 102, 103, 102, 101, 98, 90],
    //    [92, 94, 98, 95, 98, 95, 98, 94, 92],
    //    [93, 92, 94, 95, 92, 95, 94, 92, 93],
    //    [85, 90, 92, 93, 78, 93, 92, 90, 85],
    //    [88, 85, 90, 88, 90, 88, 90, 85, 88]
    //],
    // 수정: 70~87
    m: [
        [80, 80, 87, 86, 80, 86, 87, 80, 80],
        [80, 86, 87, 87, 84, 87, 87, 86, 80],
        [82, 84, 87, 87, 87, 87, 87, 84, 82],
        [82, 84, 87, 87, 87, 87, 87, 84, 82],
        [82, 84, 85, 80, 85, 80, 85, 84, 82],
        [82, 84, 85, 80, 85, 80, 85, 84, 62],
        [75, 84, 84, 85, 84, 85, 84, 84, 75],
        [75, 82, 85, 85, 82, 85, 85, 82, 75],
        [75, 80, 82, 83, 84, 83, 82, 80, 75],
        [74, 75, 70, 74, 70, 74, 70, 75, 74]
    ],
    // 상
    // 원본: 20~23
    //x: [
    //    [0, 0, 20, 0, 0, 0, 20, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 20, 0, 0, 0, 20, 0, 0],
    //    [0, 0, 20, 0, 0, 0, 20, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [18, 0, 0, 0, 23, 0, 0, 0, 18],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 20, 0, 0, 0, 20, 0, 0]
    //],
    // 수정: 57~65, 궁을 2개 향하고 있는 부분에 65점 부여
    x: [
        [61, 61, 61, 61, 61, 61, 61, 61, 61],
        [57, 57, 61, 61, 61, 61, 61, 57, 57],
        [61, 62, 61, 61, 61, 61, 61, 62, 61],
        [61, 65, 65, 61, 61, 61, 65, 65, 61],
        [57, 65, 65, 61, 57, 61, 65, 65, 57],
        [57, 56, 57, 57, 57, 57, 57, 56, 57],
        [61, 57, 57, 57, 61, 57, 57, 57, 61],
        [57, 57, 57, 57, 57, 57, 57, 57, 57],
        [57, 57, 57, 57, 57, 57, 57, 57, 57],
        [57, 57, 57, 57, 57, 57, 57, 57, 57]
    ],
    // 사
    // 원본: 20~23
    //s: [
    //    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    //    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    //    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    //    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    //    [0, 0, 0, 20, 0, 20, 0, 0, 0]
    //],
    // 수정: 45~51
    s: [
        [0, 0, 0, 50, 40, 50, 0, 0, 0],
        [0, 0, 0, 48, 51, 48, 0, 0, 0],
        [0, 0, 0, 45, 40, 45, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 45, 40, 45, 0, 0, 0],
        [0, 0, 0, 48, 51, 48, 0, 0, 0],
        [0, 0, 0, 50, 40, 50, 0, 0, 0]
    ],
    // 장에 대한 우선순위: 튜닝 완료(특별한 수 없으면 안궁)
    j: [
        [0, 0, 0, 8888, 8899, 8888, 0, 0, 0],
        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
        [0, 0, 0, 8888, 8899, 8888, 0, 0, 0]
    ],
    // 포 : 시간이 지나면 포의 가중치 배열을 200에서 100으로 떨어뜨릴 것... 
    // 원본: 96~100
    //p: [
    //    [100, 100, 96, 91, 90, 91, 96, 100, 100],
    //    [98, 98, 96, 92, 89, 92, 96, 98, 98],
    //    [97, 97, 96, 91, 92, 91, 96, 97, 97],
    //    [96, 99, 99, 98, 100, 98, 99, 99, 96],
    //    [96, 96, 96, 96, 100, 96, 96, 96, 96],
    //    [95, 96, 99, 96, 100, 96, 99, 96, 95],
    //    [96, 96, 96, 96, 96, 96, 96, 96, 96],
    //    [97, 96, 100, 99, 101, 99, 100, 96, 97],
    //    [96, 97, 98, 98, 98, 98, 98, 97, 96],
    //    [96, 96, 97, 99, 99, 99, 97, 96, 96]
    //],
    // 수정: 96~100
    p: [
        [100, 100, 96, 91, 90, 91, 96, 100, 100],
        [98, 98, 96, 92, 89, 92, 96, 98, 98],
        [97, 97, 96, 91, 92, 91, 96, 97, 97],
        [96, 99, 99, 98, 100, 98, 99, 99, 96],
        [96, 96, 96, 96, 100, 96, 96, 96, 96],
        [95, 96, 99, 96, 100, 96, 99, 96, 95],
        [96, 96, 96, 96, 96, 96, 96, 96, 96],
        [97, 97, 100, 100, 105, 100, 100, 97, 97],
        [96, 97, 98, 98, 98, 98, 98, 97, 96],
        [96, 96, 97, 100, 99, 100, 97, 96, 96]
    ],
    // 졸병: 졸병만 남았을 때 계속 공격하도록 지시할 것...
    // 원본: 7~44
    //z: [
    //    [9, 9, 9, 11, 13, 11, 9, 9, 9],
    //    [19, 24, 34, 42, 44, 42, 34, 24, 19],
    //    [19, 24, 32, 37, 37, 37, 32, 24, 19],
    //    [19, 23, 27, 29, 30, 29, 27, 23, 19],
    //    [14, 18, 20, 27, 29, 27, 20, 18, 14],
    //    [7, 0, 13, 0, 16, 0, 13, 0, 7],
    //    [7, 0, 7, 0, 15, 0, 7, 0, 7],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0]
    //]
    // 수정: 32~100
    z: [
        [42, 46, 43, 50, 60, 50, 43, 46, 42],
        [42, 46, 43, 50, 100, 50, 43, 46, 42],
        [42, 46, 43, 50, 50, 50, 43, 46, 42],
        [35, 38, 34, 38, 38, 38, 35, 38, 35],
        [33, 37, 37, 37, 37, 37, 34, 37, 33],
        [33, 35, 37, 37, 37, 37, 34, 35, 33],
        [32, 34, 34, 34, 35, 34, 34, 34, 32],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};
// 가중치 배열 복사
WeightedValue.value.C = Util.ArrayClone(WeightedValue.value.c).reverse();
WeightedValue.value.M = Util.ArrayClone(WeightedValue.value.m).reverse();
WeightedValue.value.X = Util.ArrayClone(WeightedValue.value.x).reverse();
WeightedValue.value.S = Util.ArrayClone(WeightedValue.value.s).reverse();
WeightedValue.value.J = Util.ArrayClone(WeightedValue.value.j).reverse();
WeightedValue.value.P = Util.ArrayClone(WeightedValue.value.p).reverse();
WeightedValue.value.Z = Util.ArrayClone(WeightedValue.value.z).reverse();
//# sourceMappingURL=WeightedValue.js.map