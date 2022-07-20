const newBook = document.querySelector(".actions svg");
const formCntr = document.querySelector(".form-cntr");
const form = document.querySelector("form");
const close = document.querySelector(".form-cntr svg");
const page = document.querySelector("#page");

const openForm = () => {
    formCntr.setAttribute("style", "visibility: visible;");
    page.style.opacity = "0.3";
}

const closeForm = () => {
    page.style.opacity = "1";
    formCntr.setAttribute("style", "visibility: none;");
    form.reset();
}

newBook.addEventListener("click", openForm);
close.addEventListener("click", closeForm);