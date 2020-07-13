//[?] Environment 클래스
using System;

class EnvironmentDemo
{
    static void Main()
    {
        // 시스템폴더: C:\Windows\system32
        console.log(Environment.SystemDirectory);
        // 닷넷기준버전: 4.0.30319.42000
        console.log(Environment.Version);
        // 운영체제 버전: Microsoft Windows NT 6.2.9200.0
        console.log(Environment.OSVersion);
        // 컴퓨터명: VISUALACADEMY
        console.log(Environment.MachineName);
        // 사용자명: RedPlus
        console.log(Environment.UserName);
        // 현재 폴더: C:\C#\EnvironmentDemo\EnvironmentDemo\bin\Debug
        console.log(Environment.CurrentDirectory);
        // 문서 폴더: C:\Users\RedPlus\Documents
        string docs = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        console.log(docs);
    }
}
