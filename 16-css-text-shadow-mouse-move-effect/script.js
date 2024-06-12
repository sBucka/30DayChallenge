const container = document.querySelector(".container");
const text = container.querySelector("h1");
const walk = 20; //px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);
  text.style.textShadow= `
  ${xWalk}px ${yWalk}px 0 rgba(0, 255, 255, .5),
  ${xWalk*-1}px ${yWalk}px 0 rgba(255, 0, 255, .5),
  ${xWalk}px ${yWalk*-1}px 0 rgba(255, 100, 150, .5),
  ${xWalk*-1}px ${yWalk*-1}px 0 rgba(255, 255, 0, .9)
  `
}

container.addEventListener("mousemove", shadow);
