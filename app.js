const showTime = document.querySelector('.stopwatch__timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const appendSeconds = document.querySelector('.seconds');
const appendTens = document.querySelector('.tens');

var Interval;
var tens = 00;
var seconds = 00;
var minutes = 00;
// Events
startBtn.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

stopBtn.onclick = function() {
    clearInterval(Interval);
}

resetBtn.onclick = function() {
    tens = 0;
    seconds = 0;
    clearInterval(Interval);
    appendTens.innerHTML = '00'
    appendSeconds.innerHTML = '00';
}

// Functions

function startTimer(){
   tens++;
   if (tens<=9){
    appendTens.innerHTML = '0' + tens;
   } 
   if (tens>9){
    appendTens.innerHTML =  tens;
   }
   if (tens == 99){
    seconds++;
    tens = 0;
    if (seconds<=9){
        appendSeconds.innerHTML = '0' + seconds;
    } else {
        appendSeconds.innerHTML =  seconds;
    }
   }
}