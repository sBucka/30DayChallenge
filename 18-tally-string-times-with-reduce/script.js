const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    console.log(mins, secs);
    return mins * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

console.log(seconds);

let seconsdLeft = seconds;
const hours = Math.floor(seconsdLeft / 3600);
seconsdLeft = seconsdLeft % 3600;

const mins = Math.floor(seconsdLeft / 60);
seconsdLeft = seconsdLeft % 60;

console.log(hours, mins, seconsdLeft);
const h2 = document.createElement("h2")
h2.innerHTML = `Combined time: ${hours}:${mins}:${seconsdLeft}`
document.body.appendChild(h2)