// Todo App
var ul = document.getElementById('todoList'),
    addTodo = document.getElementById('addTodo'),
    removeAllTodo = document.getElementById('clearList');

// when we click on adding new todo task
addTodo.onclick = () => {
    addTodoData(ul)
}

// logic that will add new todo task
function addTodoData(targetUL) {

    var inputValue = document.getElementById('todoValue').value,
        li = document.createElement('li'),
        textNode = document.createTextNode(inputValue + ''),
        button = document.createElement('button'),
        doneButton = document.createElement('button');
    //remove input value
    document.getElementById('todoValue').value = ''

    // alert if no value enter's
    if (inputValue == '') {
        alert('Please enter value in Input box');
        return false;
    }

    // Add relevant info for delete and done todo task
    button.innerHTML = 'Remove';
    button.setAttribute('onclick', 'removeTodo(this);')

    doneButton.innerHTML = "Done";
    doneButton.setAttribute('onclick', 'doneTodo(this);')
    li.appendChild(textNode)
    li.appendChild(button);
    li.appendChild(doneButton);

    targetUL.appendChild(li)

}

function removeTodo(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

function doneTodo(item) {
    item.className = 'done';
    item.innerHTML = 'Not Done'
    item.setAttribute('onclick', 'notDone(this);')
    var parent = item.parentElement;
    parent.className = "taskDone";
}

function notDone(item){
    item.classList.remove("done");
    item.innerHTML = 'Done'
    item.setAttribute('onclick', 'doneTodo(this);')
    var parent = item.parentElement;
    parent.classList.remove("taskDone"); 
}

removeAllTodo.onclick = () => {
    ul.innerHTML = ''
}

