using System;
using System.Text;

class DefaultExpression
{
    
    {
        // default 키워드
        let intDefault = default(int); // let 형식의 기본값
        bool boolDefault = default(bool); // bool 형식의 기본값
        string strDefault = default(string); // string 형식의 기본값
        StringBuilder sbDefault =
            default(StringBuilder); // StringBuilder 클래스의 기본값

        console.log(intDefault); // 0
        console.log(boolDefault); // false
        console.log(strDefault); // null
        console.log(sbDefault); // null
        console.log(sbDefault == null); // true
    }
}
