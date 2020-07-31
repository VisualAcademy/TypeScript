/// <reference path="./MapManager.ts" />
/// <reference path="./JanggiEngine.ts" />
/// <reference path="./JanggiEngine_AI.ts" />
/// <reference path="./JanggiEngine_Bill.ts" />
/// <reference path="./Play.ts" />
/// <reference path="./Palgak.ts" />
/// <reference path="./Util.ts" />
/// <reference path="./WeightedValue.ts" />

// play: 플레이 관련 최상위 네임스페이스(모듈)
var play = play || {}; 


// paly.init(): 플레이 초기화 함수
play.init = function () {


    GlobalVariable.Count = 1; 

    play.my = 1;                                // play.my 속성은 1이면, 사람, -1이면 인공지능을 나타냄
    play.map = Util.ArrayClone((new MapManager(JanggiEngine.Settings.ChoMapStyle, JanggiEngine.Settings.HanMapStyle)).GetMap());      // 판차림: 장기판 + 기물
    play.nowManKey = false;                     // 현재 선택된 기물 : "m0", 선택되지 않았으면 false, AI가 두고 나면 false로 설정
    play.pace = [];                             // 보폭(속도): 좌표 이동: ["0616", "7062", "1927", "1022", "1747", "8373", "4656", "1242", "2946", "2324"] 식으로 "0616"식으로 저장됨
    Play.IsPlay = true;                         // 현재 플레이 중이면 true 그렇지 않으면 false
    play.mans = com.mans;                       // 기물 세팅 복사
    play.bylaw = com.bylaw;                     // 기물 규칙 복사
    play.show = com.show;                       // 화면 그리기 함수 복사
    play.showPane = com.showPane;
    Play.IsOffensive = true;                    // 공격
    Play.Depth = Play.Depth || 3;           // 기본으로 3수를 바라 봄

    Play.IsFoul = false;                    // 잘못된 클릭(파울)인지 확인: 아님(false)
    

    com.pane.isShow = false;

    for (var i = 0; i < play.map.length; i++) {
        for (var n = 0; n < play.map[i].length; n++) {
            var key = play.map[i][n];
            if (key) {
                com.mans[key].x = n;
                com.mans[key].y = i;
                com.mans[key].isShow = true;
            }
        }
    }
    play.show();


    // 시작 오디오
    (<HTMLAudioElement>Util.Get("startAudio")).play();


    // 장기판(알) 클릭 이벤트 처리기
    com.canvas.addEventListener("click", play.clickCanvas)

    //clearInterval(play.timer);
    //Util.Get("autoPlay").addEventListener("click", function(e) {
    //clearInterval(play.timer);
    //play.timer = setInterval("play.AIPlay()",1000);
    //	play.AIPlay()
    //})

    //// 선수
    //Util.Get("offensivePlay").addEventListener("click", function(e) {
    //    Play.IsOffensive=true;
    //    Play.IsPlay=true ;	
    //    Util.Get("chessRight").style.display = "none";
    //    play.init();
    //})
    //// 후수
    //Util.Get("defensivePlay").addEventListener("click", function(e) {
    //    Play.IsOffensive=false;
    //    Play.IsPlay=true ;	
    //    Util.Get("chessRight").style.display = "none";
    //    play.init();
    //})


    Util.Get("regretBn").addEventListener("click", function (e) {
        play.regret();
    })

    /*
    var initTime = new Date().getTime();
    for (var i=0; i<=100000; i++){
        
        var h=""
        var h=play.map.join();
        //for (var n in play.mans){
        //	if (play.mans[n].show) h+=play.mans[n].key+play.mans[n].x+play.mans[n].y
        //}
    }
    var nowTime= new Date().getTime();
    z([h,nowTime-initTime])
    */

} // end of play.init()



// 취소(물리기) 
play.regret = function () {

    // 판차림
    var map = Util.ArrayClone((new MapManager(JanggiEngine.Settings.ChoMapStyle, JanggiEngine.Settings.HanMapStyle)).GetMap());

    for (var i = 0; i < map.length; i++) {
        for (var n = 0; n < map[i].length; n++) {
            var key = map[i][n];
            if (key) {
                com.mans[key].x = n;
                com.mans[key].y = i;
                com.mans[key].isShow = true;
            }
        }
    }
    var pace = play.pace;
    pace.pop();
    pace.pop();

    for (var i = 0; i < pace.length; i++) {
        var p = pace[i].split("")
        var x = parseInt(p[0], 10);
        var y = parseInt(p[1], 10);
        var newX = parseInt(p[2], 10);
        var newY = parseInt(p[3], 10);
        var key = map[y][x];
        //try{

        var cMan = map[newY][newX];
        if (cMan) com.mans[map[newY][newX]].isShow = false;
        com.mans[key].x = newX;
        com.mans[key].y = newY;
        map[newY][newX] = key;
        delete map[y][x];
        if (i == pace.length - 1) {
            com.showPane(newX, newY, x, y)
        }
        //} catch (e){
        //	com.show()
        //	z([key,p,pace,map])

        //	}
    }
    play.map = map;
    play.my = 1;
    Play.IsPlay = true;
    com.show();
}



// 캔버스(장기판) 클릭
play.clickCanvas = function (e) {

    // 현재 플레이 중이 아니면 클릭 반응 없음
    if (!Play.IsPlay) return false;

    var key = play.getClickMan(e);
    var point = play.getClickPoint(e);

    var x = point.x;
    var y = point.y;

    // 만약 선택된 기물이 있으면
    if (key) {
        // 선택 또는 먹기
        play.clickMan(key, x, y);
    } else {
        // 없으면 이동
        play.clickPoint(x, y);
    }

    Play.IsFoul = play.checkFoul();
}


// 기물 클릭(선택 또는 클릭)
play.clickMan = function (key, x, y) {

    GlobalVariable.Count++; // 차수 증가

    var man = com.mans[key];

    if (play.nowManKey && play.nowManKey != key && man.my != com.mans[play.nowManKey].my) {

        // 기물이 갈 수 있는 곳이 있는지
        if (play.indexOfPs(com.mans[play.nowManKey].ps, [x, y])) {
            man.isShow = false;

            // Pace(보폭;속도): 이동 좌표를 의미함 : ["0616"]은 xy(0, 6)에서 xy(1, 6)으로 졸을 오른쪽으로 이동한 걸 의미, 즉 ["xyxy"]를 나타냄
            var pace = com.mans[play.nowManKey].x + "" + com.mans[play.nowManKey].y
            //z(bill.createMove(play.map,man.x,man.y,x,y))
            delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
            play.map[y][x] = play.nowManKey;
            com.showPane(com.mans[play.nowManKey].x, com.mans[play.nowManKey].y, x, y)
            com.mans[play.nowManKey].x = x;
            com.mans[play.nowManKey].y = y;
            com.mans[play.nowManKey].alpha = 1

            play.pace.push(pace + x + y);
            play.nowManKey = false;
            com.pane.isShow = false;
            com.dot.dots = [];
            com.show()

                // 기물 놓기 소리
            console.log("기물 놓기 소리"); 
            (<HTMLAudioElement>document.getElementById("clickAudio")).play;
            //Util.Get("clickAudio").play();

            if (key == "j0") {
                play.showWin(-1); // AI가 이김
                return;
            }
            if (key == "J0") {
                play.showWin(1); // User가 이김
                return; 
            }

            setTimeout("play.AIPlay()", 300);
        }

    } else {
        if (man.my === 1) {
            if (com.mans[play.nowManKey]) com.mans[play.nowManKey].alpha = 1;
            man.alpha = 0.6;
            com.pane.isShow = false;
            play.nowManKey = key;
            com.mans[key].ps = com.mans[key].bl();
            com.dot.dots = com.mans[key].ps
            com.show();

            // 기물 선택 소리 : selectAudio를 clickAudio로 변경해도 됨 - 나중에 소리 변경할 것...
            (<HTMLAudioElement>document.getElementById("selectAudio")).volume = 0.9; // 볼륨 조절
            (<HTMLAudioElement>document.getElementById("selectAudio")).play(); 
            //Util.Get("selectAudio").volume = 0.1; // 볼륨 조절
            //Util.Get("selectAudio").play();
        }
    }
}

// 기물 이동
play.clickPoint = function (x, y) {
    var key = play.nowManKey;
    var man = com.mans[key];
    if (play.nowManKey) {
        if (play.indexOfPs(com.mans[key].ps, [x, y])) {
            var pace = man.x + "" + man.y
            //z(bill.createMove(play.map,man.x,man.y,x,y))
            delete play.map[man.y][man.x];
            play.map[y][x] = key;
            com.showPane(man.x, man.y, x, y)
            man.x = x;
            man.y = y;
            man.alpha = 1;
            play.pace.push(pace + x + y);
            play.nowManKey = false;
            com.dot.dots = [];
            com.show();

            // 디버깅
            console.log(play.pace.join("")); // pace 표시

            //Util.Get("clickAudio").play();
            (<HTMLAudioElement>document.getElementById("clickAudio")).play(); 
            setTimeout("play.AIPlay()", 500);
        } else {
            //alert("")	
        }
    }

}


// AI 계산 시작
play.AIPlay = function () {
    //return
    play.my = -1; // AI 플레이 차례에선 my 속성이 -1
    var pace = AI.init(play.pace.join(""));
    //console.log("AIPlay(): pace : " + pace);
    if (!pace) {
        play.showWin(1);
        return;
    }
    play.pace.push(pace.join(""));


    // 디버깅
    console.log(play.pace.join("")); // pace 표시


    var key = play.map[pace[1]][pace[0]]
    play.nowManKey = key;

    var key = play.map[pace[3]][pace[2]];
    if (key) {
        play.AIclickMan(key, pace[2], pace[3]);
    } else {
        play.AIclickPoint(pace[2], pace[3]);
    }

    //Util.Get("clickAudio").play();
    (<HTMLAudioElement>document.getElementById("clickAudio")).play(); 
}



// 파울 체크: 장기판을 벗어나는 행동인지 확인
play.checkFoul = function () {
    var p = play.pace;
    var len = parseInt(p.length, 10);
    if (len > 11 && p[len - 1] == p[len - 5] && p[len - 5] == p[len - 9]) {
        return p[len - 4].split("");
    }
    return false;
}


// AI가 기물 먹기
play.AIclickMan = function (key, x, y) {
    var man = com.mans[key];

    man.isShow = false;
    delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
    play.map[y][x] = play.nowManKey;
    play.showPane(com.mans[play.nowManKey].x, com.mans[play.nowManKey].y, x, y)

    com.mans[play.nowManKey].x = x;
    com.mans[play.nowManKey].y = y;

    play.nowManKey = false; // AI 실행 다음 기물 선택 초기화

    //console.log("먹기");

    com.show()
    if (key == "j0") play.showWin(-1);
    if (key == "J0") play.showWin(1);
}

// AI가 기물 이동
play.AIclickPoint = function (x, y) {
    //console.log("이동");
    var key = play.nowManKey;
    var man = com.mans[key];
    if (play.nowManKey) {
        delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
        play.map[y][x] = key;

        com.showPane(man.x, man.y, x, y)


        man.x = x;
        man.y = y;

        play.nowManKey = false; // AI 실행 다음 기물 선택 초기화

    }
    com.show();
}


// 현재 선택된 기물이 갈 수 있는 좌표인지(true) 아닌지(false)
// ps: 갈수 있는 좌표 배열
// xy: 현재 가려고하는 좌표
play.indexOfPs = function (ps, xy) {
    for (var i = 0; i < ps.length; i++) {
        if (ps[i][0] == xy[0] && ps[i][1] == xy[1]) return true;
    }
    return false;

}

// 클릭된 좌표를 바탕으로 배열의 인덱스 가져오기
play.getClickPoint = function (e) {
    var domXY = Util.GetDomXY(com.canvas);
    var x = Math.round((e.pageX - domXY.x - com.pointStartX - 20) / com.spaceX)
    var y = Math.round((e.pageY - domXY.y - com.pointStartY - 20) / com.spaceY)
    return { "x": x, "y": y }
}

// 클릭된 기물 가져오기(배열에 저장된): map[y][x], 해당 위치에 없으면 false
play.getClickMan = function (e) {
    var clickXY = play.getClickPoint(e);
    var x = clickXY.x;
    var y = clickXY.y;
    if (x < 0 || x > 8 || y < 0 || y > 9) return false;
    return (play.map[y][x] && play.map[y][x] != "0") ? play.map[y][x] : false;
}


// 승패 결정: my: 1, -1
play.showWin = function (my) {
    Play.IsPlay = false;
    if (my === 1) {
        (<HTMLAudioElement>document.getElementById("winAudio")).play(); 
        //Util.Get("winAudio").play();
        alert("당신이 이겼습니다.");
    } else {
        (<HTMLAudioElement>document.getElementById("failAudio")).play(); 
        //Util.Get("failAudio").play();
        alert("당신이 졌습니다.");
    }
}

