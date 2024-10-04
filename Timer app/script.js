let timer;
let totalMilliseconds = 0;
let isRunning = false;

function updateDisplay() {
    const min = Math.floor(totalMilliseconds / 60000);
    const sec = Math.floor((totalMilliseconds % 60000) / 1000);
    const milli = Math.floor((totalMilliseconds % 1000) / 10); // Get the last two digits for milliseconds

    document.getElementById("min").innerText = String(min).padStart(2, '0');
    document.getElementById("sec").innerText = String(sec).padStart(2, '0');
    document.getElementById("milli").innerText = String(milli).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return; // Prevent multiple intervals from starting

    const inputMin = parseInt(document.getElementById("input-min").value) || 0;
    const inputSec = parseInt(document.getElementById("input-sec").value) || 0;

    if (totalMilliseconds === 0) {
        totalMilliseconds = (inputMin * 60 + inputSec) * 1000; // Convert to milliseconds
    }

    if (totalMilliseconds > 0) {
        document.getElementById("message").innerText = '';
        updateDisplay();
        isRunning = true;

        timer = setInterval(() => {
            if (totalMilliseconds > 0) {
                totalMilliseconds -= 100; // Decrement by 100 milliseconds
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                document.getElementById("message").innerText = 'Time is up!';
            }
        }, 100); // Update every 100 milliseconds
    } else {
        document.getElementById("message").innerText = 'Please set a time.';
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false; // Update running status
}

function resetTimer() {
    clearInterval(timer);
    totalMilliseconds = 0;
    updateDisplay();
    document.getElementById("input-min").value = '';
    document.getElementById("input-sec").value = '';
    document.getElementById("message").innerText = '';
    isRunning = false; // Reset running status
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
