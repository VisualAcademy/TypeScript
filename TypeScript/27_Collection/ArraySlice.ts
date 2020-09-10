//[?] Array 클래스의 slice 메서드로 배열 복사하기 
namespace ArraySlice {
    let numbers = [1, 2, 3];

    let newNumbers = numbers.slice(0); 

    for (let item of newNumbers) {
        console.log(item);
    }
}
