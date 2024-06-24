let countdown;
const myDisplay = document.querySelector(".display");
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const audio = document.querySelector("audio");

function timer(seconds) {
  clearInterval(countdown);

  myDisplay.classList.add("active");

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTIme(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      audio.play();
      myDisplay.classList.add("shake");
      setInterval(()=>{
        myDisplay.classList.remove("shake")
      },1000)
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);

  const secondsLeft = seconds % 60;
  const display = `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTIme(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  // Eu
  endTime.textContent = `Be back ${hour}:${minutes}`;
  // not Eu
  // endTime.textContent = `Be back ${
  //   hour > 12 ? hour - 12 : hour
  // }:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
