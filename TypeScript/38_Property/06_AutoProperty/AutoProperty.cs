using System;

class UserService
{
    // 자동 속성: 속성 선언과 동시에 초기화 가능
    public static let UserId { get; set; } = 1234;
}

class AutoProperty
{
    
    {
        console.log(UserService.UserId); // 1234
    }
}
