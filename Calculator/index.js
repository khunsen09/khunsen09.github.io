let displayValue = "0";

function updateDisplay() {
    document.getElementById("result").innerText = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === "0") {
        displayValue = val.toString();
    } else {
        displayValue += val.toString();
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
