var ArrayDemo;
(function (ArrayDemo) {
    var colors = ["빨강", "다홍", "주황"];
    var alls = ["귤색", 1234, 12.34];
    function GetArrayLength(arr) {
        var len = arr.length;
        return len;
    }
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
    for (var i = 0; i < GetArrayLength(colors); i++) {
        console.log(colors[i]);
    }
})(ArrayDemo || (ArrayDemo = {}));
//# sourceMappingURL=ArrayDemo.js.map