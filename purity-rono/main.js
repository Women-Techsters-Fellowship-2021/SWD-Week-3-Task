//Create 'close' button and append it to each list item
var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("➖");

    span.className = "close";
    span.appendChild(text);
    lis[i].appendChild(span);
    
}

//Making close button functional
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    };
    
}

//Adding 'checked' symbol
var list = document.querySelector("ul");
list.addEventListener('click', function (check) {
    if (check.target.tagName === 'LI') {
        check.target.classList.toggle('checked');
    }
}, false);

//Create an new item on list after clicking add button
var btn = document.getElementById("btn");

var addItem = function addItem(){
    console.log(5+6);
    var li = document.createElement("li");
    var p = document.createElement("p");
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var desc = document.getElementById("desc").value;
    var x = document.createTextNode(name);
    var y = document.createTextNode(quantity);
    var z = document.createTextNode(desc);
    p.appendChild(x);
    p.appendChild(y);
    p.appendChild(z);
    li.appendChild(p);

    if (name === '' && quantity === '' && desc === '') {
        alert("Please fill in the form");
    }else{
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("name").value = " ";
    document.getElementById("quantity").value = " ";
    document.getElementById("desc").value = " ";
    

    var span = document.createElement("span");
    var text = document.createTextNode("➖");

    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }; 
    }
};

btn.addEventListener('click', addItem);