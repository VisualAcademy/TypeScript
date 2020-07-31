/// <reference path="./Util.ts" />
/// <reference path="./MapManager.ts" />
/// <reference path="./JanggiEngine.ts" />
/// <reference path="./Play.ts" />
var com;
var bill = bill || {};
bill.init = function () {
    if (com.json) {
        console.log(com.json);
        //bill.setBillList(Util.ArrayClone((new MapManager(JanggiEngine.Settings.ChoMapStyle, JanggiEngine.Settings.HanMapStyle)).GetMap()));
        //Play.IsPlay = false; // 기보 출력은 AI를 사용하지 않는 정지된 상태임
        //com.show();
    }
    if (com.store) {
        bill.setBillList(Util.ArrayClone((new MapManager(JanggiEngine.Settings.ChoMapStyle, JanggiEngine.Settings.HanMapStyle)).GetMap()));
        Play.IsPlay = false; // 기보 출력은 AI를 사용하지 않는 정지된 상태임
        com.show();
    }
};
bill.setBillList = function (map) {
    // 여러 개의 기보가 있으면 드롭다운리스트에 바인딩
    var lst = Util.Get("billList");
    for (var i = 0; i < com.store.length; i++) {
        var opt = document.createElement('option');
        opt.text = '기보: ' + (i + 1);
        opt.value = i.toString();
        lst.add(opt, null);
    }
    // 드롭다운리스트를 변경했을 때 기보 단계 리스트를 재 설정
    lst.addEventListener("change", function (e) {
        bill.setBox(com.store[this.value], map);
    });
    // 기본은 여러 기보 중 첫번째(0) 기보를 바인딩
    bill.setBox(com.store[0], map);
};
bill.setMove = function (bl, inx, map) {
    var map = Util.ArrayClone(map);
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
    for (var i = 0; i <= inx; i++) {
        var n = i * 4;
        var y = bl[n + 1];
        var newX = bl[n + 2];
        var x = bl[n + 0];
        var newY = bl[n + 3];
        if (com.mans[map[newY][newX]]) {
            com.mans[map[newY][newX]].isShow = false;
        }
        com.mans[map[y][x]].x = newX;
        com.mans[map[y][x]].y = newY;
        if (i == inx) {
            com.showPane(x, y, newX, newY);
        }
        map[newY][newX] = map[y][x];
        delete map[y][x]; // undefined로 설정
    }
    return map;
};
// 기보 단계를 ol/li 태그에 바인딩
bill.setBox = function (bl, initMap) {
    var map = Util.ArrayClone(initMap);
    var bl = bl.split("");
    var h = '';
    // +4씩 더해서 계산하는 이유는 (x, y)에서 (x, y)로 이동하는 정보가 총 4개이기 때문...
    for (var i = 0; i < bl.length; i += 4) {
        var n = ((i / 4) + 1);
        h += '<li id="move_' + (i / 4) + '" class="list-group-item">' + Util.AddSpace(n, 3) + '. ';
        var x = bl[i + 0]; // [x]yxy
        var y = bl[i + 1]; // x[y]xy
        var newX = bl[i + 2]; // xy[x]y
        var newY = bl[i + 3]; // xyx[y]
        h += com.createMove(map, x, y, newX, newY);
        h += '</li>\r\n';
    }
    Util.Get("billBox").innerHTML = h;
    var doms = Util.Get("billBox").getElementsByTagName("li");
    for (var i = 0; i < doms.length; i++) {
        doms[i].addEventListener("click", function (e) {
            var inx = this.getAttribute("id").split("_")[1]; // 강의할 것
            bill.setMove(bl, inx, initMap);
            com.show();
            // 기물 놓기 소리
            Util.Get("clickAudio").play();
        });
    }
};
//# sourceMappingURL=JanggiEngine_Bill.js.map