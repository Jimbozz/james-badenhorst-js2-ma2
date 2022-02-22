let listItems = [];

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
  const newItem = input.value.trim();
  console.log(newItem);

  if (newItem.length >= 2) {
    listItems.push(newItem);
  }
}
