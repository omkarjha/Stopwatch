// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

const stopwatchDisplay = document.getElementById('stopwatch-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    startBtn.disabled = true;
  }
}

function stopStopwatch() {
  if (stopwatchRunning) {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    startBtn.disabled = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchTime++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;
  stopwatchDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

// Timer
let timerInterval;
let timerRunning = false;
let timerTime = 0;

const timerDisplay = document.getElementById('timer-display');
const startTimerBtn = document.getElementById('start-timer-btn');
const stopTimerBtn = document.getElementById('stop-timer-btn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function startTimer() {
  if (!timerRunning) {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Please set a valid time.');
      return;
    }

    timerTime = hours * 3600 + minutes * 60 + seconds;
    timerRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    startTimerBtn.disabled = true;
  }
}

function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
    startTimerBtn.disabled = false;
  }
}

function updateTimer() {
  if (timerTime === 0) {
    stopTimer();
    alert('Timer has finished.');
    return;
  }

  timerTime--;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;
  hoursInput.value = formatTime(hours);
  minutesInput.value = formatTime(minutes);
  secondsInput.value = formatTime(seconds);
}

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);