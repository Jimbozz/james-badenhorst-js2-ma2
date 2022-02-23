// import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./utils/settings.js";

let listItems = getFromStorage(listKey);

createList(listItems);

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
  const itemValue = input.value.trim();

  if (itemValue.length >= 2) {
    const newItem = { id: Date.now(), name: itemValue };
    console.log(newItem);
    // createList();
    input.value = "";
    input.focus();
    listItems.push(newItem);

    createList(listItems);
    saveToStorage(listKey, listItems);
  }
}

function createList() {
  const listContainer = document.querySelector("ul");
  listContainer.innerHTML = "";

  listItems.forEach(function (items) {
    listContainer.innerHTML += `<li><span>${items.name}</span><i class="uis uis-times-circle" style="font-size: x-large" data-id="${items.id}"></i></li>`;
  });

  const deleteButton = document.querySelectorAll("li i");
  deleteButton.forEach(function (remove) {
    remove.addEventListener("click", removeFromList);
  });
}

function removeFromList() {
  const id = parseInt(event.target.dataset.id);
  console.log(event);

  // const clicked = event.target.type;
  const newList = listItems.filter(function (item) {
    console.log(item.id);
    if (id !== item.id) {
      return true;
    }
  });

  listItems = newList;
  updateList(listItems, id);
  console.log(newList);

  createList();
}

function updateList(listItems, id) {
  console.log("newList", listItems);
  console.log("id", id);

  const thisItemIndex = listItems.findIndex(function (value) {
    // console.log(id);

    if (value.id === id) {
      return true;
    }
  });

  return listItems;
}
