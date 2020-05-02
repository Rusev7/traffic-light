const timer = document.getElementById('timer');
const redColor = document.getElementById('red');
const yellowColor = document.getElementById('yellow');
const greenColor = document.getElementById('green');

let timerCounter = 24;
let color = 'red';

setInterval(() => {
    if (timerCounter >= 0) {
        (color == 'red')? redColorLight() : greenColorLight();
    } else {
        (color == 'red')? yellowColorLight('green') : yellowColorLight('red');
    }
}, 1000);


function redColorLight() {
    redColor.style.display = 'block';
    yellowColor.style.display = 'none';
    timer.style.color = '#e63212';
    timer.innerHTML = timerCounter;
    timerCounter--;
}

function yellowColorLight(toColor) {
    timerCounter = (toColor == 'red')? 24 : 20;
    color = toColor;
    // Styling
    redColor.style.display = 'none';
    greenColor.style.display = 'none';
    yellowColor.style.display = 'block';
    // Timer reset
    timer.style.color = '#e67c12';
    timer.innerHTML = '';
}

function greenColorLight() {
    yellowColor.style.display = 'none';
    greenColor.style.display = 'block';
    timer.style.color = '#67e612';
    timer.innerHTML = timerCounter;
    timerCounter--;
}