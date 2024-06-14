const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

let filters = {
  alpha: false,
  red: false,
  green: false,
  blue: false,
  split: false,
};

const buttons = document.querySelectorAll(".filters button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    () =>
      (filters[button.getAttribute("class")] =
        !filters[button.getAttribute("class")])
  );
});

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("Damn..", err);
    });
}

function paintToCanvas() {
  const widht = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = widht;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, widht, height);
    let pixels = ctx.getImageData(0, 0, widht, height);

    if (filters.alpha) {
      ctx.globalAlpha = 0.1;
    } else ctx.globalAlpha = 1;
    if (filters.red) redFilter(pixels);
    if (filters.green) greenFilter(pixels);
    if (filters.blue) blueFilter(pixels);
    if (filters.split) rgbSplit(pixels);
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function redFilter(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100;
    pixels.data[i + 1] *= 0.5;
    pixels.data[i + 2] *= 0.5;
  }
  return pixels;
}
function greenFilter(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] *= 0.5;
    pixels.data[i + 1] += 100;
    pixels.data[i + 2] *= 0.5;
  }
  return pixels;
}
function blueFilter(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] *= 0.5;
    pixels.data[i + 1] *= 0.5;
    pixels.data[i + 2] += 100;
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 100] = pixels.data[i + 1];
    pixels.data[i - 150] = pixels.data[i + 2];
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};
  document.querySelectorAll(".rgb div input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i++) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome"</img>`;
  strip.insertBefore(link, strip.firstChild);
}

video.addEventListener("canplay", paintToCanvas);

getVideo();
