//[?] 전체 속성 사용하기 
namespace PropertyFull {
    class Person {
        // 필드
        private _name: string;

        // 속성
        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value; 
        }
    }

    let person = new Person();
    person.name = "VisualAcademy"; // set
    console.log(person.name); // get
}
