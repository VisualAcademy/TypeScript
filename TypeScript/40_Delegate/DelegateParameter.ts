//[?] 콜백 함수(delegate)는 동일한 메서드 시그니처를 갖는 메서드의 참조를 담을 수 있는 그릇
namespace DelegateParameter {
    let go = function () {
        console.log("직진");
    }
    const back = function () {
        console.log("후진");
    }

    // 매개 변수로 함수를 받아서 실행: 매개 변수로 전달된 메서드 대신 호출
    //function runnerCall(runner: any) {
    //    runner(); // 넘어온 메서드(함수) 실행        
    //}
    function runnerCall(runner: () => void) {
        runner(); // 넘어온 메서드(함수) 실행        
    }

    // 함수의 매개 변수로 함수 자체 전달
    runnerCall(go);     // "직진"
    runnerCall(back);   // "후진"
}
