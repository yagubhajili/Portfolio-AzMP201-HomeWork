const accordions = document.querySelectorAll(".accordion")

accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active')
        let accordionBtn = accordion.querySelector('button');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {
            accordionBtn.textContent = '+';
        }
    })
})




let api = [
    {
        id: 1,
        todo: "game",
    },
    {
        id: 2,
        todo: "gym",
    },
    {
        id: 3,
        todo: "shop",
    },
];

const formTask = document.querySelector('.formTask')
const taskinput = document.querySelector('.taskinput')
const taskHolder = document.querySelector('.taskHolder')


function createTodo() {


    taskHolder.innerHTML = '';

    api.forEach((elem, index) => {

        const taskItem = document.createElement("div")
        const todoText = document.createElement("p")
        const editBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")


        taskItem.className = 'taskItem'
        todoText.className = 'todoText'
        editBtn.className = 'editBtn'
        deleteBtn.className = 'deleteBtn'



        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";

        todoText.innerText = index + 1 + "-" + elem.todo;
        deleteBtn.setAttribute("id", elem.id);


        taskItem.append(todoText, editBtn, deleteBtn)
        taskHolder.append(taskItem)



        deleteBtn.addEventListener('click', e => {
            api = api.filter(elem => {
                return elem.id != e.target.getAttribute('id');
            });
            createTodo()

        });



      
    });

}

formTask.addEventListener('submit', e => {
    e.preventDefault();
    let obj = {
        id: api.length + 1,
        todo: taskinput.value
    };
    api.push(obj);
    createTodo();
    taskinput.value = '';
});
createTodo();
