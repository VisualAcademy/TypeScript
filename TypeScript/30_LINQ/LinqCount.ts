namespace LinqCount {
    let numbers = [1, 2, 3];

    let count = numbers.filter(function (x) { return x; }).length;
    console.log(`${numbers} 배열 전체 개수: ${count}`);

    let evenCount = numbers.filter(function (x) { return x % 2 == 0; }).length;
    console.log(`${numbers} 배열 짝수 개수: ${evenCount}`);
}
