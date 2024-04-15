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

    api.forEach(elem => {

        const taskItem = document.createElement('div')
        const todoText=document.createElement('p')

    })

}