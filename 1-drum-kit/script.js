const keysDir = [
  {
    data_key: "65",
    sound: "clap",
    kbd: "A",
    src: "sounds/clap.wav",
  },
  {
    data_key: "83",
    sound: "hihat",
    kbd: "S",
    src: "sounds/hihat.wav",
  },
  {
    data_key: "68",
    sound: "kick",
    kbd: "D",
    src: "sounds/kick.wav",
  },
  {
    data_key: "70",
    sound: "openhat",
    kbd: "F",
    src: "sounds/openhat.wav",
  },
  {
    data_key: "71",
    sound: "boom",
    kbd: "G",
    src: "sounds/boom.wav",
  },
  {
    data_key: "72",
    sound: "ride",
    kbd: "H",
    src: "sounds/ride.wav",
  },
  {
    data_key: "74",
    sound: "whaa",
    kbd: "J",
    src: "sounds/whaa.mp3",
  },
  {
    data_key: "75",
    sound: "tom",
    kbd: "K",
    src: "sounds/tom.wav",
  },
  {
    data_key: "76",
    sound: "tin",
    kbd: "L",
    src: "sounds/tin.wav",
  },
];

let allKeys = document.getElementById("keys");

for (let i = 0; i < keysDir.length; i++) {
  let div = document.createElement("div");
  div.classList.add("key");
  div.dataset.key = keysDir[i].data_key;

  let kbd = document.createElement("kbd");
  kbd.innerHTML = keysDir[i].kbd;
  div.appendChild(kbd);

  let span = document.createElement("span");
  span.innerHTML = keysDir[i].sound;
  div.appendChild(span);

  allKeys.appendChild(div);

  let audio = document.createElement("audio");
  audio.dataset.key = keysDir[i].data_key;
  audio.src = keysDir[i].src;
  document.body.appendChild(audio);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playSoundClick() {
  const myKeyCode = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${myKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  this.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playSoundClick));
window.addEventListener("keydown", playSound);
