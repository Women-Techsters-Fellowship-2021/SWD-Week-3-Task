//Initialize the values/variable that's going to values (get each value in the textbox by id)


var product = {
    itemtitle: document.getElementById('itemtitle'),
    description: document.getElementById('description'),
    quantity: document.getElementById('quantity')
};


var addButton = document.getElementById('add');
var list = document.getElementById('list');
addButton.onclick = CreateList;


//Create a function list
function CreateList() {
    var li = document.createElement('li');


    li.innerHTML = "Product : " + product.itemtitle.value + "<br> Description : " + product.description.value + "<br> Quantity :" + product.quantity.value
    var image = document.createElement('img');
    image.setAttribute('src', 'http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png');
    li.appendChild(image);
    list.appendChild(li);

    //clear the form after you insert the item in the list
    product.description.value = "";
    product.itemtitle.value = "";
    product.quantity.value = "";


    //remove item from the list
    image.ondblclick = function () {
        list.removeChild(li);
    };

    //Change the background color of the selected item in the list
    li.onclick = function () {
        li.style.background = '#84ac47';
    };
}

//Validating the form before submit
