const newBook = document.querySelector(".actions svg");
const formCntr = document.querySelector(".form-cntr");
const form = document.querySelector("form");
const close = document.querySelector(".form-cntr svg");
const page = document.querySelector("#page");
const bookList = document.querySelector(".favourites");

// ---

const openForm = () => {
    formCntr.setAttribute("style", "visibility: visible;");
    page.style.opacity = "0.3";
}
newBook.addEventListener("click", openForm);

const closeForm = () => {
    page.style.opacity = "1";
    formCntr.setAttribute("style", "visibility: none;");
    form.reset();
}
close.addEventListener("click", closeForm);

// ---

const library = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

const addBook = () => {
    const inputFields = document.querySelectorAll("fieldset input");
    let title = inputFields[0].value;
    let author = inputFields[1].value;
    let pages = Number(inputFields[2].value);
    let read = document.querySelector("input[type='checkbox']").checked;

    let novel = new Book(title, author, pages, read);
    library.push(novel);
    form.reset();
    closeForm();
}

const submit = document.querySelector(".btn button");
submit.addEventListener("click", addBook);