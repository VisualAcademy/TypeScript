//[?] 리스트(배열, 컬렉션)
namespace ListDemo {
    let colors: string[] = ["red", "green", "blue"];
    console.log(colors[0]); // red
    console.log(colors[1]); // green
    console.log(colors[2]); // blue

    console.log(`요소 수: ${colors.length}`); // 3
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
}
