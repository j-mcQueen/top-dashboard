const formAccess = () => {
    const newBook = document.querySelector(".actions svg");
    const form = document.querySelector(".form-cntr");
    const close = document.querySelector(".form-cntr svg");
    const page = document.querySelector("#page");
    
    const openForm = () => {
        form.setAttribute("style", "display: flex;");
        page.style.opacity = "0.3";
    }
    
    const closeForm = () => {
        form.setAttribute("style", "display: none;");
        page.style.opacity = "1";
    }
    
    newBook.addEventListener("click", openForm);
    close.addEventListener("click", closeForm);
}

window.addEventListener("load", formAccess);