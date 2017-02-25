import * as actionTypes from '../constants/timerConstants';

export function setTimer(isTimerActive, timestampStart, timestampEnd, timeCount) {
  return {
    type: actionTypes.SET_TIMER,
    isTimerActive,
    timeCount,
    timestampStart,
    timestampEnd
  }
}

export function setTaskEnd(taskTimer) {
  return function (dispatch) {
    clearInterval(taskTimer);

    dispatch({
      type: actionTypes.SET_TASK_END
    });
  }
}
