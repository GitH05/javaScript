// button roles by className
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0]; 
const bg = document.getElementsByClassName("outer-circle")[0];
const bgb = document.getElementsByClassName("button-wrapper")[0];
// declaration
let isPlay = false;
let min;
let minCounter = 0;
let secCounter = 0;
let sec;
let centiSec;
let centiCounter = 0;
let lapItem = 0;
let isReset = false;

// button response
const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");

}
// play button:
const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        bgb.classList.add("animation-bgb");
        // minute
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :`;
        }, 60*1000);
        // second
        sec = setInterval(() => {
            if (secCounter === 60)
            {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
            }, 1000);
        // milisecond
        centiSec = setInterval(() => {
            if (centiCounter === 100)
            {
                centiCounter = 0;
            }
            centiSecond.innerHTML = `&nbsp;${++centiCounter}`;
            }, 10);    
            
        // playSec();
        isPlay = true;
        isReset = true;
    }
    else {
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    toggleButton();
}

const playSec = () => {}
const reset = () => {
    isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML = `0 :`;
    second.innerHTML = `&nbsp;0 :`;
    centiSecond.innerHTML = `&nbsp;0 :`;
}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time-stamp");

    number.innerText = `${++lapItem}.`;
    timestamp.innerHTML=`${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number, timestamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0;
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);