function acceptCookies(el) {
    el.parentNode.remove();
}

function cityAlert() {
    alert("Loading weather report...");
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function changeTempType(el) {
    for(var i = 1; i < 9; i++) {
        if(el.value == "celsius") {
            var tempToChange = parseInt(document.querySelector("#temp" + i).innerHTML);
            document.querySelector("#temp" + i).innerHTML = f2c(tempToChange);
        } else {
            var tempToChange = parseInt(document.querySelector("#temp" + i).innerHTML);
            document.querySelector("#temp" + i).innerHTML = c2f(tempToChange);
        }
    }
}