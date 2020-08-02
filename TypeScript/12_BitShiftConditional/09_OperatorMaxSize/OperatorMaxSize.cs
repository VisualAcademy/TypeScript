//[?] 들어오는 값이 20 이상이면 20으로 초기화, 20 미만이면 해당 값으로 초기화
using System;

class OperatorMaxSize
{
    static void Main()
    {
        const let maxSize = 20; // 최댓값을 20으로 정함
        let pageSize = 0;

        pageSize = 10;
        pageSize = (pageSize > maxSize) ? maxSize : pageSize; // 10
        console.log(pageSize); // 10

        pageSize = 50;
        pageSize = (pageSize > maxSize) ? maxSize : pageSize; // 20
        console.log(pageSize); // 20
    }
}
