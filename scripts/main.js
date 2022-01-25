let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Gnome-utilities-terminal.svg.png') {
        myImage.setAttribute ('src',
                'images/computer-terminal-transparent.png');
    } else {
        myImage.setAttribute ('src',
                'images/Gnome-utilities-terminal.svg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The terminal is awesome, ' + myName + ' !';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The terminal is awesome, ' + storedName + ' !';
}

myButton.onclick = function() {
    setUserName();
}
