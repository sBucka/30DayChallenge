const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const precent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(precent * 100) + "%";
  let playbackRate = precent * (max - min) + min;
  bar.style.height = height;
  if(playbackRate>max)playbackRate=4;
  bar.textContent = playbackRate.toFixed(2)+"x";
video.playbackRate =playbackRate
});
