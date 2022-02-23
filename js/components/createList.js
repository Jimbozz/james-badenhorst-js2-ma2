export default function createList(items) {
  const listContainer = document.querySelector("ul");
  listContainer.innerHTML = "";

  items.forEach(function (item) {
    listContainer.innerHTML += `<li><span>${item}</span><i class="uis uis-times-circle" style="font-size: x-large" data-item="${item}"></i></li>`;
  });

  const deleteButton = document.querySelectorAll("li i");
  deleteButton.forEach(function (remove) {
    remove.addEventListener("click", removeFromList);
  });
}

function removeFromList() {
  const deleteThisItem = event.target.dataset.item;
  console.log(deleteThisItem);

  const newList = item.filter(function (item) {
    if (deleteThisItem !== item.id) {
      return true;
    }
  });
  // console.log(newList);
  items = newList;

  createList();
}
