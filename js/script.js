import { books } from "./data/bookList.js";
import { displayMessage } from "./components/displayMessage.js";

let booksToRender = books;

function createBooks() {
  const container = document.querySelector(".book-container");
  container.innerHTML = "";

  booksToRender.forEach(function (book) {
    container.innerHTML += `
            <li class="book-item">
              <h3>${book.title}</h3>
              <p>${book.isbn}</p>
              <i class="uis uis-times-circle" style="font-size: x-large" data-item="${book.isbn}"></i>
            </li>
    `;
  });

  const deleteIcon = document.querySelectorAll("li i");

  deleteIcon.forEach(function (icon) {
    icon.addEventListener("click", removeFromList);
  });

  if (booksToRender.length === 0) {
    displayMessage("error", "There are no more books left.", ".container");
  }
}

createBooks();

function removeFromList() {
  const deleteItem = event.target.dataset.item;

  const newList = booksToRender.filter(function (item) {
    if (deleteItem !== item.isbn) {
      return true;
    }
  });

  booksToRender = newList;
  createBooks();
}
