function sq(){
    cal.display.value=Math.sqrt(cal.display.value);
     }
function appendToDisplay(value) {
    document.cal.display.value += value;
}

function calculate() {
    document.cal.display.value = eval(document.cal.display.value);
}

function clearDisplay() {
    document.cal.display.value = '';
}

function calculateSquareRoot() {
    document.cal.display.value = Math.sqrt(eval(document.cal.display.value));
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ('0123456789+-*/.'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
    