//query selectors to get the values using the Classnames of the elements
const itemInput = document.querySelector('.item_input');
const qtyInput = document.querySelector('.qty_input');
const descInput = document.querySelector('.desc_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');

//todo event listeners for add and delete buttons
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteTodo)

//function to create a list of a single Todo Item
function createTodoDiv() {

    const todoDiv = document.createElement('div')

    //for item Item
    const itemItem = document.createElement('li');
    itemItem.innerText = itemInput.value
    todoDiv.appendChild(itemItem)

    //for qty Item
    const qtyItem = document.createElement('li');
    qtyItem.innerText = qtyInput.value
    todoDiv.appendChild(qtyItem)

    //for desc Item
    const descItem = document.createElement('li');
    descItem.innerText = descInput.value
    todoDiv.appendChild(descItem)
    return todoDiv
}
function addTodo(event) {
    //i have forgotten what this thing does but i know you always have to put it when submitting a form
    event.preventDefault();

    //create todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create todo List
    const newTodo = document.createElement('div');
    newTodo.appendChild(createTodoDiv());
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(deleteButton());

    //add todoList to todo Div
    todoList.appendChild(todoDiv);

    //Clear form input values
    clearInput()

}

function deleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Done';
    deleteButton.classList.add('delete_btn');
    return deleteButton;
}

//to reset the form to empty input
function clearInput() {
    itemInput.value = ""
    qtyInput.value = ""
    descInput.value = ""
}

//the "event" is automatically available to this "deleteTodo" function because you have  registered "deleteTodo"
// with eventlisteners on line 27
function deleteTodo(event) {
    //to fetch the item your mouse is hovering on / targeting
    const item = event.target;

    //to delete item from the list by checking if the targeted item has class "delete_btn"
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}