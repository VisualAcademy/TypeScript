namespace Constants {
    export class Youtube {
        static get SITE_URL(): string {
            return "https://youtube.com/c/VisualAcademy";
        }
        static get START_YEAR(): number { return 2010; }
    }
    export class Blog {
        static get SITE_URL(): string {
            return "https://www.dotnetkorea.com";
        }
        static get START_YEAR(): number { return 2000; }
    }
}

console.log(`${Constants.Youtube.START_YEAR} - ${Constants.Youtube.SITE_URL}`);
console.log(`${Constants.Blog.START_YEAR} - ${Constants.Blog.SITE_URL}`);
