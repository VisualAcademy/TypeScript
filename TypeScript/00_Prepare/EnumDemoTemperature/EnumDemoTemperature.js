var EnumDemoTemperature;
(function (EnumDemoTemperature) {
    var temperature;
    (function (temperature) {
        temperature[temperature["hot"] = 0] = "hot";
        temperature[temperature["cold"] = 1] = "cold";
    })(temperature || (temperature = {}));
    console.log(temperature.hot); // 0
    console.log(temperature.cold); // 1
    var current = temperature.cold;
    var message = "";
    if (current === temperature.cold) {
        message = '춥다.';
    }
    else {
        message = '덥다.';
    }
    console.log(message); // '춥다.'
})(EnumDemoTemperature || (EnumDemoTemperature = {}));
//# sourceMappingURL=EnumDemoTemperature.js.map