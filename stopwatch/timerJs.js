
let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('time');
let timer = null;
function startTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 1000);

}
function watchStop(){
  clearInterval(timer);
}
function watchReset(){
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML="00:00:00";
}

