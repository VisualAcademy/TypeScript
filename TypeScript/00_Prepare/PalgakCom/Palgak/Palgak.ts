
// 전역 변수 저장
class GlobalVariable
{
    static Count: number; // 차수
}



// 보드 스타일: 2가지, 화면 큰 판과 작은 판(기본)
// devlec.com - JavaScript - JavaScriptObjectLiteral_JSON.html 강좌 참고
var Stage = {
    Small: {
        width: 325,             // 장기판 가로 길이
        height: 403,            // 장기판 세로 길이      
        spaceX: 35,             // 기물의 크기(X, Y)
        spaceY: 36,
        pointStartX: 5,         // Canvas에 그림 그릴 시작 X좌표 (5, 19)
        pointStartY: 20,
        page: "StageTypeSmall"         // 페이지 이름
    },
    Big: {
        width: 507,
        height: 567,
        spaceX: 57,             // 기물의 크기(X, Y)
        spaceY: 57,
        pointStartX: -5,        // Canvas에 그림 그릴 시작 X좌표(-2, 0)
        pointStartY: -3,
        page: "StageTypeBig"
    }
};



