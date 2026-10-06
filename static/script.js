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

    if (subject) {
        if (subject=='Math') {
            subjpicked.textContent = 'Mathematics'
        } else if (subject=='Lang') {
            subjpicked.textContent = 'Language'
        } else if (subject=='Inf') {
            subjpicked.textContent = 'Informatik'
        } else if (subject=='Natscie') {
            subjpicked.textContent = 'Natural Sciences'
        } else if (subject=='Sostud') {
            subjpicked.textContent = 'Sosial Studies'
        }
    } else {
        subjpicked.textContent = 'Not Selected'
    }
});