const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }></input>
    <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip unless input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);

// my part

function check(myCheck) {
  let list = document.querySelectorAll('input[type="checkbox"]');

  list.forEach((item) =>
    myCheck
      ? item.setAttribute("checked", "checked")
      : item.removeAttribute("checked")
  );
  items.forEach((item) => {
    item.done = myCheck;
  });
  localStorage.setItem("items", JSON.stringify(items));
}

const btnCheckAll = document.getElementById("checkAll");
btnCheckAll.addEventListener("click", () => check(true));

const btnUnCheckAll = document.getElementById("uncheckAll");
btnUnCheckAll.addEventListener("click", () => check(false));

const btnClearAll = document.getElementById("clearAll");
btnClearAll.addEventListener("click", () => {
  if (!itemsList.innerHTML) return;
  let list = itemsList.querySelectorAll("li");
  list.forEach((item) => item.remove());

  itemsList.innerHTML = "<li>Tapas deleted...</li>";
  items = [];

  localStorage.setItem("items", JSON.stringify(items));
});
