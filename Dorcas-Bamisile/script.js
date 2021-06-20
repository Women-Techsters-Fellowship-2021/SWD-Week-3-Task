var list = document.getElementsByTagName("li"); 

var x;
for (x = 0; x < list.length; x++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    list[x].appendChild(span);
}

// Click on a close button to hide the current list item 
    var close = document.getElementsByClassName("close");
    var x; 
    for (x = 0; x < close.length; x++) { 
        close[x].onclick = function() { 
            var div = this.parentElement; 
            div.style.display = "none"; 
        } 
    } 

// Add a "checked" symbol when clicking on a list item 

var list = document.querySelector('ul');
list.addEventListener('click',function(ev) { 
       if (ev.target.tagName === 'LI') { 
       ev.target.classList.toggle('checked'); 
     } 
}, false); 


 // Create a new list item when clicking on the "Add" button 

function newElement() { 
    var li = document.createElement("li"); 
    var item = document.getElementById("item").value;
    var t = document.createTextNode(item);
    li.appendChild(t); 

    if (item === '') { 
        alert("Input the item!"); 
    } else  {  
        document.getElementById("added-list").appendChild(li); 
    }

    var li = document.createElement("li"); 
    var quantity = document.getElementById("quantity").value;
    var u = document.createTextNode(quantity);
    li.appendChild(u);

    if (quantity === '') {
        alert("Input the quantity");
    } else {  
        document.getElementById("added-list").appendChild(li); 
    }

    var li = document.createElement("li"); 
    var description = document.getElementById("description").value;
    var v = document.createTextNode(description);
    li.appendChild(v);

    if (description === '') {
        alert("Input the description");
    } else {  
        document.getElementById("added-list").appendChild(li); 
    }
}
//Clearing the old list
document.getElementById("item").value = "";
document.getElementById("quantity").value = ""; 
document.getElementById("description").value = "";  
var span = document.createElement("SPAN"); 
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span); 

for (x = 0; x < close.length; x++) { 
    close[x].onclick = function() { 
        var div = this.parentElement; 
        div.style.display = "none"; 
    } 
} 

function removeAll(){ 
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = ""; 
}