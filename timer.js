class Timer{
    constructor(){
        this.startTime=null;
        this.tInterval=null;
        this.running = false;
        this.paused = false;  
        this.pauseTime = 0; 
    }
    

    start() {
        if (!this.running) {
            this.running = true;
            if (this.paused){
                this.startTime=new Date().getTime() -this.pauseTime;
            }
            else{
                this.startTime=new Date().getTime();
            }
            this.tInterval = setInterval(()=> this.updateTime(), 1); 
        }
    }

    updateTime() {
        let currentTime = new Date().getTime();
        let difference = currentTime - this.startTime;

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor(difference % 1000);

        let formattedMilliseconds = (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds;

        document.getElementById('timer').innerHTML = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + formattedMilliseconds;
    }

    reset(){
        if (this.running){
            clearInterval(this.tInterval);
            this.running=false;
        }
        this.pauseTime=0;
        document.getElementById('timer').innerHTML = '00:00:00:000';
    }


    pause() {
        if (this.running) {
            clearInterval(this.tInterval);
            this.running = false;
            this.paused = true;
            this.pauseTime = new Date().getTime() - this.startTime; 
        }
    }
}

const myTimer = new Timer();

document.getElementById('start').addEventListener('click', () => myTimer.start());
document.getElementById('pause').addEventListener('click', () => myTimer.pause());
document.getElementById('reset').addEventListener('click', () => myTimer.reset());
 