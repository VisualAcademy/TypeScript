// Rest Parameter: 가변 길이 매개변수
module ParamsDemo {
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
