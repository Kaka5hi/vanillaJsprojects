const btn = document.querySelector('.button');
const input = document.getElementById('input-value');
const container = document.querySelector('.to-do-container');

btn.addEventListener('click', toDoList)

function toDoList() {
    // create the div that will be attached to the todo container
    let div = document.createElement('div');
    div.classList.add('task');

    // content inside the div
    let content = document.createElement('p')
    div.append(content);
    
    // task complete button
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete-btn')
    completeBtn.innerText = 'Done'
    div.appendChild(completeBtn)

    // task delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerText = 'Delete'
    div.appendChild(deleteBtn)

    if(input.value === '') {
        alert('Empty task cannot be assigned')
    } else {
        content.innerText = `${input.value}`; 
        container.append(div);
    }

    input.value = '';

    // if task complete button pressed -> change the bg color
    completeBtn.addEventListener('click', function() {
        div.classList.add('task-complete')
    })

    // if delete task button pressed -> remove the div/delete div
    deleteBtn.addEventListener('click', function() {
        div.remove(content)
    })
}