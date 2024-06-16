const triggers = document.querySelectorAll("a");

const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width+8,
    height: linkCoords.height+8,
    top: linkCoords.top + window.scrollY-4,
    left: linkCoords.left + window.scrollX-4,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
