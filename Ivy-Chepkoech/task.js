
function delet(e) {
    var list = document.getElementById("tasks");   // Get the <ul> element with id="tasks"
    list.removeChild(list.childNodes[0]);        // Remove task from list
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const task1 = document.querySelector('#task1').value; //get value of task with id task1
        const task2 = document.querySelector('#task2').value; //get value of task with id task2
        const task3 = document.querySelector('#task3').value;  //get value of task with id task3
        const task = [task1, '<br>', task2, '<br>', task3];      // assign them to an array named task
        // console.log(task);

        // create a li element
        const li = document.createElement('li');
        li.innerHTML = task;

        // append the li to ul with id name tasks
        document.querySelector('#tasks').append(li)

        // create a new button
        const liButton = document.createElement("button");
        // set the innerText of the button to done, set color and id 
        liButton.innerText = "done";
        liButton.style.backgroundColor = "rgb(110, 218, 110)";
        liButton.id = "button";
        // add an event Listener to the button
        liButton.addEventListener("click", delet);
        // DISCLAIMER: BUTTON SEEMS TO REMOVE ITEMS WHEN CLICKED TWICE ON THE FIRST TRY 
        //AFTER THAT; IT SEEMS TO WORK NORMALLY, DON'T UNDERSTAND WHY.

        // add the button to the li element
        li.appendChild(liButton);

        // reset the value of the input tags
        document.querySelector('#task1').value = "";
        document.querySelector('#task2').value = "";
        document.querySelector('#task3').value = "";

        //stop form resubmitting
        return false;
    }

});