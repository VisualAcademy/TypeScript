using System;
using System.Collections.Generic;

namespace DotNet
{
    public class Record
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public string AuthCode { get; set; }
    }

    class TextToCollection
    {
        
        {
            //[1] 텍스트 파일 읽기
            string[] lines =
                System.IO.File.ReadAllLines(
                    @"C:\Temp\src.txt", System.Text.Encoding.Default);
            foreach (var line in lines)
            {
                console.log(line);
            }

            //[2] 문자열 배열의 정보를 컬렉션 형태의 개체에 담기
            List<Record> records = new List<Record>();
            foreach (var line in lines)
            {
                string[] splitData = line.Split(',');
                records.Add(
                    new Record
                    {
                        Name = splitData[0],
                        PhoneNumber = splitData[1],
                        BirthDate = Convert.ToDateTime(splitData[2]),
                        AuthCode = splitData[3]
                    });
            }

            //[3] 한개 데이터만 출력해보기 
            console.log(records[0]?.Name ?? "데이터가 없습니다.");
        }
    }
}
