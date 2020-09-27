// 분해(Deconstructing): 튜플(Tuple) 분해(함수의 반환 값 등에서도 사용)
var tech = {
    id: 1234,
    title: "TypeScript"
};

//[1] 개체를 분해하는 기본 방법
// var id = tech.id;
// var title = tech.title;

//[2] 분해: 튜플 분해
var { id, title } = tech; 

console.log(`${id}: ${title}`);
