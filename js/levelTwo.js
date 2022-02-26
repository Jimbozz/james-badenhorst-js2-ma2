import { displayMessage } from "./components/displayMessage.js";
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
  if (listItems.length === 0) {
    displayMessage("error", "There is nothing in your list.", "ul");
  }

  const deleteButton = document.querySelectorAll("li i");
  deleteButton.forEach(function (remove) {
    remove.addEventListener("click", removeFromList);
  });
}

function removeFromList() {
  const id = parseInt(event.target.dataset.id);

  const newList = listItems.filter(function (item) {
    if (id !== item.id) {
      return true;
    }
  });

  listItems = newList;
  updateList(listItems, id);
  createList();
  saveToStorage(listKey, listItems);
}

function updateList(listItems, id) {
  const thisItemIndex = listItems.findIndex(function (value) {
    if (value.id === id) {
      return true;
    }
  });
  return listItems;
}
