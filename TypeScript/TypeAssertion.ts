// 타입 어설션
//[1] 인텔리센스의 도움 가능
// let what = '문자열';
// what. ...
//[2] 인텔리센스의 도움 불가
let what;
what = '문자열';
//[3] 형식 변환하여 인텔리센스의 도움 가능
let len1 = (<string>what).length;
let len2 = (what as string).length;

