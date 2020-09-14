class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number; 
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span); 
        this.span.innerText = new Date().toUTCString(); 
        this.timerToken = 0; 
    }
    start() {
        this.timerToken = setInterval(
            () => this.span.innerText = new Date().toUTCString(), 500);
    }
    stop() {
        clearTimeout(this.timerToken); 
    }
}

window.onload = () => {
    let el = <HTMLElement>document.getElementById("content");
    const greeter = new Greeter(el);     
    greeter.start(); 
}
