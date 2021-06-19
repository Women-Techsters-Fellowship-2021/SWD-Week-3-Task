const shoppingList = []; // Array of shopping items

/*-----------------------------------------------------------
Gettin required dom elements to use for the app
-----------------------------------------------------------*/
const titleInput = document.getElementById("title");
const quantityInput = document.getElementById("quantity");
const descriptionInput = document.getElementById("description");
const form = document.getElementById("add-form");
const titleError = document.getElementById("titleError");
const quantityError = document.getElementById("quantityError");
const descriptionError = document.getElementById("descriptionError");

/*-----------------------------------------------------------
Update Shopping List
-----------------------------------------------------------*/
function updateDom() {
  const shoppingListContainer = document.getElementById("view-items");
  shoppingListContainer.innerHTML = "";
  const fragment = new DocumentFragment();
  let i = 0;
  for (let item of shoppingList) {
    const divItemElement = createShoppingItem(item, i);
    // Prepend item to the top of list
    fragment.prepend(divItemElement);
    i++;
  }
  shoppingListContainer.append(fragment);
}

// Add shopping item to dom
function createShoppingItem(item, itemId) {
  // Create item element
  const divItemElement = document.createElement("div");
  divItemElement.className = "item";
  divItemElement.id = itemId;
  if (itemId > 0) {
    divItemElement.style.borderBottom = "1px solid #828282";
  }

  // Create div container
  const divElement = document.createElement("div");

  // Add h3, and 2 P elements to divElement innerHTML
  divElement.innerHTML = `<h3>${item.title}</h3>
  <p>${item.description}</p>
  <p class="quantity">Quantity: x${item.quantity}</p>`;

  // Create button
  const doneBtn = document.createElement("button");
  doneBtn.className = "btn";
  doneBtn.id = "add-btn";
  doneBtn.innerText = "Done";

  //Add event listener to button
  doneBtn.addEventListener("click", deleteShoppingItemHandler);

  // Append div element and done button to div item element
  divItemElement.append(divElement, doneBtn);

  return divItemElement;
}

/*-----------------------------------------------------------
Delete item handler function
-----------------------------------------------------------*/
function deleteShoppingItemHandler(e) {
  const parentElement = e.target.parentElement;
  const parentElementId = parseInt(parentElement.id);
  shoppingList.splice(parentElementId, 1);
  updateDom();
}

/*-----------------------------------------------------------
Add shopping list handler. 
-----------------------------------------------------------*/
function addShoppingItemhandler(e) {
  // Validate input values first
  e.preventDefault();

  if (
    titleInput.value.trim().length < 3 ||
    !parseInt(quantityInput.value) ||
    descriptionInput.value.trim().length < 10
  ) {
    descriptionError.innerText = "All values are required";
    return false;
  }

  const shoppingItem = {
    title: titleInput.value,
    quantity: quantityInput.value,
    description: descriptionInput.value,
  }; // list item object

  // Add item to array
  shoppingList.push(shoppingItem);

  // Add item to DOM
  updateDom();
}

form.addEventListener("submit", addShoppingItemhandler);

/*-----------------------------------------------------------
Input validation part
-----------------------------------------------------------*/

// Validate title input
function titleHandler(e) {
  e.preventDefault();
  if (titleInput.value.trim().length < 3) {
    e.preventDefault();
    titleError.innerText = "Title must be 3 letter above";
  } else {
    titleError.innerText = "";
  }
}
titleInput.addEventListener("keyup", titleHandler);

// Handle quntity input
function quantityHandler(e) {
  e.preventDefault();
  // Checking for value here
  if (parseInt(quantityInput.value) != quantityInput.value) {
    e.preventDefault();
    quantityError.innerText = "A whole number expected";
  } else {
    quantityError.innerText = "";
  }
}
quantityInput.addEventListener("keyup", quantityHandler);

// Handle description input
function descriptionHandler(e) {
  e.preventDefault();
  if (descriptionInput.value.trim().length < 10) {
    e.preventDefault();
    descriptionError.innerText =
      "List item description should be 10 characters above";
  } else {
    descriptionError.innerText = "";
  }
}
descriptionInput.addEventListener("keyup", descriptionHandler);
