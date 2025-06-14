// CLOCK
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// STOPWATCH
let stopwatchInterval = null;
let elapsed = 0;
let running = false;

function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function updateStopwatch() {
    document.getElementById('stopwatch').textContent = formatTime(elapsed);
}

document.getElementById('startBtn').onclick = function() {
    if (!running) {
        running = true;
        stopwatchInterval = setInterval(() => {
            elapsed++;
            updateStopwatch();
        }, 1000);
    }
};

document.getElementById('stopBtn').onclick = function() {
    running = false;
    clearInterval(stopwatchInterval);
};

document.getElementById('resetBtn').onclick = function() {
    running = false;
    clearInterval(stopwatchInterval);
    elapsed = 0;
    updateStopwatch();
};

updateStopwatch(); // Initial display