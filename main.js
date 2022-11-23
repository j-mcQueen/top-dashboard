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
};

const push = () => {
    // -- get field data

    const input_fields = document.querySelectorAll("fieldset input");
    let title = input_fields[0].value.toUpperCase(); // ensure new grid items have a capitalised book title
    let author = input_fields[1].value;
    let published = Number(input_fields[2].value);
    let read = document.querySelector("input[type='checkbox']").checked;

    // -- use field data

    let novel = new Book(title, author, published, read);
    library.push(novel);

    // -- prepare form for next use

    form.reset();
    close();

    // -- build new book entry elements
    
    const build = (() => {
        // containers
        const book_cntr = document.createElement("div");
        const title_cntr = document.createElement("div");
        const btn_cntr = document.createElement("div");
        // info
        const cite = document.createElement("cite");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        // buttons
        const read_status = document.createElement("div");
        const read_btn = document.createElement("button");
        const remove_cntr = document.createElement("div");
        const remove_btn = document.createElement("button");

        return { 
            book_cntr, title_cntr, btn_cntr, 
            cite, para1, para2,
            read_status, read_btn, remove_cntr, remove_btn,
        }; 
    })();

    // -- arrange new form entry elements

    const organise = ((access) => {
        //     // structure containers
        access.book_cntr.setAttribute("class", "book new");
        access.book_cntr.setAttribute("data-id", library.indexOf(novel));
        access.title_cntr.setAttribute("class", "title");
        grid.appendChild(access.book_cntr);
        access.book_cntr.appendChild(access.title_cntr);
        //     // structure info
        access.cite.textContent = title;
        access.para1.textContent = author;
        access.para2.textContent = published;
        access.title_cntr.append(access.cite, access.para1, access.para2);
        //     // structure buttons
        access.remove_cntr.setAttribute("class", "remove");
        access.remove_btn.textContent = "remove";
        access.remove_cntr.appendChild(access.remove_btn);
        access.btn_cntr.append(access.read_status, access.remove_cntr);
        access.book_cntr.appendChild(access.btn_cntr);
    })(build);

    build.btn_cntr.setAttribute("class", "btns");
    build.read_status.setAttribute("class", "read-status");
    read === false ? (build.read_btn.textContent = "unread") : (build.read_btn.textContent = "read", build.read_btn.classList.toggle("active"));
    build.read_status.appendChild(build.read_btn);

    // -- add functionality to read button

    const toggle_read = (read, text, e) => {
        novel.read = read;
        e.target.textContent = text;
        e.target.classList.toggle("active");
    };

    build.read_btn.addEventListener("click", (e) => {
        novel.read === true ? toggle_read(false, "unread", e) : toggle_read(true, "read", e);
    });

    //  -- add functionality to remove button

    build.remove_btn.addEventListener("click", (e) => {
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