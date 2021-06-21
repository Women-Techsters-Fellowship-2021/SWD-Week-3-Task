const itemsAdded = [];
const addBtn = document.getElementById("add-btn");
// const delBtn = window.document.querySelector(".del-btn");


let count = 0;

const itemsContainer = document.getElementById("items-container");


function updateItem() {

    itemsContainer.innerHTML = "";

    for (let idx = 0; idx < itemsAdded.length; idx++) {
        
        eachColumn(itemsAdded[idx])
    

    }

}

function addItem() {

    count++;
    const itemName = document.getElementById("item-name").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("description").value;


    //Create object of form-content
    const formContent = {
        id: count,
        itemName: itemName,
        quantity: quantity,
        description: description
    };

    itemsAdded.push(formContent);
    updateItem();
           
    itemName.value = "";
    quantity.value = "";
    description.value = "";
}

function deleteItem(delete_id) {

    let index = itemsAdded.map(x => {
        return x.id;
        }).indexOf(delete_id);

        itemsAdded.splice(index, 1);
        updateItem();
    //alert(id:);
    // let deletableCard = document.getElementById("column" + id)
    //console.log(deletableCard);
    // deletableCard.remove();
    // itemsAdded.
}

function eachColumn(formContent) {
    //console.log(formContent, formContent.itemName.value);

    let eachCard = "<div id='column"+formContent.id+"' class='column'><div class='card'><div class='card-head'>"+formContent.itemName+"</div><div class='class-content'><p>"+ formContent.description +"</p><small>"+ formContent.quantity +"</small></div><div class='card-footer'><button type='button' name='delete-button' onclick='deleteItem("+formContent.id+")' class='del-btn' data-id="+ formContent.id +">Remove</button></div></div></div>";

 return itemsContainer.innerHTML += eachCard;
 //return itemsContainer.append(eachCard)

}

addBtn.addEventListener("click", addItem)

//delBtn.addEventListener("click", deleteItem)