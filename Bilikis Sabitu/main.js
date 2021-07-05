//declaration of variables

const listInput = document.querySelector(".list-input");
const listButton = document.querySelector(".list-button");
const listItems = document.querySelector(".list-items");

//Event listeners
listButton.addEventListener("click", addList);
listItems.addEventListener("click", deleteCheck);

//Functions 
function addList(event) {
// prevent form from submitting
event.preventDefault();
//list Div
const listDiv = document.createElement("div");
listDiv.classList.add("list")
//create li 
const newList = document.createElement("li");
newList.innertext = listInput.value;
newList.classList.add("list-item");
listDiv.appendChild(newList);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
listDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
listDiv.appendChild(trashButton);
//append to items
listItems.appendChild(listDiv);
//clear list input value 
listInput.value = "";
}

// // for deleting items 

function deleteCheck(e) {
    const item = e.target;
     //delete list
    if (item.classList[0] === "trash-btn") {
       const list = item.parentElement;
       list.remove();
    }
//     //check mark 
    if (item.classList[0] === 'complete-btn') {
        const list = item.parentElement;
        list.classList.toggle('completed')
     }
 }

