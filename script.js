const links = document.querySelector(".links");

const projects = [
  "drum-kit",
  "clock",
  "css-variables",
  "array-cardio-1",
  "image-gallery",
  "ajax",
];

function stringUpdate(str) {
  str = str.split("-");

  str.forEach((word, i) => {
    str[i] = word.charAt(0).toUpperCase() + word.substr(1);
    });

  return result = str.join(" ");
}

projects.forEach((project, i) => {
  let div = document.createElement("div");
  let a = document.createElement("a");
  a.href = `${i + 1}-${project}/index.html`;

  let img = document.createElement("img");
  img.src = `images/${project}.png`;
  img.alt = `${project}`;

  let heading = document.createElement("h2");
  heading.innerHTML = stringUpdate(project);

  a.appendChild(img)
  a.appendChild(heading)

  div.appendChild(a)

  links.appendChild(div)
});
