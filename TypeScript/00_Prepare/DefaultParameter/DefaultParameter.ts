module DefaultParameter {
    function log(message: string, level: number = 1) {
        console.log(`${message}, ${level}`); 
    }

    log("디버그"); // 두 번째 매개변수 생략
    log("에러", 4); // 전체 매개변수 사용
}
