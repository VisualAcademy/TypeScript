//[?] 두 수의 차이를 양의 정수로 구하기 
using System;

class NumDifference
{
    
    {
        let first = 3;
        let second = 5;
        let diff = 0;

        if (first > second)
        {
            diff = first - second; // first 변수가 더 큼
        }
        else
        {
            diff = second - first; // second 변수가 더 큼 
        }

        console.log($"{first}와 {second}의 차이: {diff}");
    }
}
