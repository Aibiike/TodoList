//
// //Получаем все элементы из html
// let todoName = document.querySelector('.task-name')
// let addBtn = document.querySelector('.add-todo')
// let clearAll = document.querySelector('.clear-all')
// let todoBlock = document.querySelector('.todos')
//
// //Добавляем дело при клике на кнопку добавить
// addBtn.addEventListener('click' , () => addTodo())
// //Обработка события при клике на кнопку Очистить все
// clearAll.addEventListener('click', ()=> clear())
// //Добавляем дело при клике на Enter
// todoName.addEventListener('keypress',(e)=>{
//     if (e.key === 'Enter'){
//         addTodo()
//     }
// })
// //Получаем все данные из локал сторич если их там нет то даем новый массив
// function getTodos(){
//     return JSON.parse(localStorage.getItem('todos')) || ['Example item']
// }
//
//
// //Запускаем при клике на кнопку добавить
// function addTodo(){
//     //берем данные из инпута
//     let newTodo = todoName.value
//     //проверяем на пустоту
//     if (newTodo.length > 0 ){
//         //получаем данные из локалсторич и создаем новый массив  в котором все из этого хранилища и через запятую
//         // значение из инпут
//         let todos =  getTodos()
//         todos = [...todos, newTodo]
//         //записываем обновленный массив в локалсторич
//         localStorage.setItem('todos',JSON.stringify(todos))
//         //Перрерисовываем список
//         view()
//         //Чистим инпут
//         todoName.value = ''
//     }
//
// }
// //Отрисовка списка на страницу
// function view(){
//     let tasks = getTodos()
//     let list  = ''
//     //Перебираем массив со всеми делами и складываем в <li> в переменную list в виде строки
//     tasks.forEach(item => list = list + `<li>${item}<button class="del-btn">Del</button></li>`)
//     //вставляем список на страницу
//     todoBlock.innerHTML = '<ol>' + list + '</ol>'
//         //берем все кнопки удаления и навешиваем на каждое событие клика
//     document.querySelectorAll('.del-btn').forEach((button,idx) =>{
//         button.addEventListener('click',()=>{
//             //вырезаем по индексу удаленный элемент
//             tasks.splice(idx , 1)
//             //после удаления записываем массив без этого элемента в хранилище
//             localStorage.setItem('todos',JSON.stringify(tasks))
//             //Перерисовка
//             view()
//         })
//     })
// }
//
// //Очистить весь спи список
// function clear(){
//     //удвляем строку из локал сторич по названию ключа тодос
//     localStorage.removeItem('todos')
//     //перерисовка
//     view()
// }
// view()
//
//
let todoName = document.querySelector('.task-name')
let addBtn = document.querySelector('.add-todo')
let todoBlock = document.querySelector('.todos')
let deleteAll = document.querySelector('.clear')

deleteAll.addEventListener('click', () => {
    clear()
    view()

})

addBtn.addEventListener('click', () => {
    addTodo()
})
todoName.addEventListener('keypress',(event)=>{
    if (event.key === 'Enter'){
        addTodo()
    }
})
todoName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo()
})

function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || []
}

function addTodo() {
    let newTodo = todoName.value
    if (newTodo.length > 0) {
        let todos = getTodos()
        todos = [...todos, newTodo]
        localStorage.setItem('todos', JSON.stringify(todos))
        view()
        todoName.value = ''
    }
}

function view() {
    let tasks = getTodos()
    let list = ''
    tasks.forEach(item => list = list + `<li class="list-group-item d-flex justify-content-between align-items-center" style="background: rgba(255,255,255,0.9)">${item} <button class="btn btn-danger delete-btn"><i class="fas fa-trash-alt"></i></button> </li>`)
    todoBlock.innerHTML = '<ul class="list-group" style="margin-top: 40px">' + list + '</ul>'
    document.querySelectorAll('.delete-btn').forEach((button, idx) => {
        button.addEventListener('click', () => {
            tasks.splice(idx, 1)
            localStorage.setItem('todos', JSON.stringify(tasks))
            view()
        })
    })
}

function clear() {
    localStorage.removeItem('todos')
    console.log(1)
    view()
}

view()

