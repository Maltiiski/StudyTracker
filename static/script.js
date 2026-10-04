const controls = document.querySelector('.control');

function setTimerState(state) {
    controls.className = `control state-${state}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
    setTimerState('running')
});

document.getElementById('pause-btn').addEventListener('click', () => {
    setTimerState('paused')
});

document.getElementById('resume-btn').addEventListener('click', () => {
    setTimerState('running')
});

document.getElementById('stop-btn').addEventListener('click', () => {
    setTimerState('idle')
});