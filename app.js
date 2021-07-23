let section = document.querySelector("section")
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    e.preventDefault();

    //get input values
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    //  create an todo item
    let addTodo = document.createElement("div");
    addTodo.classList.add("todo");

    // create text display
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;;
    // create time display
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth + " / " + todoDate;

    // add text and time to addTodo
    addTodo.appendChild(text); addTodo.appendChild(time);
    // add addTodo to section
    section.appendChild(addTodo);
})
