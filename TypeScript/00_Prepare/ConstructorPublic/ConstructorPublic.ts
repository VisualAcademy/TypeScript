module ConstructorPublic {
    class nameCard {
        constructor(public name: string) {
            // Empty
        }

        display() {
            console.log(`이름: ${this.name}`);
        }
    }

    let my = new nameCard("빌게이츠");
    my.name = "앤더스 헤일스버그"; // name 속성 변경
    my.display(); 
}
