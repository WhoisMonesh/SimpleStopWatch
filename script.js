// Declare variables
let timer;
let isRunning = false;
let seconds = 0;
 // Start or stop the timer
 function startStop() {
  if (!isRunning) {
    // Start the timer
    timer = setInterval(updateTime, 1000);
    document.getElementById('startStop').innerText = 'Stop';
    isRunning = true;
    playStartSound();
  } else {
    // Stop the timer
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
    playStopSound();
  }
}
 // Update the displayed time
 function updateTime() {
  seconds++;
  const display = document.getElementById('display');
  display.innerText = formatTime(seconds);
}
 // Format the time in HH:MM:SS format
 function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}
 // Pad single-digit numbers with leading zeroes
 function pad(num) {
  return num.toString().padStart(2, '0');
}
 // Stop the timer
 function stop() {
  clearInterval(timer);
  document.getElementById('startStop').innerText = 'Start';
  isRunning = false;
  playStopSound();
}
 // Reset the timer
 function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  document.getElementById('display').innerText = formatTime(seconds);
  document.getElementById('startStop').innerText = 'Start';
  playResetSound();
}
 // Play the start sound
 function playStartSound() {
  const startSound = new Audio('start.mp3');
  startSound.play();
}
 // Play the stop sound
 function playStopSound() {
  const stopSound = new Audio('stop.mp3');
  stopSound.play();
}
 // Play the reset sound
 function playResetSound() {
  const resetSound = new Audio('reset.mp3');
  resetSound.play();
}