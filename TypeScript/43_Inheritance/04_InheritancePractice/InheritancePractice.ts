namespace InheritancePractice {
    class Developer {
        public toString = (): string => {
            return "개발자";
        }
    }

    class WebDeveloper extends Developer {
        public toString = (): string => `웹 개발자`;
    }

    class MobileDeveloper extends Developer {
        public toString = (): string => `모바일 개발자`;
    }

    const developer: Developer = new Developer();
    console.log(`${developer}`); // 개발자 

    let web: Developer = new WebDeveloper();
    console.log(`${web}`); // 웹 개발자

    let mobile: Developer = new MobileDeveloper();
    console.log(`${mobile}`); // 모바일 개발자
}
