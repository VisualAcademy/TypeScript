var ForOf;
(function (ForOf) {
    var colors = ["red", "green", "blue"];
    // JavaScript 사용
    for (var index in colors) {
        console.log(colors[index]);
    }
    // TypeScript 사용
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        console.log(color);
    }
})(ForOf || (ForOf = {}));
//# sourceMappingURL=ForOf.js.map