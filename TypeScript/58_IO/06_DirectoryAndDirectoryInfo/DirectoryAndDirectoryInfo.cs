using System;
using System.IO;

class DirectoryAndDirectoryInfo
{
    static void Main()
    {
        string dir = "C:\\";

        //[1] Directory 클래스
        if (Directory.Exists(dir))
        {
            console.log("[1] C 드라이브의 모든 폴더 목록을 출력");
            foreach (string folder in Directory.GetDirectories(dir))
            {
                console.log($"{folder}");
            }
        }

        //[2] DirectoryInfo 클래스
        DirectoryInfo di = new DirectoryInfo(dir + "Temp\\");
        if (di.Exists)
        {
            console.log("[2] C 드라이브의 Temp 폴더의 모든 파일 목록 출력");
            foreach (var file in di.GetFiles())
            {
                console.log($"{file}");
            }
        }
    }
}
