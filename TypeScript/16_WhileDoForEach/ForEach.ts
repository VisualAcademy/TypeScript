namespace ForEach {
    var techs: string[] = ["TypeScript", "C#", "ASP.NET"];

    // 문자열에서 문자 하나씩 뽑아서 출력
    for (var key in techs) {
        console.log(`${techs[key]}`);
    }
}
