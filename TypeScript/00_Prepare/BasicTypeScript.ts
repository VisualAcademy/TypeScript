// 타입스크립트의 가장 큰 목적: 묶어서 관리

var i = 0;

var s = "안녕하세요.";

var b: boolean = true;

function f() {
    return "Hello World";
}

function f2(str: string) {
    return str;
}

// f2(1234); // Error

f2("안녕하세요."); // Ok

// declare var document;
document.title = "타입스크립트 기초";


interface Friend {
    name: string;
    favoriteColor? : string; // 널 가능 형식(Nullable Type)
}

function add(friend: Friend) {
    var name = friend.name;
}

add({ name: "red", favoriteColor: "blue" }); // Ok

//add({ favoriteColor: "blue" }); // Error

add({ name: "green" }); // OK


