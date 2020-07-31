// 유틸리티 클래스 
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.Get = function (id) {
        return document.getElementById(id);
    };
    //[!] ArrayClone 함수: 매개변수로 넘어온 배열을 복사해주는 함수
    Util.ArrayClone = function (arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr[i] = arr[i].slice();
        }
        return newArr;
    };
    Util.ArrayCloneSimple = function (arr) {
        return arr.slice(0);
    };
    //[!] 특정한 DOM 개체에 대한 x, y 좌표 값 반환: devlec.com - JavaScript - JavaScriptOffset.html 강좌 참고
    Util.GetDomXY = function (dom) {
        var left = dom.offsetLeft;
        var top = dom.offsetTop;
        var current = dom.offsetParent;
        while (current !== null) {
            left += current.offsetLeft;
            top += current.offsetTop;
            current = current.offsetParent;
        }
        return { x: left, y: top };
    };
    //[!] 특정 숫자 앞에 공백(&nbsp;)을 붙여주는 메서드: AddSpace(1, 3) => &nbsp;&nbsp;1
    Util.AddSpace = function (num, size) {
        var s;
        s = num.toString();
        while (s.length < (size || 2)) {
            s = "_" + s;
        }
        return s.replace(/_/g, "&nbsp;");
    };
    return Util;
}());
//# sourceMappingURL=Util.js.map