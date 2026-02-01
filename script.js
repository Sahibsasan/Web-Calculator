const elements = document.getElementsByTagName('li');
const screen = document.getElementById('screen');   // FIX
const clear = document.getElementById('clear');

for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === '=') {
        elements[i].addEventListener("click", calculate);
    } else {
        elements[i].addEventListener("click", addToScreen);
    }
}

function addToScreen() {
    let value = this.innerHTML;

    if (value === 'x') {
        screen.innerHTML += '*';
    } else {
        screen.innerHTML += value;
    }
}

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
    } catch {
        screen.innerHTML = "Error";
    }
}

clear.onclick = function () {
    screen.innerHTML = "";
};
