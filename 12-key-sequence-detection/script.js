const pressed = [];
const secredCode = "uni";

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secredCode.length - 1, pressed.length - secredCode.length);
  if (pressed.join("").includes(secredCode)) {
    cornify_add();
  }
});
