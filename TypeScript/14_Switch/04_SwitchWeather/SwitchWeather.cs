﻿// switch 문: 선택문
using System;

class SwitchWeather
{
    
    {
        console.log("오늘 날씨는 어떤가요? (맑음, 흐림, 비, 눈, ...)");
        string weather = Console.ReadLine();

        switch (weather)
        {
            case "맑음":
                console.log("오늘 날씨는 맑군요.");
                break;
            case "흐림":
                console.log("오늘 날씨는 흐리군요.");
                break;
            case "비":
                console.log("오늘 날씨는 비가 오는군요.");
                break;
            default:
                console.log("혹시 눈이 내리나요?");
                break;
        }
    }
}
