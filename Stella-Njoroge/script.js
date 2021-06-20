// DOM
const addBtn = document.getElementById('add-btn');
const inputs = document.querySelectorAll('#input-div input');
const textareaField = document.getElementById('desc');
const ulElement = document.getElementById('ul-element');

// empty array - store input value objects
const listArray = [];

// add item function
const addItem = (event) => {
    event.preventDefault(); //prevent form reload on addBtn click

    // check for empty input fields, and if empty highlight field and send alert
    if (inputs[0].value == "" || inputs[1].value == "") {
        //use foreach to access individual input fields and apply same effect to both
        inputs.forEach((input) => {
            if (input.value == "") {
                input.classList.add('invalid');
            }
        });
        alert('Kindly fill the highlighted fields!');
    } else {
        // if fields are filled, create an object and add it to empty array
        const inputObject = {
                id: listArray.length,
                item: inputs[0].value,
                quantity: inputs[1].value,
                desc: textareaField.value,
        }
        listArray.unshift(inputObject); //use unshift so that last item added can be first on list
    }
    resetValues();   // on input submission/array push, reset the fields back to empty
    displayItems();  //display items 
}

const displayItems = () => {
    ulElement.innerText = ""; //prevent repetitive list items when addBtn is clicked

    //access objects stored in listArray
    listArray.forEach((list) => {
        const listItem = Object.values(list); //access all the values of a list object

        const liElement = document.createElement('li'); //create an li that will hold item
        const itemName = document.createElement('h3'); //create a h3 for item name
        const itemDesc = document.createElement('p'); //create p for description
        const itemQuantity = document.createElement('span'); //create span quantity
        const deleteBtn = document.createElement('button');
        
        // set text for each name, quantity etc depending on position of value in object list
        itemName.innerText = listItem[1];
        itemQuantity.innerText = `Quantity: x ${listItem[2]}`;
        itemDesc.innerText = listItem[3];
        deleteBtn.innerText = "Done";

        liElement.append(itemName,itemDesc, itemQuantity, deleteBtn); //append to liElement
        //assign id of item to liElement using data attribute
        liElement.setAttribute("data-id", listItem[0]);
        //assign id of item to deleteBtn using data attribute
        deleteBtn.setAttribute("data-id", listItem[0]); 

        deleteBtn.addEventListener("click", deleteItem); //delete item on deleteBtn click
        ulElement.appendChild(liElement); //insert li to ulElement

        // style ul element upon adding li child
        if (ulElement.childNodes.length > 0) {
            ulElement.style.border = "2px solid var(--grey-color)";
        }
    });
}

const deleteItem = (e) => {
    //get value of attribute that had been set eg index 0
    const deleteId = e.target.getAttribute("data-id");

    //compare if the id of clicked item(deleteId) equals the id of the item in array
    const selectedIndex = listArray.findIndex((item) => item.id == deleteId);

    //if true, cut out the item from the listArray
    listArray.splice(selectedIndex, 1);
    //remove the child node (li) element from ul
    ulElement.removeChild(ulElement.childNodes[selectedIndex]);
}

// reset function
const resetValues = () => {
    //on addBtn click, clear data on field
    if (inputs[0].value != "" && inputs[1].value != "") {
        inputs.forEach((input) => {
            input.value = "";
            input.classList.remove('invalid');
        });
        textareaField.value = "";
    }
}

// addbtn event listener
addBtn.addEventListener('click', addItem);