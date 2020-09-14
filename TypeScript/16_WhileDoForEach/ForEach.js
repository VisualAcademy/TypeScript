var ForEach;
(function (ForEach) {
    var techs = ["TypeScript", "C#", "ASP.NET"];
    // 문자열에서 문자 하나씩 뽑아서 출력
    for (var key in techs) {
        console.log("" + techs[key]);
    }
})(ForEach || (ForEach = {}));
