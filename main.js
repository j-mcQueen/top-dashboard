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
    const titleCntr = document.createElement("div");
    bookCntr.setAttribute("class", "book new");
    titleCntr.setAttribute("class", "title");
    grid.appendChild(bookCntr);
    bookCntr.appendChild(titleCntr);

    const cite = document.createElement("cite");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    cite.textContent = title;
    para1.textContent = author;
    para2.textContent = published;
    titleCntr.append(cite, para1, para2);

    const btnCntr = document.createElement("div");
    const readStatus = document.createElement("div");
    const readBtn = document.createElement("button");
    btnCntr.setAttribute("class", "btns");
    readStatus.setAttribute("class", "read-status");
    read === false ? (readBtn.textContent = "unread") : (readBtn.textContent = "read", readBtn.classList.toggle("active"));
    readStatus.appendChild(readBtn);

    const removeCntr = document.createElement("div");
    const removeBtn = document.createElement("button");
    removeCntr.setAttribute("class", "remove");
    removeBtn.textContent = "remove";
    removeCntr.appendChild(removeBtn);
    btnCntr.append(readStatus, removeCntr);
    bookCntr.appendChild(btnCntr);

    readBtn.addEventListener("click", (e) => {
        e.target.getAttribute("class") === "active" ? (e.target.textContent = "unread", e.target.classList.toggle("active")) : (e.target.textContent = "read", e.target.classList.toggle("active"));
    });
}
submit.addEventListener("click", push);