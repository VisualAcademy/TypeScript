namespace LinqAverage {
        int[] numbers = { 1, 3, 4 };

        let average = numbers.Average();

        WriteLine($"{nameof(numbers)} 배열 요소의 평균: {average:#,###.##}");
}
