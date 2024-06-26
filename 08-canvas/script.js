const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 12;
//ctx.globalCompositeOperation = "soft-light"

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function drawMouse(e) {
  if (!isDrawing) return; // Stop function
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;

  hue++;
  if (hue > 360) hue = 0;
  if (ctx.lineWidth >= 40 || ctx.lineWidth <= 3) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  //console.log(e);
}

canvas.addEventListener("mousemove", drawMouse);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function drawTouch(e) {
  if (!isDrawing) return; // Stop function
  var touch = e.touches[0];

  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(
    touch.pageX - touch.target.offsetLeft,
    touch.pageY - touch.target.offsetTop
  );
  ctx.stroke();
  lastX = touch.pageX - touch.target.offsetLeft;
  lastY = touch.pageY - touch.target.offsetTop;

  hue++;
  if (hue > 360) hue = 0;
  if (ctx.lineWidth >= 40 || ctx.lineWidth <= 3) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  console.log(lastX, lastY);
}

canvas.addEventListener("touchmove", drawTouch);
canvas.addEventListener("touchstart", (e) => {
  var touch = e.touches[0];
  isDrawing = true;
  lastX = touch.pageX - touch.target.offsetLeft;
  lastY = touch.pageY - touch.target.offsetTop;
  console.log(lastX, lastY);
});
canvas.addEventListener("touchend", () => (isDrawing = false));
canvas.addEventListener("touchcancel", () => (isDrawing = false));
