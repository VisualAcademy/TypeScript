module ArrayDemo {
    var colors: string[] = ["빨강", "다홍", "주황"];

    var alls: any[] = ["귤색", 1234, 12.34];

    function GetArrayLength(arr: string[]): number {
        var len = arr.length;
        return len;
    }

    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }

    for (var i = 0; i < GetArrayLength(colors); i++) {
        console.log(colors[i]);
    }
}
