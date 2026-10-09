const controls = document.querySelector('.control');
const subjpicked = document.getElementById('pickedsubject')
let state = 0 /*0=idle,1=running,2=paused */
let subject = null

function setTimerState(state) {
    controls.className = `control state-${state}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
    setTimerState('running')
    state = 1
});

document.getElementById('pause-btn').addEventListener('click', () => {
    setTimerState('paused')
    state = 2
});

document.getElementById('resume-btn').addEventListener('click', () => {
    setTimerState('running')
    state = 1
});

document.getElementById('stop-btn').addEventListener('click', () => {
    setTimerState('idle')
    state = 0
});

document.getElementById('sendsubjbtn').addEventListener('click', () => {
    const selcRadio = document.querySelector('input[name="subj-opt"]:checked');
    if  (selcRadio) {
        subject = selcRadio.value
        console.log(selcRadio.value)
    } else {
        alert('Please select an option first!')
    }

    switch (subject) {
        case 'Math':
            subjpicked.textContent = 'Mathematics'
            break;
        case 'Lang':
            subjpicked.textContent = 'Languages'
            break;
        case 'Inf':
            subjpicked.textContent = 'Informatik'
            break;
        case 'Natscie':
            subjpicked.textContent = 'Natural Sciences'
            break;
        case 'Sostud':
            subjpicked.textContent = 'Social Studies'
            break;
        default:
            subjpicked.textContent = 'Not Selected'
            break;
    }
});

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const TimerDisplay = document.getElementById('timer');
const Startbtn = document.getElementById('start-btn');
const Pausebtn = document.getElementById('pause-btn');
const Resumebtn = document.getElementById('resume-btn');
const Stopbtn = document.getElementById('stop-btn');

function formatTime(ms) {
    const totalsec = Math.floor(ms / 1000);
    const hours = Math.floor(totalsec / 3600);
    const minutes = Math.floor((totalsec % 3600) / 60);
    const seconds = totalsec % 60;

    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startTimer() {
    startTime = performance.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = performance.now() - startTime;
        TimerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
}