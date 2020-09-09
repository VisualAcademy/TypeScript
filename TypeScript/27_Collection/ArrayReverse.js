//[?] Array 클래스의 reverse 메서드로 배열을 거꾸로 변환하기 
var ArrayReverse;
(function (ArrayReverse) {
    var numbers = [1, 2, 3];
    numbers.reverse(); // 배열을 역순으로 변환
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var item = numbers_1[_i];
        console.log(item);
    }
})(ArrayReverse || (ArrayReverse = {}));
