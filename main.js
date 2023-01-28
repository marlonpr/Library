// create an empty array to store book objects
let bookArray = [];

// create a book object constructor
function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

//--------------------------------------------------------------
// create a function to display the book array 
function displayBooks() {
  // Get the container element
  let container = document.getElementById("book-container");
  // Clear the container
  container.innerHTML = "";
  // Loop through the bookArray
  for (let i = 0; i < bookArray.length; i++) {
    // Create a new div element for the book
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card"); // add class to css style the card
    // Add the book's title, author, and year to the div
    bookCard.innerHTML = `<h3 class="book-title">${bookArray[i].title}</h3>
                         <p class="book-author">Author: ${bookArray[i].author}</p>
                         <p class="book-year">Year: ${bookArray[i].year}</p>
                         <button class="change-status" data-index="0">Mark as Read</button>
                         <button id="remove-book-${i}">Remove</button>`;
    // Add the div to the container
    container.appendChild(bookCard);
    // Add a click event listener to the remove button
    let removeBtn = document.getElementById(`remove-book-${i}`);
    removeBtn.addEventListener("click", function() {
      // Remove the book from the bookArray
      bookArray.splice(i, 1);
      // Display the updated bookArray
      displayBooks();
    });
  }
}

//--------------------------------------------------------------
// add a new book to the array when the form is submitted

let newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", function () {
  document.getElementById("new-book-form").style.display = "block";
});

let newBookForm = document.getElementById("new-book-form");
newBookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get the values of the form inputs
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  // Create a new book object
  let newBook = new Book(title, author, year, pages, read);
  // Add the new book to the bookArray
  bookArray.push(newBook);
  // Clear the form inputs
  document.getElementById("new-book-form").reset();
  // Hide the form
  document.getElementById("new-book-form").style.display = "none";
  // Display the new book in the container
  displayBooks();
});

//--------------------------------------------------------------
// create a function to change the read status of a book

const changeStatusButtons = document.querySelectorAll('.change-status');
changeStatusButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const index = event.target.dataset.index;
    library[index].read = library[index].read ? false : true;
    if(library[index].read){
     event.target.innerText = "Mark as Unread";
    }else{
     event.target.innerText = "Mark as Read";
    }
  });
});








