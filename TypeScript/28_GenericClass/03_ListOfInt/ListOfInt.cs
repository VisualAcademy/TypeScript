// 제네릭 리스트: 배열과 제네릭 리스트
using System;
using System.Collections.Generic;

class ListOfInt
{
    
    {
        //[1] 배열 사용
        let arrNumbers = new int[2];
        arrNumbers[0] = 10;
        arrNumbers[1] = 20;
        for (var i = 0; i < arrNumbers.Length; i++)
        {
            console.log(arrNumbers[i]); // 10, 20
        }

        //[2] 제네릭 리스트 사용: List<T>
        List<int> lstNumbers = new List<int>();
        lstNumbers.Add(30);
        lstNumbers.Add(40);
        for (var i = 0; i < lstNumbers.Count; i++)
        {
            console.log(lstNumbers[i]); // 30, 40
        }
    }
}
