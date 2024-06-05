const buttons = document.querySelectorAll(".buttons button");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttnID = this.id;
    let path = `${buttnID}/index.html`;
    window.location.href = path;
  });
});
