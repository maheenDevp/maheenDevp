let milli = 0, sec = 0, min = 0, timer;

function updateDisplay() {
    document.getElementById("milli").innerText = String(milli).padStart(2, '0');
    document.getElementById("sec").innerText = String(sec).padStart(2, '0');
    document.getElementById("min").innerText = String(min).padStart(2, '0');
}

function startTimer() {
    document.getElementById("start").disabled = true;
    timer = setInterval(() => {
        milli++;
        if (milli === 100) {
            milli = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }
        updateDisplay();
    }, 10); // Update every 10ms
}

function stopTimer() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    milli = 0; sec = 0; min = 0;
    updateDisplay();
    document.getElementById("lap").innerHTML = '';
    document.getElementById("start").disabled = false;
}

function recordLap() {
    const lap = document.getElementById("lap");
    lap.innerHTML += `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(milli).padStart(2, '0')}<br>`;
}
