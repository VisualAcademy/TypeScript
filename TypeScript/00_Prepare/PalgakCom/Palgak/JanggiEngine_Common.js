/// <reference path="./MapManager.ts" />
/// <reference path="./JanggiEngine.ts" />
/// <reference path="./JanggiEngine_AI.ts" />
/// <reference path="./JanggiEngine_Bill.ts" />
/// <reference path="./Play.ts" />
/// <reference path="./Palgak.ts" />
/// <reference path="./Util.ts" />
/// <reference path="./WeightedValue.ts" />
var je = JanggiEngine; // using JanggiEngine; 
//var unescape: any;
var com = com || {};
com.init = function (stype) {
    com.nowStype = stype || com.getCookie("stype") || "Big"; // 기본 스타일 큰 판형태
    var stype = Stage[com.nowStype];
    com.width = stype.width;
    com.height = stype.height;
    com.spaceX = stype.spaceX;
    com.spaceY = stype.spaceY;
    com.pointStartX = stype.pointStartX;
    com.pointStartY = stype.pointStartY;
    com.page = stype.page;
    Util.Get("box").style.width = com.width + 130 + "px";
    com.canvas = document.getElementById("chess"); // <canvas /> 요소 
    com.ctx = com.canvas.getContext("2d"); // canvas 그리기 개체(Context)
    com.canvas.width = com.width; // canvas width
    com.canvas.height = com.height; // canvas height
    com.childList = com.childList || []; // canvas에 올라갈 배경, 기물, 판 들에 대한 개체들(이미지)
    com.loadImages(com.page);
};
com.Page_Load = function () {
    com.bg = new com.class.Bg();
    com.dot = new com.class.Dot();
    com.pane = new com.class.Pane(); // 장기판 정보 저장
    com.pane.isShow = false;
    com.childList = [com.bg, com.dot, com.pane];
    com.mans = {}; // 모든 기물(Man) 정보를 보관해 놓을 배열: com.mans["C1"].x
    com.createMans((new MapManager(je.Settings.ChoMapStyle, je.Settings.HanMapStyle)).GetMap()); // 판차림
    com.bg.show();
};
// 페이지 로드 이벤트 처리기
window.onload = function () {
    com.Page_Load();
    //play.init();
    Util.Get("billBn").addEventListener("click", function (e) {
        if (confirm("기보를 보시겠습니까？")) {
            com.init();
            Util.Get("chessRight").style.display = "block";
            Util.Get("moveInfo").style.display = "none";
            bill.init();
        }
    });
    Util.Get("btnGameNotation").addEventListener("click", function (e) {
        if (confirm("기보테스트를 보시겠습니까？")) {
            com.show();
            //com.init();
            //Util.Get("chessRight").style.display = "block";
            //Util.Get("moveInfo").style.display = "none";
            //Notation.init();
        }
    });
    Util.Get("btnBest").addEventListener("click", function (e) {
        if (confirm("최상급 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true;
            Play.Depth = 6;
            play.init();
        }
    });
    Util.Get("btnMaster").addEventListener("click", function (e) {
        if (confirm("상급 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true;
            Play.Depth = 5;
            play.init();
        }
    });
    Util.Get("superPlay").addEventListener("click", function (e) {
        if (confirm("중급 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true;
            Play.Depth = 4;
            play.init();
        }
    });
    //[1] 초급 난이도 시작 버튼
    Util.Get("tyroPlay").addEventListener("click", function (e) {
        if (confirm("초급 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true; // 플레이 시작
            Play.Depth = 3; // 초급(3수) 난이도 지정(기본값)
            play.init(); // 플레이 초기화
        }
    }); // 검토 완료
    //[1] 초급 난이도 시작 버튼
    Util.Get("btnStartPlay").addEventListener("click", function (e) {
        if (confirm("왕초보 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true; // 플레이 시작
            Play.Depth = 2; // 초급(3수) 난이도 지정(기본값)
            play.init(); // 플레이 초기화
        }
    }); // 검토 완료
    //[1] 초급 난이도 시작 버튼
    Util.Get("btnStartPlay1").addEventListener("click", function (e) {
        if (confirm("왕초보 난이도 시작？")) {
            Util.Get("chessRight").style.display = "none";
            Util.Get("moveInfo").style.display = "block";
            Util.Get("moveInfo").innerHTML = "";
            Play.IsPlay = true; // 플레이 시작
            Play.Depth = 1; // 초급(3수) 난이도 지정(기본값)
            play.init(); // 플레이 초기화
        }
    }); // 검토 완료
    // 판크기 변경 버튼
    Util.Get("stypeBn").addEventListener("click", function (e) {
        var stype = com.nowStype;
        if (stype == "Small")
            stype = "Big";
        else if (stype == "Big")
            stype = "Small";
        com.init(stype);
        com.show();
        Play.Depth = 4;
        play.init();
        document.cookie = "stype=" + stype;
        clearInterval(timer);
        var i = 0;
        var timer = setInterval(function () {
            com.show();
            if (i++ >= 5)
                clearInterval(timer);
        }, 2000);
    });
    // Gambit 가져오기: 종류별로 16개 정도를 만들 것 또는 데이터베이스 화
    com.gambit = "";
    AI.historyBill = "";
    if (JanggiEngine.Settings.ChoMapStyle == BoardArrangementMode.Center && JanggiEngine.Settings.HanMapStyle == BoardArrangementMode.Center) {
        // 기본값으로 초 안상 대 한 안상(AI)
        // Gambit 가져오기: 
        com.getData("js/Gambit.Red.Center.js", function (data) {
            com.gambit = data.split(" "); // 공백을 기준으로 Gambit 저장된 내역 가져오기
            AI.historyBill = com.gambit;
        });
    }
    else if (JanggiEngine.Settings.ChoMapStyle == BoardArrangementMode.Left && JanggiEngine.Settings.HanMapStyle == BoardArrangementMode.Right) {
        // [1강] 후수포진 - 귀매 대 귀마 적용: http://janggi.hangame.com/lecture.nhn?m=read&mode=LECTURE0103&lecseq=337&gseq=340&page=1&searchtext=
        com.getData("js/Gambit.Han.ChoLeft.HanRight.js", function (data) {
            com.gambit = data.split(" "); // 공백을 기준으로 Gambit 저장된 내역 가져오기
            AI.historyBill = com.gambit;
        });
    }
    com.getData("js/store.js", function (data) {
        com.store = data.split(" ");
    });
    // JSON 테스트
    com.getData("/api/NotationService", function (data) {
        com.json = data;
    });
};
// 장기판에 이미지 로드
com.loadImages = function (stype) {
    com.bgImg = new Image();
    com.bgImg.src = "img/" + stype + "/bg.png";
    com.dotImg = new Image();
    com.dotImg.src = "img/" + stype + "/dot.png";
    for (var i in com.args) {
        com[i] = {};
        com[i].img = new Image();
        com[i].img.src = "img/" + stype + "/" + com.args[i].img + ".png";
    }
    com.paneImg = new Image();
    com.paneImg.src = "img/" + stype + "/r_box.png";
    // 브라우저 배경
    document.getElementsByTagName("body")[0].style.background = "url(img/" + stype + "/bg.jpg)";
};
// 캔버스에 영역 초기화 후 기물들 그리기
com.show = function () {
    com.ctx.clearRect(0, 0, com.width, com.height);
    for (var i = 0; i < com.childList.length; i++) {
        com.childList[i].show();
    }
};
// 현재 좌표를 새로운 자료로 설정
com.showPane = function (x, y, newX, newY) {
    com.pane.isShow = true;
    com.pane.x = x;
    com.pane.y = y;
    com.pane.newX = newX;
    com.pane.newY = newY;
};
// 기본 판차림 배열(map)을 사용해서 각각의 기물정보 저장하기
com.createMans = function (map) {
    // i: 행 반복
    for (var i = 0; i < map.length; i++) {
        // n: 열 반복
        for (var n = 0; n < map[i].length; n++) {
            var key = map[i][n];
            if (key) {
                com.mans[key] = new com.class.Man(key);
                com.mans[key].x = n; // 열
                com.mans[key].y = i; // 행
                // 만들어진 기물 정보를 childList 배열에 추가
                com.childList.push(com.mans[key]);
            }
        }
    }
}; // end of createMans
//debug alert
com.alert = function (obj, f, n) {
    if (typeof obj !== "object") {
        try {
            console.log(obj);
        }
        catch (e) { }
        //return alert(obj);
    }
    var arr = [];
    for (var i in obj)
        arr.push(i + " = " + obj[i]);
    try {
        console.log(arr.join(n || "\n"));
    }
    catch (e) { }
    //return alert(arr.join(n||"\n\r"));
};
var z = com.alert;
com.getCookie = function (name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        var end;
        if (start != -1) {
            start = start + name.length + 1;
            end = document.cookie.indexOf(";", start);
            if (end == -1)
                end = document.cookie.length;
            return unescape(document.cookie.substring(start, end));
        }
    }
    return false;
};
// 나중에 이 함수 업데이트할 것...
com.getData = function (url, fun) {
    var XMLHttpRequestObject;
    //if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    //} else if (window.ActiveXObject) {
    //    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    //}
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", url);
        XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XMLHttpRequestObject.onreadystatechange = function () {
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                fun(XMLHttpRequestObject.responseText);
            }
        };
        XMLHttpRequestObject.send(null);
    }
};
com.createMove = function (map, x, y, newX, newY) {
    var h = "";
    var man = com.mans[map[y][x]];
    h += man.text;
    map[newY][newX] = map[y][x];
    delete map[y][x];
    if (man.my === 1) {
        var mumTo = ["8", "7", "6", "5", "4", "3", "2", "1", "0"];
        newX = 8 - newX;
        h += mumTo[8 - x];
        if (newY > y) {
            h += "↓"; // 아래로
            if (man.pater == "m" || man.pater == "s" || man.pater == "x") {
                h += mumTo[newX];
            }
            else {
                h += mumTo[newY - y - 1];
            }
        }
        else if (newY < y) {
            h += "↑"; // 위로
            if (man.pater == "m" || man.pater == "s" || man.pater == "x" || man.pater == "j") {
                h += mumTo[newX];
            }
            else {
                h += mumTo[y - newY - 1];
            }
        }
        else {
            h += "→"; //~에서 ~로
            h += mumTo[newX];
        }
    }
    else {
        var mumTo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        h += mumTo[x];
        if (newY > y) {
            h += "↓";
            if (man.pater == "M" || man.pater == "S" || man.pater == "X") {
                h += mumTo[newX];
            }
            else {
                h += mumTo[newY - y - 1];
            }
        }
        else if (newY < y) {
            h += "↑";
            if (man.pater == "M" || man.pater == "S" || man.pater == "X" || man.pater == "J") {
                h += mumTo[newX];
            }
            else {
                h += mumTo[y - newY - 1];
            }
        }
        else {
            h += "→";
            h += mumTo[newX];
        }
    }
    return h;
};
com.keys = {
    "c0": "c", "c1": "c",
    "m0": "m", "m1": "m",
    "x0": "x", "x1": "x",
    "s0": "s", "s1": "s",
    "j0": "j",
    "p0": "p", "p1": "p",
    "z0": "z", "z1": "z", "z2": "z", "z3": "z", "z4": "z", "z5": "z",
    "C0": "C", "C1": "C",
    "M0": "M", "M1": "M",
    "X0": "X", "X1": "X",
    "S0": "S", "S1": "S",
    "J0": "J",
    "P0": "P", "P1": "P",
    "Z0": "Z", "Z1": "Z", "Z2": "Z", "Z3": "Z", "Z4": "Z", "Z5": "Z",
};
// 규칙 들 정의
com.bylaw = {};
// 차
com.bylaw.c = function (x, y, map, my) {
    var d = [];
    // 왼쪽
    for (var i = x - 1; i >= 0; i--) {
        if (map[y][i]) {
            if (com.mans[map[y][i]].my != my)
                d.push([i, y]);
            break;
        }
        else {
            d.push([i, y]);
        }
    }
    // 오른쪽
    for (var i = x + 1; i <= 8; i++) {
        if (map[y][i]) {
            if (com.mans[map[y][i]].my != my)
                d.push([i, y]);
            break;
        }
        else {
            d.push([i, y]);
        }
    }
    // 위
    for (var i = y - 1; i >= 0; i--) {
        if (map[i][x]) {
            if (com.mans[map[i][x]].my != my)
                d.push([x, i]);
            break;
        }
        else {
            d.push([x, i]);
        }
    }
    // 아래
    for (var i = y + 1; i <= 9; i++) {
        if (map[i][x]) {
            if (com.mans[map[i][x]].my != my)
                d.push([x, i]);
            break;
        }
        else {
            d.push([x, i]);
        }
    }
    if (JanggiEngine.Utility.IsKingdom(x, y)) {
        // 대각선 이동
        // 아래 궁성
        // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
        if (!(x == 4 && y == 7) && !(x == 4 && y == 9) && !(x == 3 && y == 8) && !(x == 5 && y == 8)) {
            // 오른쪽 대각선 이동: 4시 방향
            if (y - x == 4) {
                // 오른아래
                if (y + 1 <= 9 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my))
                    d.push([x + 1, y + 1]);
                // 오른아래:차가 맨 왼쪽 귀
                if (y == 7) {
                    // 오른아래++
                    if (y + 2 <= 9 && x + 2 <= 5 && !play.map[y + 1][x + 1] && !com.mans[map[y + 1][x + 1]] && (!com.mans[map[y + 2][x + 2]] || com.mans[map[y + 2][x + 2]].my != my))
                        d.push([x + 2, y + 2]);
                }
                // 왼쪽위
                if (y - 1 >= 7 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                    d.push([x - 1, y - 1]);
                if (y == 9) {
                    if (y - 2 >= 7 && x - 2 >= 3 && !play.map[y - 1][x - 1] && !com.mans[map[y - 1][x - 1]] && (!com.mans[map[y - 2][x - 2]] || com.mans[map[y - 2][x - 2]].my != my))
                        d.push([x - 2, y - 2]);
                }
            }
            // 왼쪽 대각선 이동: 7시 방향
            if (x + y == 12) {
                // 왼쪽아래
                if (y + 1 <= 9 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my))
                    d.push([x - 1, y + 1]);
                // 왼쪽아래:차가 맨 오른쪽 귀
                if (y == 7) {
                    if (y + 2 <= 9 && x - 2 >= 3 && !play.map[y + 1][x - 1] && !com.mans[map[y + 1][x - 1]] && (!com.mans[map[y + 2][x - 2]] || com.mans[map[y + 2][x - 2]].my != my))
                        d.push([x - 2, y + 2]);
                }
                // 오른위
                if (y - 1 >= 7 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                    d.push([x + 1, y - 1]);
                if (y == 9) {
                    if (y - 2 >= 7 && x + 2 <= 5 && !play.map[y - 1][x + 1] && !com.mans[map[y - 1][x + 1]] && (!com.mans[map[y - 2][x + 2]] || com.mans[map[y - 2][x + 2]].my != my))
                        d.push([x + 2, y - 2]);
                }
            }
        }
        // 위 궁성
        // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
        if (!(x == 4 && y == 0) && !(x == 4 && y == 2) && !(x == 3 && y == 1) && !(x == 5 && y == 1)) {
            // 오른쪽 대각선 이동: 4시 방향
            if (x <= 5 && x - y == 3) {
                // 4시 방향
                if (y + 1 <= 2 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my))
                    d.push([x + 1, y + 1]);
                if (y == 0) {
                    if (y + 2 <= 2 && x + 2 <= 5 && !play.map[y + 1][x + 1] && !com.mans[map[y + 1][x + 1]] && (!com.mans[map[y + 2][x + 2]] || com.mans[map[y + 2][x + 2]].my != my))
                        d.push([x + 2, y + 2]);
                }
                // 10시 방향
                if (y - 1 >= 0 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                    d.push([x - 1, y - 1]);
                if (y == 2) {
                    if (y - 2 >= 0 && x - 2 >= 3 && !play.map[y - 1][x - 1] && !com.mans[map[y - 1][x - 1]] && (!com.mans[map[y - 2][x - 2]] || com.mans[map[y - 2][x - 2]].my != my))
                        d.push([x - 2, y - 2]);
                }
            }
            // 왼쪽 대각선 이동: 7시 방향
            if (x >= 3 && x + y == 5) {
                // 7시 방향
                if (y + 1 <= 2 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my))
                    d.push([x - 1, y + 1]);
                if (y == 0) {
                    if (y + 2 <= 2 && x - 2 >= 3 && !play.map[y + 1][x - 1] && !com.mans[map[y + 1][x - 1]] && (!com.mans[map[y + 2][x - 2]] || com.mans[map[y + 2][x - 2]].my != my))
                        d.push([x - 2, y + 2]);
                }
                // 1시 방향
                if (y - 1 >= 0 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                    d.push([x + 1, y - 1]);
                if (y == 2) {
                    if (y - 2 >= 0 && x + 2 <= 5 && !play.map[y - 1][x + 1] && !com.mans[map[y - 1][x + 1]] && (!com.mans[map[y - 2][x + 2]] || com.mans[map[y - 2][x + 2]].my != my))
                        d.push([x + 2, y - 2]);
                }
            }
        }
    }
    return d;
};
// 마: 완료
com.bylaw.m = function (x, y, map, my) {
    var d = [];
    //1시
    if (y - 2 >= 0 && x + 1 <= 8 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!com.mans[map[y - 2][x + 1]] || com.mans[map[y - 2][x + 1]].my != my))
        d.push([x + 1, y - 2]);
    //2시
    if (y - 1 >= 0 && x + 2 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!com.mans[map[y - 1][x + 2]] || com.mans[map[y - 1][x + 2]].my != my))
        d.push([x + 2, y - 1]);
    //4시
    if (y + 1 <= 9 && x + 2 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!com.mans[map[y + 1][x + 2]] || com.mans[map[y + 1][x + 2]].my != my))
        d.push([x + 2, y + 1]);
    //5시
    if (y + 2 <= 9 && x + 1 <= 8 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!com.mans[map[y + 2][x + 1]] || com.mans[map[y + 2][x + 1]].my != my))
        d.push([x + 1, y + 2]);
    //7시
    if (y + 2 <= 9 && x - 1 >= 0 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!com.mans[map[y + 2][x - 1]] || com.mans[map[y + 2][x - 1]].my != my))
        d.push([x - 1, y + 2]);
    //8시
    if (y + 1 <= 9 && x - 2 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!com.mans[map[y + 1][x - 2]] || com.mans[map[y + 1][x - 2]].my != my))
        d.push([x - 2, y + 1]);
    //10시(왼쪽 다음 위로)
    if (y - 1 >= 0 && x - 2 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!com.mans[map[y - 1][x - 2]] || com.mans[map[y - 1][x - 2]].my != my))
        d.push([x - 2, y - 1]);
    //11시(위로 다음 왼쪽)
    if (y - 2 >= 0 && x - 1 >= 0 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!com.mans[map[y - 2][x - 1]] || com.mans[map[y - 2][x - 1]].my != my))
        d.push([x - 1, y - 2]);
    return d;
};
// 상: 완료
com.bylaw.x = function (x, y, map, my) {
    var d = [];
    ////1시
    //if (y - 3 >= 0 && x + 2 <= 8 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!com.mans[map[y - 2][x + 1]] || com.mans[map[y - 2][x + 1]].my != my) && (!com.mans[map[y - 3][x + 2]] || com.mans[map[y - 3][x + 2]].my != my)) d.push([x + 2, y - 3]);
    ////2시
    //if (y - 2 >= 0 && x + 3 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!com.mans[map[y - 1][x + 2]] || com.mans[map[y - 1][x + 2]].my != my) && (!com.mans[map[y - 2][x + 3]] || com.mans[map[y - 2][x + 3]].my != my)) d.push([x + 3, y - 2]);
    ////4시
    //if (y + 2 <= 9 && x + 3 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!com.mans[map[y + 1][x + 2]] || com.mans[map[y + 1][x + 2]].my != my) && (!com.mans[map[y + 2][x + 3]] || com.mans[map[y + 2][x + 3]].my != my)) d.push([x + 3, y + 2]);
    ////5시
    //if (y + 3 <= 9 && x + 2 <= 8 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!com.mans[map[y + 2][x + 1]] || com.mans[map[y + 2][x + 1]].my != my) && (!com.mans[map[y + 3][x + 2]] || com.mans[map[y + 3][x + 2]].my != my)) d.push([x + 2, y + 3]);
    ////7시
    //if (y + 3 <= 9 && x - 2 >= 0 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!com.mans[map[y + 2][x - 1]] || com.mans[map[y + 2][x - 1]].my != my) && (!com.mans[map[y + 3][x - 2]] || com.mans[map[y + 3][x - 2]].my != my)) d.push([x - 2, y + 3]);
    ////8시
    //if (y + 2 <= 9 && x - 3 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!com.mans[map[y + 1][x - 2]] || com.mans[map[y + 1][x - 2]].my != my) && (!com.mans[map[y + 2][x - 3]] || com.mans[map[y + 2][x - 3]].my != my)) d.push([x - 3, y + 2]);
    ////10시
    //if (y - 2 >= 0 && x - 3 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!com.mans[map[y - 1][x - 2]] || com.mans[map[y - 1][x - 2]].my != my) && (!com.mans[map[y - 2][x - 3]] || com.mans[map[y - 2][x - 3]].my != my)) d.push([x - 3, y - 2]);
    ////11시
    //if (y - 3 >= 0 && x - 2 >= 0 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!com.mans[map[y - 2][x - 1]] || com.mans[map[y - 2][x - 1]].my != my) && (!com.mans[map[y - 3][x - 2]] || com.mans[map[y - 3][x - 2]].my != my)) d.push([x - 2, y - 3]);
    //1시
    if (y - 3 >= 0 && x + 2 <= 8 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!play.map[y - 2][x + 1] && !com.mans[map[y - 2][x + 1]]) && (!com.mans[map[y - 3][x + 2]] || com.mans[map[y - 3][x + 2]].my != my))
        d.push([x + 2, y - 3]);
    //2시
    if (y - 2 >= 0 && x + 3 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!play.map[y - 1][x + 2] && !com.mans[map[y - 1][x + 2]]) && (!com.mans[map[y - 2][x + 3]] || com.mans[map[y - 2][x + 3]].my != my))
        d.push([x + 3, y - 2]);
    //4시
    if (y + 2 <= 9 && x + 3 <= 8 && !play.map[y][x + 1] && !com.mans[map[y][x + 1]] && (!play.map[y + 1][x + 2] && !com.mans[map[y + 1][x + 2]]) && (!com.mans[map[y + 2][x + 3]] || com.mans[map[y + 2][x + 3]].my != my))
        d.push([x + 3, y + 2]);
    //5시
    if (y + 3 <= 9 && x + 2 <= 8 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!play.map[y + 2][x + 1] && !com.mans[map[y + 2][x + 1]]) && (!com.mans[map[y + 3][x + 2]] || com.mans[map[y + 3][x + 2]].my != my))
        d.push([x + 2, y + 3]);
    //7시
    if (y + 3 <= 9 && x - 2 >= 0 && !play.map[y + 1][x] && !com.mans[map[y + 1][x]] && (!play.map[y + 2][x - 1] && !com.mans[map[y + 2][x - 1]]) && (!com.mans[map[y + 3][x - 2]] || com.mans[map[y + 3][x - 2]].my != my))
        d.push([x - 2, y + 3]);
    //8시
    if (y + 2 <= 9 && x - 3 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!play.map[y + 1][x - 2] && !com.mans[map[y + 1][x - 2]]) && (!com.mans[map[y + 2][x - 3]] || com.mans[map[y + 2][x - 3]].my != my))
        d.push([x - 3, y + 2]);
    //10시
    if (y - 2 >= 0 && x - 3 >= 0 && !play.map[y][x - 1] && !com.mans[map[y][x - 1]] && (!play.map[y - 1][x - 2] && !com.mans[map[y - 1][x - 2]]) && (!com.mans[map[y - 2][x - 3]] || com.mans[map[y - 2][x - 3]].my != my))
        d.push([x - 3, y - 2]);
    //11시
    if (y - 3 >= 0 && x - 2 >= 0 && !play.map[y - 1][x] && !com.mans[map[y - 1][x]] && (!play.map[y - 2][x - 1] && !com.mans[map[y - 2][x - 1]]) && (!com.mans[map[y - 3][x - 2]] || com.mans[map[y - 3][x - 2]].my != my))
        d.push([x - 2, y - 3]);
    return d;
};
// 사: 이동 경로 완성
com.bylaw.s = function (x, y, map, my) {
    var d = [];
    if (my === 1) { // 아래 판(나)
        // 전진
        if (y - 1 >= 7 && (!com.mans[map[y - 1][x]] || com.mans[map[y - 1][x]].my != my))
            d.push([x, y - 1]);
        // 오른쪽
        if (x + 1 <= 5 && (!com.mans[map[y][x + 1]] || com.mans[map[y][x + 1]].my != my))
            d.push([x + 1, y]);
        // 왼쪽
        if (x - 1 >= 3 && (!com.mans[map[y][x - 1]] || com.mans[map[y][x - 1]].my != my))
            d.push([x - 1, y]);
        // 아래
        if (y + 1 <= 9 && (!com.mans[map[y + 1][x]] || com.mans[map[y + 1][x]].my != my))
            d.push([x, y + 1]);
        // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
        if (!(x == 4 && y == 7) && !(x == 4 && y == 9) && !(x == 3 && y == 8) && !(x == 5 && y == 8)) {
            // 오른아래
            if (y + 1 <= 9 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my))
                d.push([x + 1, y + 1]);
            // 왼쪽아래
            if (y + 1 <= 9 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my))
                d.push([x - 1, y + 1]);
            // 오른위
            if (y - 1 >= 7 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                d.push([x + 1, y - 1]);
            // 왼쪽위
            if (y - 1 >= 7 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                d.push([x - 1, y - 1]);
        }
    }
    else {
        // 아래서 위로
        //if (y - 1 >= 0 && !play.map[y - 1][x] && (!com.mans[map[y - 1][x]] || com.mans[map[y - 1][x]].my != my)) d.push([x, y - 1]); // 처음에는 이 로직이었으나, (4,2)->(4,1)로 차를 먹지못하는 에러 잡기때문에 아래 로직으로 변경
        if (y - 1 >= 0 && (!com.mans[map[y - 1][x]] || com.mans[map[y - 1][x]].my != my))
            d.push([x, y - 1]);
        // 오른쪽
        if (x + 1 <= 5 && (!com.mans[map[y][x + 1]] || com.mans[map[y][x + 1]].my != my))
            d.push([x + 1, y]);
        // 왼쪽
        if (x - 1 >= 3 && (!com.mans[map[y][x - 1]] || com.mans[map[y][x - 1]].my != my))
            d.push([x - 1, y]);
        // 위에서 아래로
        if (y + 1 <= 2 && (!com.mans[map[y + 1][x]] || com.mans[map[y + 1][x]].my != my))
            d.push([x, y + 1]);
        // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
        if (!(x == 4 && y == 0) && !(x == 4 && y == 2) && !(x == 3 && y == 1) && !(x == 5 && y == 1)) {
            // 4시 방향
            if (y + 1 <= 2 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my))
                d.push([x + 1, y + 1]);
            // 7시 방향
            if (y + 1 <= 2 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my))
                d.push([x - 1, y + 1]);
            // 1시 방향
            if (y - 1 >= 0 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                d.push([x + 1, y - 1]);
            // 10시 방향
            if (y - 1 >= 0 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                d.push([x - 1, y - 1]);
        }
    }
    return d;
};
// 왕: 이동 경로 완성
com.bylaw.j = function (x, y, map, my) {
    var d = [];
    //var isNull = (function (y1, y2) {
    //    var y1 = com.mans["j0"].y;
    //    var x1 = com.mans["J0"].x;
    //    var y2 = com.mans["J0"].y;
    //    for (var i = y1 - 1; i > y2; i--) {
    //        if (map[i][x1]) return false;
    //    }
    //    return true;
    //})();
    return com.bylaw.s(x, y, map, my); // 왕은 사와 동일
};
// 포
com.bylaw.p = function (x, y, map, my) {
    var d = [];
    // 왼쪽(Left) 이동 성공
    var n = 0;
    var isPo = false;
    for (var i = x - 1; i >= 0; i--) {
        if (map[y][i]) {
            if (isPo == false) {
                // 넘어가야할 기물이 포라면, 
                if (com.mans[map[y][i]].pater == "p" || com.mans[map[y][i]].pater == "P") {
                    isPo = true; // 포는 넘질 못한다.
                    break; // 현재 for문 종료
                }
            }
            if (n == 0) {
                n++;
                continue;
            }
            else {
                if (com.mans[map[y][i]] && com.mans[map[y][i]].pater == "p") {
                    break;
                }
                if (com.mans[map[y][i]].my != my) {
                    d.push([i, y]); // 말잡기(포가 아니고 내 편이 아니라면, 잡기 가능
                }
                break;
            }
        }
        else {
            if (n == 0) {
                // 넘을 말이 없으면...
            }
            else {
                // 넘을 말이 있고 포가 아니라면, 
                if (!isPo)
                    d.push([i, y]); // 이동
            }
        }
    }
    // 오른쪽(Right)
    var n = 0;
    var isPo = false;
    for (var i = x + 1; i <= 8; i++) {
        if (map[y][i]) {
            if (isPo == false) {
                // 넘어가야할 기물이 포라면, 
                if (com.mans[map[y][i]].pater == "p" || com.mans[map[y][i]].pater == "P") {
                    isPo = true; // 포는 넘질 못한다.
                    break; // 현재 for문 종료
                }
            }
            if (n == 0) {
                n++;
                continue;
            }
            else {
                if (com.mans[map[y][i]] && com.mans[map[y][i]].pater == "p") {
                    break;
                }
                if (com.mans[map[y][i]].my != my) {
                    d.push([i, y]);
                }
                break;
            }
        }
        else {
            if (n == 0) {
                // 넘을 말이 없으면...
            }
            else {
                // 넘을 말이 있고 포가 아니라면, 
                if (!isPo)
                    d.push([i, y]); // 이동
            }
        }
    }
    // 위로
    var n = 0;
    var isPo = false; // 포인지 판단하는 것은 일단 false
    // i는 행을 감소 시키면서 말이 위로 이동하는 로직 처리
    for (var i = y - 1; i >= 0; i--) {
        // 위로 올라갈 곳에 기물이 있느냐?
        if (map[i][x]) {
            if (isPo == false) {
                // 넘어가야할 기물이 포라면, 
                if (com.mans[map[i][x]].pater == "p" || com.mans[map[i][x]].pater == "P") {
                    isPo = true; // 포는 넘질 못한다.
                    break; // 현재 for문 종료
                }
            }
            // 넘어 왔다면, 
            if (n == 0) {
                n++;
                continue;
            }
            else {
                if (com.mans[map[i][x]] && com.mans[map[i][x]].pater == "p") {
                    break;
                }
                if (com.mans[map[i][x]].my != my) {
                    d.push([x, i]); // 먹어라
                }
                break;
            }
        }
        else {
            if (n == 0) {
                // 넘을 말이 없으면...
            }
            else {
                // 넘을 말이 있고 포가 아니라면, 
                if (!isPo)
                    d.push([x, i]); // 이동
            }
        }
    }
    // 아래로
    var n = 0;
    var isPo = false;
    for (var i = y + 1; i <= 9; i++) {
        if (map[i][x]) {
            if (isPo == false) {
                // 넘어가야할 기물이 포라면, 
                if (com.mans[map[i][x]].pater == "p" || com.mans[map[i][x]].pater == "P") {
                    isPo = true; // 포는 넘질 못한다.
                    break; // 현재 for문 종료
                }
            }
            if (n == 0) {
                n++;
                continue;
            }
            else {
                if (com.mans[map[i][x]] && com.mans[map[i][x]].pater == "p") {
                    break;
                }
                if (com.mans[map[i][x]].my != my) {
                    d.push([x, i]);
                }
                break;
            }
        }
        else {
            if (n == 0) {
                // 넘을 말이 없으면...
            }
            else {
                // 넘을 말이 있고 포가 아니라면, 
                if (!isPo)
                    d.push([x, i]); // 이동
            }
        }
    }
    // 대각선 이동
    // 대각선 이동: 기본은 차의 궁성 내에서의 이동 로직을 가져온 후 중간에 포가 아닌 다른 기물이 있고 건너뛴 자리를 판단하는 로직 적용
    // 아래 궁성
    // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
    if (!(x == 4 && y == 7) && !(x == 4 && y == 9) && !(x == 3 && y == 8) && !(x == 5 && y == 8)) {
        // 오른쪽 대각선 이동: 4시 방향
        if (y - x == 4) {
            // 오른아래:포가 맨 왼쪽 귀
            if (y == 7) {
                // 오른아래++
                if (y + 2 <= 9 && x + 2 <= 5 && (com.mans[map[y + 1][x + 1]] && com.mans[map[y + 1][x + 1]].pater != "p") && (!com.mans[map[y + 2][x + 2]] || com.mans[map[y + 2][x + 2]].my != my))
                    d.push([x + 2, y + 2]);
            }
            // 왼쪽위
            if (y == 9) {
                if (y - 2 >= 7 && x - 2 >= 3 && (com.mans[map[y - 1][x - 1]] && com.mans[map[y - 1][x - 1]].pater != "p") && (!com.mans[map[y - 2][x - 2]] || com.mans[map[y - 2][x - 2]].my != my))
                    d.push([x - 2, y - 2]);
            }
        }
        // 왼쪽 대각선 이동: 7시 방향
        if (x + y == 12) {
            // 왼쪽아래
            // 왼쪽아래:포가 맨 오른쪽 귀
            if (y == 7) {
                if (y + 2 <= 9 && x - 2 >= 3 && (com.mans[map[y + 1][x - 1]] && com.mans[map[y + 1][x - 1]].pater != "p") && (!com.mans[map[y + 2][x - 2]] || com.mans[map[y + 2][x - 2]].my != my))
                    d.push([x - 2, y + 2]);
            }
            // 오른위
            if (y == 9) {
                if (y - 2 >= 7 && x + 2 <= 5 && (com.mans[map[y - 1][x + 1]] && com.mans[map[y - 1][x + 1]].pater != "p") && (!com.mans[map[y - 2][x + 2]] || com.mans[map[y - 2][x + 2]].my != my))
                    d.push([x + 2, y - 2]);
            }
        }
    }
    // 위 궁성
    // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
    if (!(x == 4 && y == 0) && !(x == 4 && y == 2) && !(x == 3 && y == 1) && !(x == 5 && y == 1)) {
        // 오른쪽 대각선 이동: 4시 방향
        if (x <= 5 && x - y == 3) {
            // 4시 방향
            if (y == 0) {
                if (y + 2 <= 2 && x + 2 <= 5 && (com.mans[map[y + 1][x + 1]] && com.mans[map[y + 1][x + 1]].pater != "p") && (!com.mans[map[y + 2][x + 2]] || com.mans[map[y + 2][x + 2]].my != my))
                    d.push([x + 2, y + 2]);
            }
            // 10시 방향
            if (y == 2) {
                if (y - 2 >= 0 && x - 2 >= 3 && (com.mans[map[y - 1][x - 1]] && com.mans[map[y - 1][x - 1]].pater != "p") && (!com.mans[map[y - 2][x - 2]] || com.mans[map[y - 2][x - 2]].my != my))
                    d.push([x - 2, y - 2]);
            }
        }
        // 왼쪽 대각선 이동: 7시 방향
        if (x >= 3 && x + y == 5) {
            // 7시 방향
            if (y == 0) {
                if (y + 2 <= 2 && x - 2 >= 3 && (com.mans[map[y + 1][x - 1]] && com.mans[map[y + 1][x - 1]].pater != "p") && (!com.mans[map[y + 2][x - 2]] || com.mans[map[y + 2][x - 2]].my != my))
                    d.push([x - 2, y + 2]);
            }
            // 1시 방향
            if (y == 2) {
                if (y - 2 >= 0 && x + 2 <= 5 && (com.mans[map[y - 1][x + 1]] && com.mans[map[y - 1][x + 1]].pater != "p") && (!com.mans[map[y - 2][x + 2]] || com.mans[map[y - 2][x + 2]].my != my))
                    d.push([x + 2, y - 2]);
            }
        }
    }
    return d;
};
// 졸병: 이동 경로 완성: 사처럼 대각선 이동하는 로직 추가할 것#######################################################
// 궁성 내에서 대각선 이동 관련 로직 살펴볼 것...
com.bylaw.z = function (x, y, map, my) {
    var d = [];
    if (my === 1) { // 아래서 위로 공격
        // 전진
        if (y - 1 >= 0 && (!com.mans[map[y - 1][x]] || com.mans[map[y - 1][x]].my != my))
            d.push([x, y - 1]);
        // 오른쪽
        if (x + 1 <= 8 && (!com.mans[map[y][x + 1]] || com.mans[map[y][x + 1]].my != my))
            d.push([x + 1, y]);
        // 왼쪽
        if (x - 1 >= 0 && (!com.mans[map[y][x - 1]] || com.mans[map[y][x - 1]].my != my))
            d.push([x - 1, y]);
    }
    else {
        // 전진
        if (y + 1 <= 9 && (!com.mans[map[y + 1][x]] || com.mans[map[y + 1][x]].my != my))
            d.push([x, y + 1]);
        // 오른쪽
        if (x + 1 <= 8 && (!com.mans[map[y][x + 1]] || com.mans[map[y][x + 1]].my != my))
            d.push([x + 1, y]);
        // 왼쪽
        if (x - 1 >= 0 && (!com.mans[map[y][x - 1]] || com.mans[map[y][x - 1]].my != my))
            d.push([x - 1, y]);
    }
    // 아래 궁성
    // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
    if (!(x == 4 && y == 7) && !(x == 4 && y == 9) && !(x == 3 && y == 8) && !(x == 5 && y == 8)) {
        // 오른쪽 대각선 이동: 4시 방향
        if (y - x == 4) {
            // 오른아래: 졸병은 뒤로 갈 수 없음
            //if (y + 1 <= 9 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my)) d.push([x + 1, y + 1]);
            // 왼쪽위
            if (y - 1 >= 7 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                d.push([x - 1, y - 1]);
        }
        // 왼쪽 대각선 이동: 7시 방향
        if (x + y == 12) {
            // 왼쪽아래
            //if (y + 1 <= 9 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my)) d.push([x - 1, y + 1]);
            // 오른위
            if (y - 1 >= 7 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                d.push([x + 1, y - 1]);
        }
    }
    // 위 궁성
    // 왕, 사가 면, 안궁, 왼쪽/오른쪽 중앙의 자리에 갔을 때에는 대각선 이동 금지
    if (!(x == 4 && y == 0) && !(x == 4 && y == 2) && !(x == 3 && y == 1) && !(x == 5 && y == 1)) {
        // 오른쪽 대각선 이동: 4시 방향
        if (x <= 5 && x - y == 3) {
            // 4시 방향
            //if (y + 1 <= 2 && x + 1 <= 5 && (!com.mans[map[y + 1][x + 1]] || com.mans[map[y + 1][x + 1]].my != my)) d.push([x + 1, y + 1]);
            // 10시 방향
            if (y - 1 >= 0 && x - 1 >= 3 && (!com.mans[map[y - 1][x - 1]] || com.mans[map[y - 1][x - 1]].my != my))
                d.push([x - 1, y - 1]);
        }
        // 왼쪽 대각선 이동: 7시 방향
        if (x >= 3 && x + y == 5) {
            // 7시 방향
            // if (y + 1 <= 2 && x - 1 >= 3 && (!com.mans[map[y + 1][x - 1]] || com.mans[map[y + 1][x - 1]].my != my)) d.push([x - 1, y + 1]);
            // 1시 방향
            if (y - 1 >= 0 && x + 1 <= 5 && (!com.mans[map[y - 1][x + 1]] || com.mans[map[y - 1][x + 1]].my != my))
                d.push([x + 1, y - 1]);
        }
    }
    return d;
};
//// 가중치 설정(원본)
//com.value = {
//    // 차
//    c: [
//        [206, 208, 207, 213, 214, 213, 207, 208, 206],
//        [206, 206, 209, 216, 233, 216, 209, 206, 206],
//        [206, 208, 207, 214, 216, 214, 207, 208, 206],
//        [206, 213, 213, 216, 216, 216, 213, 213, 206],
//        [208, 211, 211, 214, 215, 214, 211, 211, 208],
//        [222, 212, 212, 214, 215, 214, 212, 212, 222],
//        [194, 209, 204, 212, 214, 212, 204, 209, 194],
//        [198, 208, 204, 190, 190, 190, 204, 208, 198],
//        [200, 208, 206, 194, 190, 194, 206, 208, 200],
//        [194, 194, 194, 194, 190, 194, 194, 194, 194]
//    ],
//    // 마
//    m: [
//        [60, 60, 60, 66, 60, 66, 60, 60, 60],
//        [60, 66, 60, 67, 64, 67, 60, 66, 60],
//        [62, 64, 65, 60, 65, 60, 65, 64, 62],
//        [62, 64, 65, 60, 65, 60, 65, 64, 62],
//        [62, 64, 65, 60, 65, 60, 65, 64, 62],
//        [62, 64, 65, 60, 65, 60, 65, 64, 62],
//        [55, 64, 64, 65, 64, 65, 64, 64, 55],
//        [55, 62, 65, 65, 62, 65, 65, 62, 55],
//        [55, 60, 62, 63, 64, 63, 62, 60, 55],
//        [54, 55, 50, 54, 50, 44, 50, 55, 54]
//    ],
//    // 상
//    x: [
//        [55, 55, 55, 55, 55, 55, 55, 55, 55],
//        [55, 55, 55, 55, 55, 55, 55, 55, 55],
//        [55, 55, 55, 55, 55, 55, 55, 55, 55],
//        [55, 55, 55, 55, 55, 55, 55, 55, 55],
//        [40, 46, 55, 50, 55, 50, 55, 46, 40],
//        [40, 46, 43, 50, 55, 50, 43, 46, 40],
//        [40, 46, 43, 50, 55, 50, 43, 46, 40],
//        [40, 46, 43, 40, 35, 40, 43, 46, 40],
//        [40, 46, 43, 30, 35, 30, 43, 46, 40],
//        [40, 46, 43, 30, 35, 30, 43, 46, 40]
//    ],
//    // 사
//    s: [
//        [0, 0, 0, 50, 40, 50, 0, 0, 0],
//        [0, 0, 0, 48, 50, 48, 0, 0, 0],
//        [0, 0, 0, 45, 40, 45, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 45, 40, 45, 0, 0, 0],
//        [0, 0, 0, 48, 50, 48, 0, 0, 0],
//        [0, 0, 0, 50, 40, 50, 0, 0, 0]
//    ],
//    // 장에 대한 우선순위
//    j: [
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 0, 0, 0, 0, 0, 0],
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
//        [0, 0, 0, 8888, 8888, 8888, 0, 0, 0]
//    ],
//    // 포 : 시간이 지나면 포의 가중치 배열을 200에서 100으로 떨어뜨릴 것... 
//    //p: [
//    //    [80, 100, 96, 100, 90, 100, 96, 100, 80],
//    //    [98, 98, 96, 92, 89, 92, 96, 98, 98],
//    //    [97, 97, 96, 100, 200, 100, 96, 97, 97],
//    //    [96, 99, 99, 98, 100, 98, 99, 99, 96],
//    //    [96, 96, 96, 96, 100, 96, 96, 96, 96],
//    //    [95, 96, 99, 96, 100, 96, 99, 96, 95],
//    //    [96, 96, 96, 96, 96, 96, 96, 96, 96],
//    //    [97, 96, 100, 100, 200, 100, 100, 96, 97],
//    //    [96, 97, 98, 98, 98, 98, 98, 97, 96],
//    //    [96, 96, 97, 100, 99, 100, 97, 96, 96]
//    //],
//    p: [
//        [80, 100, 96, 100, 90, 100, 96, 100, 80],
//        [98, 98, 96, 92, 89, 92, 96, 98, 98],
//        [97, 97, 96, 100, 100, 100, 96, 97, 97],
//        [96, 99, 99, 98, 100, 98, 99, 99, 96],
//        [96, 96, 96, 96, 100, 96, 96, 96, 96],
//        [95, 96, 99, 96, 100, 96, 99, 96, 95],
//        [96, 96, 96, 96, 96, 96, 96, 96, 96],
//        [97, 96, 100, 100, 100, 100, 100, 96, 97],
//        [96, 97, 98, 98, 98, 98, 98, 97, 96],
//        [96, 96, 97, 100, 99, 100, 97, 96, 96]
//    ],
//    // 졸병: 졸병만 남았을 때 계속 공격하도록 지시할 것...
//    z: [
//        [42, 46, 43, 146, 100, 146, 43, 46, 42],
//        [42, 46, 43, 50, 1000, 50, 43, 46, 42],
//        [42, 46, 43, 50, 50, 50, 43, 46, 42],
//        [35, 46, 43, 48, 45, 48, 43, 46, 35],
//        [35, 38, 34, 38, 38, 38, 35, 38, 35],
//        [33, 37, 37, 37, 37, 37, 34, 37, 33],
//        [32, 36, 36, 36, 36, 36, 36, 36, 32],
//        [42, 46, 43, 50, 50, 50, 43, 46, 42],
//        [42, 46, 43, 50, 1000, 50, 43, 46, 42],
//        [42, 46, 43, 146, 100, 146, 43, 46, 42],
//    ]
//}
//// 가중치 배열 복사
//com.value.C = Util.ArrayClone(com.value.c).reverse();
//com.value.M = Util.ArrayClone(com.value.m).reverse();
//com.value.X = Util.ArrayClone(com.value.x).reverse();
//com.value.S = Util.ArrayClone(com.value.s).reverse();
//com.value.J = Util.ArrayClone(com.value.j).reverse();
//com.value.P = Util.ArrayClone(com.value.p).reverse();
//com.value.Z = Util.ArrayClone(com.value.z).reverse();
com.args = {
    // 초(Blue)
    'c': { text: "차", img: 'b_c', my: 1, bl: "c", value: WeightedValue.value.c, score: 13 },
    'm': { text: "마", img: 'b_m', my: 1, bl: "m", value: WeightedValue.value.m, score: 5 },
    'x': { text: "상", img: 'b_x', my: 1, bl: "x", value: WeightedValue.value.x, score: 3 },
    's': { text: "사", img: 'b_s', my: 1, bl: "s", value: WeightedValue.value.s, score: 3 },
    'j': { text: "초", img: 'b_j', my: 1, bl: "j", value: WeightedValue.value.j, score: 8888 },
    'p': { text: "포", img: 'b_p', my: 1, bl: "p", value: WeightedValue.value.p, score: 7 },
    'z': { text: "졸", img: 'b_z', my: 1, bl: "z", value: WeightedValue.value.z, score: 2 },
    // 한(Red)
    'C': { text: "차", img: 'r_c', my: -1, bl: "c", value: WeightedValue.value.C, score: 13 },
    'M': { text: "마", img: 'r_m', my: -1, bl: "m", value: WeightedValue.value.M, score: 5 },
    'X': { text: "상", img: 'r_x', my: -1, bl: "x", value: WeightedValue.value.X, score: 3 },
    'S': { text: "사", img: 'r_s', my: -1, bl: "s", value: WeightedValue.value.S, score: 3 },
    'J': { text: "한", img: 'r_j', my: -1, bl: "j", value: WeightedValue.value.J, score: 8888 },
    'P': { text: "포", img: 'r_p', my: -1, bl: "p", value: WeightedValue.value.P, score: 7 },
    'Z': { text: "병", img: 'r_z', my: -1, bl: "z", value: WeightedValue.value.Z, score: 2 }
};
// com.class: 장기판 개체
com.class = com.class || {};
// 기물(장기알) 그리기
com.class.Man = function (key, x, y) {
    this.pater = key.slice(0, 1); // 아버지, 접두사 C <= C0, C1
    var o = com.args[this.pater];
    this.x = x || 0;
    this.y = y || 0;
    this.key = key;
    this.my = o.my;
    this.text = o.text;
    this.value = o.value;
    this.isShow = true;
    this.alpha = 1;
    this.ps = []; // 현재 선택된 기물이 갈 수 있는 좌표 배열(빨간색 점으로 표시될 영역) 배열
    // 기물을 그리는 함수: com.show()에서 한번에 일괄적으로 그림: 배경, 판, 기물들 등등
    this.show = function () {
        if (this.isShow) {
            com.ctx.save(); // 강의할 것
            com.ctx.globalAlpha = this.alpha; // 강의할 것
            com.ctx.drawImage(com[this.pater].img, com.spaceX * this.x + com.pointStartX, com.spaceY * this.y + com.pointStartY); // 강의할 것
            com.ctx.restore(); // 강의할 것
        }
    };
    // 각각의 기물들이 이동할 수 있는 좌표값 전체 반환
    this.bl = function (map) {
        var map = map || play.map;
        return com.bylaw[o.bl](this.x, this.y, map, this.my);
    };
};
// 배경 그리기
com.class.Bg = function (img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.isShow = true;
    this.show = function () {
        if (this.isShow)
            com.ctx.drawImage(com.bgImg, com.spaceX * this.x, com.spaceY * this.y);
    };
};
// 판(기물 선택 영역) 그리기
com.class.Pane = function (img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.newX = x || 0;
    this.newY = y || 0;
    this.isShow = true;
    this.show = function () {
        if (this.isShow) {
            com.ctx.drawImage(com.paneImg, com.spaceX * this.x + com.pointStartX, com.spaceY * this.y + com.pointStartY);
            com.ctx.drawImage(com.paneImg, com.spaceX * this.newX + com.pointStartX, com.spaceY * this.newY + com.pointStartY);
        }
    };
};
// 점 그리기
com.class.Dot = function (img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.isShow = true;
    this.dots = [];
    this.show = function () {
        for (var i = 0; i < this.dots.length; i++) {
            if (this.isShow)
                com.ctx.drawImage(com.dotImg, com.spaceX * this.dots[i][0] + 10 + com.pointStartX, com.spaceY * this.dots[i][1] + 10 + com.pointStartY);
        }
    };
};
// Common 개체 시작
com.init();
//# sourceMappingURL=JanggiEngine_Common.js.map