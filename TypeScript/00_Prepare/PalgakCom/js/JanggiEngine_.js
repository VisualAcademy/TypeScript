// JanggiEngine 최상위 네임스페이스
var JanggiEngine = JanggiEngine || {};

// 현재 기물이 궁성안에 있는지 아닌지 확인: 궁성에서는 대각선 이동도 있기 때문에 
JanggiEngine.IsKingdom = function (x, y) {
    var r = false; // 일단은 아닌걸로
    if (x >= 3 && x <= 5) {
        // 궁성 체크
        if (y >= 0 && y <= 2 || y >= 7 && y <= 9) {
            r = true; // 궁성 안
        }
    }
    return r;
} // TEST: console.log(JanggiEngine.IsKingdom(3, 1));

