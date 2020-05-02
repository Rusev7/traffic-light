const timer = document.querySelector('.timer-container');
const redColor = document.querySelector('.red-color');
const yellowColor = document.querySelector('.yellow-color');
const greenColor = document.querySelector('.green-color');

let timerCounter = 24;
let color = 'red';

setInterval(() => {
    // red
    if(timerCounter >= 0 && color == 'red') {
        redColorLight();
    }

    if(timerCounter == 0) {
        if(color == 'red') {
            yellowColorLight('green');
        } else {
            yellowColorLight('red');
        }
        
        
    }

    if(timerCounter >= 0 && color == 'green') {
        greenColorLight();
    }
    // start timer 24
    // yellow
    // green
    // start timer 20
    // yellow 
}, 1000);


function redColorLight() {
    redColor.style.display = 'block';
    yellowColor.style.display = 'none';
    timer.style.color = '#e63212';
    timer.innerHTML = timerCounter;
    timerCounter--;
}

function yellowColorLight(toColor) {
    setTimeout(() => {
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
    }, 1000);
}

function greenColorLight() {
    yellowColor.style.display = 'none';
    greenColor.style.display = 'block';
    timer.style.color = '#67e612';
    timer.innerHTML = timerCounter;
    timerCounter--;
}