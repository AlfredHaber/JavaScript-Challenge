
let startTime;
let tInterval;
let running = false;
let paused = false;  
let pauseTime = 0; 

function start() {
    if (!running) {
        running = true;
        if (paused){
            startTime=new Date().getTime() -pauseTime;
        }
        else{
            startTime=new Date().getTime();
        }
        tInterval = setInterval(updateTime, 1); 
    }
}

function updateTime() {
    let currentTime = new Date().getTime();
    let difference = currentTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(difference % 1000);

    let formattedMilliseconds = (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds;

    document.getElementById('timer').innerHTML =
        (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + formattedMilliseconds;
}

function reset(){
    if (running){
        clearInterval(tInterval);
        running=false;
    }
    document.getElementById('timer').innerHTML = '00:00:00:000';
}


function pause() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        paused = true;
        pauseTime = new Date().getTime() - startTime; 
    }
}