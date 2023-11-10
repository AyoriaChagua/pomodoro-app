import { START_TIMER, ADD_SECOND, RESTART_TIMER } from "./types";

function startTimer() {
    return {
        type: START_TIMER
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSeccond() {
    return {
        type: ADD_SECOND
    };
}

const actionCreators = {
    startTimer,
    restartTimer,
    addSeccond
}

export { actionCreators };
