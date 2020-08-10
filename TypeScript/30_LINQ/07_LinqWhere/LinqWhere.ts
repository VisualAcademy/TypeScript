// LinqWhere.ts
namespace LinqWhere {
    let numbers = [1, 2, 3, 4, 5];

    // 3보다 큰 데이터만 가져오기 
    let newNumbers = numbers.filter(n => n > 3);

    newNumbers.forEach(n => {
        console.log(n);
    });
}
