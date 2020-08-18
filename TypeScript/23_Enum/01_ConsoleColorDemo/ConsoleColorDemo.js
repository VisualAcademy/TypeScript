// ConsoleColor 열거형으로 콘솔의 전경색 및 배경색 표현하기
var ConsoleColorDemo;
(function (ConsoleColorDemo) {
    var ConsoleColor;
    (function (ConsoleColor) {
        ConsoleColor[ConsoleColor["Red"] = 0] = "Red";
        ConsoleColor[ConsoleColor["Green"] = 1] = "Green";
        ConsoleColor[ConsoleColor["Blue"] = 2] = "Blue";
    })(ConsoleColor || (ConsoleColor = {}));
    console.log(ConsoleColor.Red); // 0
    console.log(ConsoleColor.Green); // 1
    console.log(ConsoleColor.Blue); // 2
})(ConsoleColorDemo || (ConsoleColorDemo = {}));
