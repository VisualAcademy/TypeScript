// 열거형
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 20] = "Blue";
})(Color || (Color = {}));
var red = Color.Red;
var green = Color.Green;
var blue = Color.Blue;
console.log(red); // 10
console.log(green); // 11
console.log(blue); // 20
//# sourceMappingURL=EnumerationPractice.js.map