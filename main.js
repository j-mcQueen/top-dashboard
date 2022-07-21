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

function Book(title, author, published, read) {
    this.title = title,
    this.author = author,
    this.publish = published,
    this.read = read;
}

const push = () => {
    const inputFields = document.querySelectorAll("fieldset input");
    let title = inputFields[0].value;
    let author = inputFields[1].value;
    let published = Number(inputFields[2].value);
    let read = document.querySelector("input[type='checkbox']").checked;

    let novel = new Book(title, author, published, read);
    library.push(novel);
    form.reset();
    close();

    const bookCntr = document.createElement("div");
    bookCntr.setAttribute("class", "book new");
    grid.appendChild(bookCntr);

    const titleCntr = document.createElement("div");
    titleCntr.setAttribute("class", "title");
    bookCntr.appendChild(titleCntr);

    const cite = document.createElement("cite");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    cite.textContent = title;
    para1.textContent = author;
    para2.textContent = published;
    titleCntr.appendChild(cite);
    titleCntr.appendChild(para1);
    titleCntr.appendChild(para2);

    const btnCntr = document.createElement("div");
    btnCntr.setAttribute("class", "btns");
    const readStatus = document.createElement("div");
    readStatus.setAttribute("class", "read-status");
    const readBtn = document.createElement("button");
    
    read === false ? readBtn.textContent = "not read" : readBtn.textContent = "read";

    readStatus.appendChild(readBtn);
    btnCntr.appendChild(readStatus);

    const removeCntr = document.createElement("div");
    removeCntr.setAttribute("class", "remove");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeCntr.appendChild(removeBtn);
    btnCntr.appendChild(removeCntr);
    bookCntr.appendChild(btnCntr);
}
submit.addEventListener("click", push);