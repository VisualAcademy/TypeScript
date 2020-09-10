namespace LinqSum {
    let numbers = [1, 2, 3];

    let sum = numbers.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);

    console.log(`numbers 배열 요소의 합: ${sum}`);
}
