namespace EmployeeAge {
    class Employee {
        // _age 필드
        private _age: number; 
        // age 속성
        get age() {
            return this._age;
        }
        set age(value: number) {
            if (value > 0 && value < 150) {
                this._age = value;
            }
            else {
                throw "나이 값이 잘못되었습니다.";
            }
        }
    }
    const emp: Employee = new Employee();
    emp.age = 21;
    console.log(emp.age);
}
