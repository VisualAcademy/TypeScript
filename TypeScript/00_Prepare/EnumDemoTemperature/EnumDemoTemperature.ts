module EnumDemoTemperature {
    enum temperature {
        hot,
        cold
    }

    console.log(temperature.hot); // 0
    console.log(temperature.cold); // 1

    let current: temperature = temperature.cold;
    let message: string = ""; 
    if (current === temperature.cold) {
        message = '춥다.';
    }
    else {
        message = '덥다.';
    }
    console.log(message); // '춥다.'
}
