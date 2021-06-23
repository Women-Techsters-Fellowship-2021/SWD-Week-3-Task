//Select the input and button elements
const nameValue = document.getElementById('item-name');
const qtyValue = document.getElementById('quantity');
const descValue = document.getElementById('description');
const addToList = document.getElementById('add-btn');
const list = document.querySelector('.items-table'); //select the table that the list content should be appended to.
let shoppingList = []; //declaring an empty array

//function to delete item from list
function deleteItem(delItem) {
    shoppingList = shoppingList.filter(item => {
        if(
            item.item == delItem.item && 
            item.qty == delItem.qty && 
            item.desc == delItem.desc
        ) {
            document.getElementById(`${delItem.item} ${delItem.qty} ${delItem.desc}`).remove();
            return false;
        } else return true;
    })
}

//function to add item to list
function addToListHandler() {

    //declaring object model
    const input = {
        item: nameValue.value,
        qty: qtyValue.value,
        desc: descValue.value,

    }
    const listContent = document.createElement('div');
    listContent.id = `${input.item} ${input.qty} ${input.desc}`;
    listContent.innerHTML = `<div>
                        <h2>Item Name: ${input.item}</h2>
                        <p>Quantity: ${input.qty}</p>
                        <p>Description: ${input.desc}</p>
                        <button type="reset" style="margin-left:360px;" id="remove-btn ${input.item} ${input.qty} ${input.desc}">Remove</button>
                        <hr>
                    </div>`; //inputting value using template string
    list.appendChild(listContent);

    shoppingList.push(input); //adding items into array
    console.log(shoppingList);

    //A click event listening to remove item from the list
    const removeBtn = document.getElementById(`remove-btn ${input.item} ${input.qty} ${input.desc}`);
    removeBtn.addEventListener('click', () => deleteItem(input))
    // console.log(input);
}

addToList.addEventListener('click', addToListHandler);

