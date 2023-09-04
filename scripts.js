const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const taskList = document.querySelector('.list-tasks')

let listItens = []

function addTask() {
    listItens.push({
        task: input.value,
        check: false
    })

    input.value = ''

    showTask()
}

function showTask() {
    let newLi = ''

    listItens.forEach((item, index) => {
        newLi = newLi + `
        <li class="task ${item.check && "done"}">
                <img src="./img/checked.png" alt="checar" onclick="checkTask(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="excluir" onclick="deleteItem(${index})">
            </li>
        `
    })

    taskList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(listItens))

}

function deleteItem(index) {
    listItens.splice(index, 1)

    showTask()
}

function checkTask(index) {
    listItens[index].check = !listItens[index].check

    showTask()
}

function reloadTasks() {
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage) {
        listItens = JSON.parse(tasksLocalStorage)
    }
    showTask()
}

reloadTasks()
button.addEventListener('click', addTask)