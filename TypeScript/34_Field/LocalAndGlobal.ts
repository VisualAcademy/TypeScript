// 지역 변수와 전역 변수
namespace LocalAndGlobal {
    class VariableScope {
        globalVariable: string = "[2] 전역 변수"; // 필드 또는 멤버 변수, 속성
        render(): void {
            //[1] 지역 변수 사용
            let localVariable: string = "[1] 지역 변수";
            console.log(localVariable); 
            //[2][1] 전역 변수 사용
            console.log(this.globalVariable);
            //[2][2] 전역 변수 사용
            this.test(); 
        }
        test(): void {
            console.log(this.globalVariable); 
        }
    }
    const t = new VariableScope();
    t.render();
}
