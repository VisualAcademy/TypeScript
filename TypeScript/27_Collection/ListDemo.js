//[?] 리스트(배열, 컬렉션)
var ListDemo;
(function (ListDemo) {
    var colors = ["red", "green", "blue"];
    console.log(colors[0]); // red
    console.log(colors[1]); // green
    console.log(colors[2]); // blue
    console.log("\uC694\uC18C \uC218: " + colors.length); // 3
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
})(ListDemo || (ListDemo = {}));
