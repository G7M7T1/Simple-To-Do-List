let section = document.querySelector("section")
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    e.preventDefault();

    //get input values
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    if ( todoText === "") {
        alert("please enter text");
        return;
    }

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

    // create green check
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    // add Event Listener
    completeButton.addEventListener("click", event => {
        let todoItem = event.target.parentElement;
        todoItem.classList.toggle("done");
    })

    // create red trash canvas
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    // add Event Listener
    trashButton.addEventListener("click", event => {
        let todoItem = event.target.parentElement;
        todoItem.style.animation = "scaleDown 0.3s forwards";
        todoItem.addEventListener("animationend", () => {
            todoItem.remove()
        })
    })

    // add text and time to addTodo
    addTodo.appendChild(text); addTodo.appendChild(time);
    // add complete button and trash button
    addTodo.appendChild(completeButton); addTodo.appendChild(trashButton);

    // animation scaleUp here
    addTodo.style.animation = "scaleUp 0.5s forwards";

    // clear input
    form.children[0].value = ""; form.children[1].value = ""; form.children[2].value = "";

    // add addTodo to section
    section.appendChild(addTodo);
})
