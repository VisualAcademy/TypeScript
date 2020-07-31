/// <reference path="./Util.ts" />
/// <reference path="./MapManager.ts" />
/// <reference path="./JanggiEngine.ts" />
/// <reference path="./Play.ts" />
var com;
// 외부 참조
var play: any;


// AI에 대한 최상위 네임스페이스(모듈)
var AI = AI || {};

AI.historyTable = {};


// AI 계산 초기화
// <returns>xyXY 좌료: xy에서 XY로 이동하는 좌표: "1234"</returns>
AI.init = function (pace: string) {
    


    
    ////[0] 특정 장기판 형성시 가장 좋은 패턴을 적용
    ////특정 맵이 나오면 아래 절차 수행
    //console.log(GlobalVariable.Count);
    //console.log(pace); 
    //[!] 맵 직접 비교 방식: 만약, 초 안상에서 가운데 졸을 위로 올리면 한 안상은오른쪽 졸을 안으로 들인다. 
    var map = [
        ['C0', 'M0', 'X0', 'S0', , 'S1', 'X1', 'M1', 'C1'],
        [, , , , 'J0', , , , ],
        [, 'P0', , , , , , 'P1', ],
        ['Z0', , 'Z1', , 'Z2', , 'Z3', , 'Z4'],
        [, , , , , , , , ],
        [, , , , 'z2', , , , ],
        ['z0', , 'z1', , , , 'z3', , 'z4'],
        [, 'p0', , , , , , 'p1', ],
        [, , , , 'j0', , , , ],
        ['c0', 'm0', 'x0', 's0', , 's1', 'x1', 'm1', 'c1']
    ];    
    console.log(play.map);
    if (JSON.stringify(play.map) === JSON.stringify(map))
    {
        return [0, 3, 1, 3];
    }
    
    ////[!] pace 기교 방식
    //if (pace == "0616") 
    //{
    //    return [0, 3, 1, 3];
    //}
    
    ////[!] 특정 회차에 무조건 처리 방식
    //if (GlobalVariable.Count == 2)
    //{
    //    return [4, 1, 4, 0];
    //}    




    //[1] 미리 저장된 초반 수(Gambit; 기보) 적용
    // 미리 저장된 수에 해당하면 계산하지 말고 해당 수 진행
    var bill = AI.historyBill || com.gambit; // bill 계산서 청구서 노트
    if (bill.length) {
        // console.log("AI.init pace: " + pace);
        var len = pace.length; // 기본은 4: "0616", pace는 계속 증가됨 "061670621927" 식으로
        var arr = [];

        for (var i = 0; i < bill.length; i++) {
            if (bill[i].slice(0, len) == pace) {
                arr.push(bill[i]); // 현재 pace와 동일한 과정을 갖는 bill이 있다면 해당 값을 배열에 저장
            }
        }

        // 동일 패턴이 여러 개 존재한다면, 그 중 하나를 랜덤하게 선택
        if (arr.length) {
            var inx = Math.floor(Math.random() * arr.length); // 동일한 절차가 여러개라면 그 중에서 무작위로 하나 선택
            AI.historyBill = arr; // 모든 배열을 가져올 필요없이 현재 bill만 historyBill에 저장: 예를 들어 처음에는 4000개의 패턴이 있다면, 이제는 현재 패턴만 저장
            // console.log("AI.init arr: " + arr);
            var r = arr[inx].slice(len, len + 4).split(""); // 현재 pace에 + 4개(새로운좌표)를 더한 배열 리턴
            console.log("AI.init returns : " + r);
            return r;
            
        } else {
            AI.historyBill = []; // 더 이상 동일한 저장된 기보가 없으면 null값 반환
        }
    } // end of if



    //[2] AI가 새롭게 생각해서 기물의 이동좌표를 반환
    var initTime = new Date().getTime(); // 초기 시간
    AI.treeDepth = Play.Depth;

    AI.number = 0;
    AI.setHistoryTable.length = 0

    var val = AI.getAlphaBeta(-99999, 99999, AI.treeDepth, Util.ArrayClone(play.map), play.my);

    //var val = AI.iterativeSearch(Util.ArrayClone(play.map),play.my)

    // 장군 로직: 더 수정해야 함...
    if (!val || val.value == -8888) {
        (<HTMLAudioElement>document.getElementById("janggunAudio")).play();
    }
    
    // 장군이면 한번 더 생각함
    if (!val || val.value == -8888) {
        AI.treeDepth = 2; // ### 정확한 이유는 모르겠지만, 차장군+상장군 콤보시 treeDepth를 4이상하게 되면 왕이 움직일 수 있는데도 못 움직인다고 나옴 ###
        val = AI.getAlphaBeta(-99999, 99999, AI.treeDepth, Util.ArrayClone(play.map), play.my);
        // console.log("AI: 왕이 공격 받고 있음");

        //if (!val || val.value == -8888) {
        //    Util.Get("janggunAudio").play();
        //    Util.Get("munggunAudio").play();
        //}
    }

    //var val = AI.iterativeSearch(Util.ArrayClone(play.map),play.my);
    if (val && val.value != -8888) {
        var man = play.mans[val.key];
        var nowTime = new Date().getTime(); // AI가 계산이 끝난 현재 시간

        var realTime = nowTime - initTime; // 실행시간 구하기: 데브렉 JavaScript 강좌 참고

        var strPrint = '<div class="panel panel-default"><div class="panel-heading">AI 진행절차</div><div class="panel-body"><li>이동： ' + com.createMove(Util.ArrayClone(play.map), man.x, man.y, val.x, val.y) + '</li><li>깊이: ' + AI.treeDepth + '</li><li>판단수: ' + AI.number + '</li><li>가중치: ' + val.value + '점</li><li>계산시간: ' + (realTime) + 'ms</li></div></div>';
        Util.Get("moveInfo").innerHTML = strPrint;



        return [man.x, man.y, val.x, val.y]
    }
    else {
        // 외통수 또는 왕이 따먹힘
        return false;
    }


}; // end of AI.init();







AI.iterativeSearch = function (map, my): any {
    var timeOut = 100;
    var initDepth = 1;
    var maxDepth = 8;
    AI.treeDepth = 0;
    var initTime = new Date().getTime();
    //var val = {};
    var val: any;
    for (var i = initDepth; i <= maxDepth; i++) {
        var nowTime = new Date().getTime();
        AI.treeDepth = i;
        AI.aotuDepth = i;
        var val = <any>AI.getAlphaBeta(-99999, 99999, AI.treeDepth, map, my)
        if (nowTime - initTime > timeOut) {
            return val;
        }
    }
    return false;
}

AI.getMapAllMan = function (map, my) {
    var mans = [];
    for (var i = 0; i < map.length; i++) {
        for (var n = 0; n < map[i].length; n++) {
            var key = map[i][n];
            if (key && play.mans[key].my == my) {
                play.mans[key].x = n;
                play.mans[key].y = i;
                mans.push(play.mans[key])
            }
        }
    }
    return mans;
}

/*
AI.getMoves = function (map, my, txtMap){
    var highMores = [];   
    var manArr = AI.getMapAllMan (map, my);
    var moves = [];
    var history=AI.historyTable[txtMap];
    for (var i=0; i<manArr.length; i++){
        var man = manArr[i];
        var val=man.bl(map);
        for (var n=0; n<val.length; n++){
            if (history){
                highMores.push([man.x,man.y,val[n][0],val[n][1],man.key])
            }else{
                moves.push([man.x,man.y,val[n][0],val[n][1],man.key])
            }
        }
    }
    return highMores.concat(moves);
}
*/


AI.getMoves = function (map, my) {
    var manArr = AI.getMapAllMan(map, my);
    var moves = [];
    var foul = Play.IsFoul;
    for (var i = 0; i < manArr.length; i++) {
        var man = manArr[i];
        var val = man.bl(map);

        for (var n = 0; n < val.length; n++) {
            var x = man.x;
            var y = man.y;
            var newX = val[n][0];
            var newY = val[n][1];

            if (foul[0] != x || foul[1] != y || foul[2] != newX || foul[3] != newY) {
                moves.push([x, y, newX, newY, man.key])
            }
        }
    }
    return moves;
}



// 알파베타 가지치기 알고리즘: AI가 유리하면 큰 점 수, User가 유리하면 작은 점수 설정
//A:value/B:value/depth
AI.getAlphaBeta = function (A, B, depth, map, my): any {
    //var txtMap= map.join();
    //var history=AI.historyTable[txtMap];
    //	if (history && history.depth >= AI.treeDepth-depth+1){
    //		return 	history.value*my;
    //}
    if (depth == 0) {
        return { "value": AI.evaluate(map, my) };
    }
    var moves = AI.getMoves(map, my);


    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];
        var key = move[4];
        var oldX = move[0];
        var oldY = move[1];
        var newX = move[2];
        var newY = move[3];
        var clearKey = map[newY][newX] || "";

        map[newY][newX] = key;
        delete map[oldY][oldX];
        play.mans[key].x = newX;
        play.mans[key].y = newY;

        if (clearKey == "j0" || clearKey == "J0") {
            play.mans[key].x = oldX;
            play.mans[key].y = oldY;
            map[oldY][oldX] = key;
            delete map[newY][newX];
            if (clearKey) {
                map[newY][newX] = clearKey;
                // play.mans[ clearKey ].isShow = false;
            }

            return { "key": key, "x": newX, "y": newY, "value": 8888 };
            //return rootKey; 
        } else {
            var val = -AI.getAlphaBeta(-B, -A, depth - 1, map, -my).value;
            //val = val || val.value;

            play.mans[key].x = oldX;
            play.mans[key].y = oldY;
            map[oldY][oldX] = key;
            delete map[newY][newX];
            if (clearKey) {
                map[newY][newX] = clearKey;
                //play.mans[ clearKey ].isShow = true;
            }
            if (val >= B) {
                //AI.setHistoryTable(txtMap,AI.treeDepth-depth+1,B,my);
                return { "key": key, "x": newX, "y": newY, "value": B };
            }
            if (val > A) {
                A = val;
                if (AI.treeDepth == depth) var rootKey = { "key": key, "x": newX, "y": newY, "value": A };
            }
        }
    }

    //AI.setHistoryTable(txtMap,AI.treeDepth-depth+1,A,my);
    if (AI.treeDepth == depth) {
        if (!rootKey) {
            return false;
        } else {
            return rootKey;
        }
    }
    return { "key": key, "x": newX, "y": newY, "value": A };
}



AI.setHistoryTable = function (txtMap, depth, value, my) {
    AI.setHistoryTable.length++;
    AI.historyTable[txtMap] = { depth: depth, value: value }
}

AI.evaluate = function (map, my) {
    var val = 0;
    for (var i = 0; i < map.length; i++) {
        for (var n = 0; n < map[i].length; n++) {
            var key = map[i][n];
            if (key) {
                val += play.mans[key].value[i][n] * play.mans[key].my;
            }
        }
    }
    //val+=Math.floor( Math.random() * 10);  
    //com.show()
    //z(val*my)
    AI.number++;
    return val * my;
}

AI.evaluate1 = function (map, my) {
    var val = 0;
    for (var i in play.mans) {
        var man = play.mans[i];
        if (man.isShow) {
            val += man.value[man.y][man.x] * man.my;
        }
    }
    //val+=Math.floor( Math.random() * 10);  
    //com.show()
    //z(val*my)
    AI.number++;
    return val * my;
}


