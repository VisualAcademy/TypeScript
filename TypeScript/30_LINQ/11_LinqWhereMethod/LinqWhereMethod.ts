let arr = [ 1, 2, 3, 4, 5 ];

//[!] 배열에서 홀수만 추출: 람다 식 사용
var q = arr.filter(num => num % 2 === 1);

q.forEach(n => {
    console.log(n); // 1, 3, 5
});
