﻿using System;
using System.Collections.Generic;

class DictionaryGenericClassDemo
{
    
    {
        //[1] Dictionary 클래스의 인스턴스 생성: IDictionary 인터페이스로 받기
        IDictionary<string, string> data = new Dictionary<string, string>();

        //[2] 데이터 입력
        data.Add("cs", "C#");
        data.Add("aspx", "ASP.NET");

        //[3] 데이터 삭제
        data.Remove("aspx");

        //[4] 인덱서를 사용해서 데이터 입력
        data["cshtml"] = "ASP.NET MVC";

        //[5] 키 값 중복 불가: 에러 발생
        try
        {
            data.Add("cs", "CSharp");
        }
        catch (Exception ex)
        {
            console.log(ex.Message);
        }

        //[6] 출력: foreach (var item in data)로 줄여 표현 가능
        foreach (KeyValuePair<string, string> item in data)
        {
            console.log("{0}은(는) {1}의 확장자입니다.", item.Key, item.Value);
        }

        //[7] 인덱서를 사용해서 출력 가능
        console.log(data["cs"]);

        //[8] 없는 키 요청: 에러 발생
        try
        {
            console.log(data["vb"]);
        }
        catch (KeyNotFoundException knfe)
        {
            console.log(knfe.Message);
        }

        //[9] cs 키가 있으면 csharp 변수에 담아서 출력 
        if (data.TryGetValue("cs", out var csharp))
        {
            console.log(csharp);
        }
        else
        {
            console.log("cs 키가 없습니다.");
        }

        //[10] 키 값이 없으면 입력하고 출력
        if (!data.ContainsKey("json"))
        {
            data.Add("json", "JSON");
            console.log(data["json"]);
        }

        //[11] Value 값을 따로 뽑아서 출력
        var values = data.Values;
        foreach (string item in values)
        {
            console.log(item);
        }

        //[12] Key 값을 따로 뽑아서 출력
        var keys = data.Keys;
        foreach (string item in keys)
        {
            console.log(item);
        }
    }
}
