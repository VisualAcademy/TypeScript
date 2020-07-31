module ForOf {
    var colors = ["red", "green", "blue"];

    // JavaScript 사용
    for (var index in colors) {
        console.log(colors[index]);
    }

    // TypeScript 사용
    for (var color of colors) {
        console.log(color);
    }
}
