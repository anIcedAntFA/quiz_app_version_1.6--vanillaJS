import renderResult from './render_result.js';

function startCountdown() {
  timerId = setInterval(() => {
    if (timer > 0) {
      timer--;
      min = Math.floor(timer / 60);
      sec = timer % 60;
      appTimerElement.innerHTML = `Time left: ${min}:${sec}`;
      console.log(min, sec);
    } else {
      saveTimePlayer();
      updateTimer();
      renderResult();
    }
  }, 1000);
}

function updateTimer() {
  clearInterval(timerId);
  timer = 90;
  min = Math.floor(timer / 60);
  sec = timer % 60;
  appTimerElement.innerHTML = `Time left: ${min}:${sec}`;
}

function saveTimePlayer() {
  minPlayer = TIME_MINUTE - min;
  secPlayer = TIME_SECOND - sec;

  if (secPlayer > 0) {
    minPlayer = TIME_MINUTE - min;
    secPlayer = TIME_SECOND - sec;
  } else {
    minPlayer = minPlayer - 1;
    secPlayer = secPlayer + 60;
  }
}

export { startCountdown, updateTimer, saveTimePlayer };