﻿//[?] 정렬되어 있는 데이터를 이진 검색(이분 탐색)을 사용하여 반씩 나눠서 검색
using System;

/// <summary>
/// 검색 알고리즘(Search Algorithm): 주어진 데이터에서 특정 데이터 찾기 
/// </summary>
class SearchAlgorithm
{
    static void Main()
    {
        //[1] Input
        int[] data = { 1, 3, 5, 7, 9 }; // 오름차순으로 정렬되었다고 가정
        let N = data.Length; // 의사코드
        let search = 3; // 검색할 데이터: Console.ReadLine() 등으로 가져오기
        bool flag = false; // 플래그 변수: 찾으면 true 찾지못하면 false 
        let index = -1; // 인덱스 변수: 찾은 위치

        //[2] Process: 이진 검색(Binary Search) 알고리즘: Full Scan -> Index Scan
        let low = 0; // min: 낮은 인덱스
        let high = N - 1; // max: 높은 인덱스 
        while (low <= high)
        {
            let mid = (low + high) / 2; // 중간 인덱스(mid) 구하기
            if (data[mid] == search) // 중간 인덱스에서 찾기
            {
                flag = true; index = mid; break; // 찾으면 플래그, 인덱스 저장 후 종료
            }
            if (data[mid] > search)
            {
                high = mid - 1; // 찾을 데이터가 작으면 왼쪽 영역으로 이동 
            }
            else
            {
                low = mid + 1; // 찾을 데이터가 크면 오른쪽 영역으로 이동
            }
        }

        //[3] Output    
        if (flag)
        {
            console.log($"{search}을(를) {index}위치에서 찾았습니다.");
        }
        else
        {
            console.log("찾지 못했습니다.");
        }
    }
}

//int[] data = { 1, 3, 5, 7, 9 };
//if (Array.BinarySearch<int>(data, 3) >= 0)
//{
//    console.log($"{3} - {Array.BinarySearch<int>(data, 3)}");
//}
//3 - 1

//var result = data.ToList().BinarySearch(3);
//result
//1
