import { START_TIMER, ADD_SECOND, RESTART_TIMER } from "./types";

const TIMER_DURATION = 6;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
}

function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: true,
        elapsedTime: 0,
        timerDuration: TIMER_DURATION
    };
}

function applyAddSecond(state){
    if (state.elapsedTime < TIMER_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1,
        };
    }else {
        return {
            ...state,
            isPlaying: false
        };
    }
}

export default function reducer(state = initialState, action){
    switch (action.state) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state
    }
}
