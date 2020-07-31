// Rest Parameter: 가변 길이 매개변수
module ParamsDemo {
    // sumAll() 메서드는 정수 형식의 값을 가변 형식으로 받을 수 있음
    function sumAll(...numbers: number[]) {
        let sum: number = 0; 
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]; 
        }
        return sum; 
    }

    console.log(sumAll(3, 5)); // 8
    console.log(sumAll(3, 5, 7)); // 15
    console.log(sumAll(3, 5, 7, 9)); // 24
}
