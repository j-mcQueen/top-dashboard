const plus = document.querySelector(".actions svg");
const formCntr = document.querySelector(".form-cntr");
const form = document.querySelector("form");
const cross = document.querySelector(".form-cntr svg");
const submit = document.querySelector(".btn button");
const page = document.querySelector("#page");
const grid = document.querySelector(".favourites");

// ---

const open = () => {
    formCntr.setAttribute("style", "visibility: visible;");
    page.style.opacity = "0.3";
}
plus.addEventListener("click", open);

const close = () => {
    page.style.opacity = "1";
    formCntr.setAttribute("style", "visibility: none;");
    form.reset();
}
cross.addEventListener("click", close);

// ---

const library = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

const push = () => {
    const inputFields = document.querySelectorAll("fieldset input");
    let title = inputFields[0].value;
    let author = inputFields[1].value;
    let pages = Number(inputFields[2].value);
    let read = document.querySelector("input[type='checkbox']").checked;

    let novel = new Book(title, author, pages, read);
    library.push(novel);
    form.reset();
    close();
}
submit.addEventListener("click", push);