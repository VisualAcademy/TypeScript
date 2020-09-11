namespace DevLec {
    var _name = "데브렉";
    export var Url = "http://devlec.com";
    export function GetKoreanName() {
        return _name;
    }
}
console.log(DevLec.Url);
console.log(DevLec.GetKoreanName());

namespace VisualAcademy {
    export var url: string;
    export var name: string;
}
VisualAcademy.url = "http://visualacademy.com";
VisualAcademy.name = "비주얼아카데미";
console.log(VisualAcademy.url);
console.log(VisualAcademy.name);
