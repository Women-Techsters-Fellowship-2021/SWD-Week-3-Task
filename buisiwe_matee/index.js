//returns the first element that matches an id for input, class for button and class container list.
const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
// create method that attaches an event handler to myButton
myButton.addEventListener('click', (e) => {
    if (inputText.value != "") {
        e.preventDefault();
        // create li
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        myLi.appendChild(mySpan);
    }
    //create method that returns all elements(html DOM)
    const close = document.querySelectorAll('span');

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = "none";
        })
    }
    inputText.value = "";
});