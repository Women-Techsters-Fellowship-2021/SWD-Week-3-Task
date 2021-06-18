//Select DOM
const inputField = document.querySelector("input-field");
const itemTitle = document.querySelector(".item-title");
const itemQuantity = document.querySelector(".item-quantity");
const itemDescription = document.querySelector(".item-description");
const shoppingButton = document.querySelector(".shopping-button");
const shoppingList = document.querySelector(".shopping-list");

//Event Listeners
shoppingButton.addEventListener("click", addShoppingList);
shoppingList.addEventListener("click", deleteShoppingList);


function addShoppingList(e) {
    //Prevent natural behaviour
    e.preventDefault();

    // indicating error when the items detaila are empty
    if (itemTitle.value === "" ) {
        itemTitle.classList.add("error");
        shoppingListItem.classList.add("complete");
    } else {
        itemTitle.classList.remove("error");
    }
    
    if (itemQuantity.value === "" || itemQuantity.value <= 0 ) {
        itemQuantity.classList.add("error");
        shoppingListItem.classList.add("complete");
    } else {
        itemQuantity.classList.remove("error");
    }

    if (itemDescription.value === "" ) {
        itemDescription.classList.add("error");
        shoppingListItem.classList.add("complete");
    }
    else {
        itemDescription.classList.remove("error");
    }

    //Create shopping List Item
    const shoppingListItem = document.createElement("li");
    shoppingListItem.classList.add("shopping-list-item");
    
    // Create list content
    const listItemcontainer = document.createElement("div");
    shoppingListItem.appendChild(listItemcontainer);

    // creating the item details on the shopping list
    const listItemTitle = document.createElement("h3");
        listItemTitle.innerText = itemTitle.value;
        listItemcontainer.appendChild(listItemTitle);
        itemTitle.value = "";

    const listItemDescription = document.createElement("span");
        listItemDescription.innerText = itemDescription.value;
        listItemcontainer.appendChild(listItemDescription);
        itemDescription.value = "";

    const listItemQuantity = document.createElement("h4");
        listItemQuantity.innerText = `Quantity:  x${itemQuantity.value}`;
        listItemcontainer.appendChild(listItemQuantity);
        itemQuantity.value = "";

    //Create Completed Button
    const completedButton = document.createElement("button");
        completedButton.innerText = "Done";
        completedButton.classList.add("complete-btn");
        shoppingListItem.appendChild(completedButton);
    
    //attach final shopping list
    shoppingList.appendChild(shoppingListItem);
}

function deleteShoppingList(e) {
    const item = e.target;

    if (item.classList[0] === "complete-btn") {
        const list = item.parentElement;
        list.classList.add("complete");
    }

}


