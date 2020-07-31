module ObjectForEach {
    // 컬렉션 생성
    let colors = [
        { name: "Red" },
        { name: "Green" },
        { name: "Blue" }
    ];

    // 개체.forEach() 함수를 사용하여 컬렉션 반복
    colors.forEach(function(color) {
        console.log(color.name); 
    }); 
}
