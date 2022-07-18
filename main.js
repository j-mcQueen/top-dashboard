const newBook = document.querySelector(".actions svg");

const openForm = () => {
    const form = document.querySelector(".form-cntr");
    const page = document.querySelector("#page");
    form.setAttribute("style", "display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh");
    page.style.opacity = "0.5";
    // unfocus 
}

newBook.addEventListener("click", openForm);