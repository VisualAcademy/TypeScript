//[?] Array 클래스의 join 메서드로 배열 문자열로 합치기 
var ArrayJoin;
(function (ArrayJoin) {
    var numbers = [1, 2, 3];
    console.log(numbers.join());
    console.log(numbers.join('|'));
    console.log(numbers.join('*'));
})(ArrayJoin || (ArrayJoin = {}));
