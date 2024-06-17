const links = document.querySelector(".links");

const projects = [
  "drum-kit",
  "clock",
  "css-variables",
  "array-cardio-1",
  "image-gallery",
  "ajax",
  "array-cardio-2",
  "canvas",
  "must-know-dev-tools",
  "hold-shift-to-check-multiple-checkboxes",
  "custom-html5-video-player",
  "key-sequence-detection",
  "slide-in-on-scroll",
  "object-and-arrays",
  "localstorage-and-event-delegation",
  "css-text-shadow-mouse-move-effect",
  "sorting-band-names-without-articles",
  "tally-string-times-with-reduce",
  "unreal-webcam-fun",
  "native-speech-recognition",
  "geolocation",
  "follow-along-links",
  "speech-synthesis",
  "sticky-nav",
];

function stringUpdate(str) {
  str = str.split("-");

  str.forEach((word, i) => {
    str[i] = word.charAt(0).toUpperCase() + word.substr(1);
  });

  return (result = str.join(" "));
}

projects.forEach((project, i) => {
  let div = document.createElement("div");
  let a = document.createElement("a");
  let indexStr = `${i + 1}`;
  if (indexStr.length == 1) {
    indexStr = `0` + indexStr;
  }
  a.href = `${indexStr}-${project}/index.html`;

  let img = document.createElement("img");
  img.src = `images/${project}.png`;
  img.alt = `${project}`;

  let heading = document.createElement("h2");
  heading.innerHTML = stringUpdate(project);

  a.appendChild(img);
  a.appendChild(heading);

  div.appendChild(a);

  links.appendChild(div);
});
