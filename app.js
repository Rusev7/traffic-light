const timer = document.getElementById('timer');
const redColor = document.getElementById('red');
const yellowColor = document.getElementById('yellow');
const greenColor = document.getElementById('green');

let timerCounter = 24;
let color = 'red';

setInterval(() => {
    if(timerCounter >= 0) {
        if (color == 'red') {
            redColorLight();
        } else {
            greenColorLight();
        }
    }

    if(timerCounter < 0) {
        if(color == 'red') {
            yellowColorLight('green');
        } else {
            yellowColorLight('red');
        }
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
    if(toColor == 'red') {
        timerCounter = 24;
    } else {
        timerCounter = 20;
    }
    color = toColor;
    redColor.style.display = 'none';
    greenColor.style.display = 'none';
    yellowColor.style.display = 'block';
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