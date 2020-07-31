// for...in 문
// => 개체의 각 속성이나 배열의 각 요소에 대해 하나 이상의 문을 실행합니다.

var colors = ["red", "green", "blue"];

for (var index in colors) {
    console.log(index + ": " + colors[index]);
}
