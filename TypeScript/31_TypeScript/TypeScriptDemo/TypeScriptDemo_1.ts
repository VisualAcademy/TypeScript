namespace TypeScriptDemo_1 {
    interface Entity {
        name: string;
        price: number;
        inStock?: boolean;
        getName(): string;
        setName(value: string): void;
    }

    var e: Entity = {
        name: "apple",
        price: 100,
        getName: function () { return this.name; },
        setName: function (s) { this.name = s; }
    };

    function sortByName(a: Entity[]) {
        var result = a.slice(0);
        result.sort(function (x, y) {
            var name = "abc";
            return x.name.localeCompare(y.name);
        });
        return result;
    }
}