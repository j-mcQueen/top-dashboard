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

    let novel = new Book(title, author, pages, read); // get a published year instead of number of pages
    library.push(novel);
    form.reset();
    close();

    const bookCntr = document.createElement("div");
    bookCntr.setAttribute("class", `book ${title}`);
    grid.appendChild(bookCntr);

    const titleCntr = document.createElement("div");
    titleCntr.setAttribute("class", "title");
    bookCntr.appendChild(titleCntr);

    const cite = document.createElement("cite");
    const para = document.createElement("p");
    cite.textContent = title;
    para.textContent = author;
    titleCntr.appendChild(cite);
    titleCntr.appendChild(para);

    const readCntr = document.createElement("div");
    readCntr.setAttribute("class", "read-status");
    const readBtn = document.createElement("button");
    readBtn.textContent = "sample";
    readCntr.appendChild(readBtn);
    bookCntr.appendChild(readCntr);

    const removeCntr = document.createElement("div");
    removeCntr.setAttribute("class", "remove");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeCntr.appendChild(removeBtn);
    bookCntr.appendChild(removeCntr);
}
submit.addEventListener("click", push);