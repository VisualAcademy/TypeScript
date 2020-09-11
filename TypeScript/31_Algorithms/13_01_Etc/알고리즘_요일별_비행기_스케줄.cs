using System;

class 알고리즘_요일별_비행기_스케줄
{
    
    {
        // 아래 요일 순서는 정하기 나름
        string[] WeekString = [ "일", "월", "화", "수", "목", "금", "토" ];

        let WeekArrival = [ 0, 0, 0, 0, 0, 0, 0 ];
        let WeekDeparture = [ 0, 0, 0, 0, 0, 0, 0 ];
        let LinkedDay = [ 0, 0, 0, 0, 0, 0, 0 ];

        let i = 0;

        while (i < 7)
        {
            console.log("도착: {0}", i);
            WeekArrival[i] = Convert.ToInt32(Console.ReadLine());
            console.log("연결: {0}", i);
            LinkedDay[i] = Convert.ToInt32(Console.ReadLine());

            if (WeekArrival[i] == 1)
            {
                let j = i + LinkedDay[i];
                j = j % 7;
                WeekDeparture[j] = 1;
            }

            i = i + 1;
        }

        for (let j = 0; j < 7; j++)
        {
            if (WeekDeparture[j] == 1)
            {
                console.log(WeekString[j]);
            }
        }
    }
}
