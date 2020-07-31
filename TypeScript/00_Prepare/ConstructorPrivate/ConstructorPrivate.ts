module ConstructorPrivate {
    class nameCard {
        // 생성자에서 값을 받아서 자동으로 prvate name 필드를 생성
        constructor(private name: string) {
            // Empty
        }

        // 출력
        display() {
            return `이름: ${this.name}`;
        }
    }

    let my = new nameCard('빌게이츠');
    console.log(my.display()); 
}
