//[?] Split() 메서드로 문자열 분리하기
namespace StringSplit {
    var src = "Red,Green,Blue";

    // 문자열에서 특정 구분자를 사용하여 문자열 배열 만들기
    var colors = src.split(',');

    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
}
