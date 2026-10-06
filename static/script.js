const controls = document.querySelector('.control');
let state = 0 /*0=idle,1=running,2=paused */
let subject

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
    else
        alert('Please select an option first!')
    }
});