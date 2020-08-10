// LinqWhereToList.ts
namespace LinqWhereToList {
    let numbers = [1, 2, 3, 4, 5];

    let newNumbers = numbers.filter(n => {
        return n > 3;
    });

    newNumbers.forEach(n => {
        console.log(n);
    });
}
