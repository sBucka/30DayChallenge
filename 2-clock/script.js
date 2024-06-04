const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const tick = document.querySelector(`audio[data-sound="tick"]`);
const tock = document.querySelector(`audio[data-sound="tock"]`);
const mutebtn = document.getElementById("mute");

function mute() {
  if (mutebtn.innerHTML == "mute") {
    mutebtn.innerHTML = "unmute";
  } else {
    mutebtn.innerHTML = "mute";
  }
}

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (mutebtn.innerHTML == "mute") {
    if (seconds % 2 == 0) {
      tick.currentTime = 0;
      tick.play();
    } else {
      tock.currentTime = 0;
      tock.play();
    }
  }

  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const clockFace = document.querySelector(".clock-face");
for (i = 1; i < 13; i++) {
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  div.classList.add("number");
  div.style.transform = `rotate(${i * 30}deg)`;
  div1.innerHTML = i;
  div.appendChild(div1);
  clockFace.appendChild(div);
}

setInterval(setDate, 1000);
