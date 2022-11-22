const plus = document.querySelector(".actions svg");
const form_cntr = document.querySelector(".form-cntr");
const form = document.querySelector("form");
const cross = document.querySelector(".form-cntr svg");
const submit = document.querySelector(".btn button");
const page = document.querySelector("#page");
const grid = document.querySelector(".reading-list");

// ---

const open = () => {
    form_cntr.setAttribute("style", "visibility: visible;");
    page.style.opacity = "0.3";
}
plus.addEventListener("click", open);

const close = () => {
    page.style.opacity = "1";
    form_cntr.setAttribute("style", "visibility: none;");
    form.reset();
}
cross.addEventListener("click", close);

// ---

const library = [];

class Book {
    constructor(title, author, published, read) {
        this.title = title,
        this.author = author,
        this.publish = published,
        this.read = read;
    }
}

const push = () => {
    const input_fields = document.querySelectorAll("fieldset input");
    let title = input_fields[0].value.toUpperCase(); // uppercase here to ensure new grid item additions have a capitalised book title
    let author = input_fields[1].value;
    let published = Number(input_fields[2].value);
    let read = document.querySelector("input[type='checkbox']").checked;

    let novel = new Book(title, author, published, read);
    library.push(novel);
    form.reset();
    close();

    const book_cntr = document.createElement("div");
    const title_cntr = document.createElement("div");
    book_cntr.setAttribute("class", "book new");
    book_cntr.setAttribute("data-id", library.indexOf(novel));
    title_cntr.setAttribute("class", "title");
    grid.appendChild(book_cntr);
    book_cntr.appendChild(title_cntr);

    const cite = document.createElement("cite");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    cite.textContent = title;
    para1.textContent = author;
    para2.textContent = published;
    title_cntr.append(cite, para1, para2);

    const btn_cntr = document.createElement("div");
    const read_status = document.createElement("div");
    const read_btn = document.createElement("button");
    btn_cntr.setAttribute("class", "btns");
    read_status.setAttribute("class", "read-status");
    read === false ? (read_btn.textContent = "unread") : (read_btn.textContent = "read", read_btn.classList.toggle("active"));
    read_status.appendChild(read_btn);

    const remove_cntr = document.createElement("div");
    const remove_btn = document.createElement("button");
    remove_cntr.setAttribute("class", "remove");
    remove_btn.textContent = "remove";
    remove_cntr.appendChild(remove_btn);
    btn_cntr.append(read_status, remove_cntr);
    book_cntr.appendChild(btn_cntr);

    read_btn.addEventListener("click", (e) => {
        novel.read === true ? 
                            (
                                novel.read = false,
                                e.target.textContent = "unread",
                                e.target.classList.toggle("active")
                            )
                            :
                            (
                                novel.read = true,
                                e.target.textContent = "read",
                                e.target.classList.toggle("active")
                            );
    });

    remove_btn.addEventListener("click", (e) => {
        let index = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        library.splice(index, 1);
        e.target.parentElement.parentElement.parentElement.remove();

        let book_cntrs = document.querySelectorAll(".book");
        let data_id = 0;
        book_cntrs.forEach(cntr => {
            // update data-id of book containers - ensures interface reflects array correctly
            cntr.setAttribute("data-id", data_id);
            data_id += 1;
        });
    });
}
submit.addEventListener("click", push);