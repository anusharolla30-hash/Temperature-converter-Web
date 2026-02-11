function convertTemperature() {

    let temp = document.getElementById("tempInput").value;
    let type = document.getElementById("tempType").value;
    let result = document.getElementById("result");
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // Validation
    if (temp === "" || isNaN(temp)) {
        errorMsg.textContent = "Please enter a valid number!";
        result.textContent = "--";
        return;
    }

    temp = parseFloat(temp);
    let output = "";

    if (type === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }

    else if (type === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }

    else {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.textContent = output;
}
