import * as actionTypes from '../constants/timerConstants';

export function setIsTimerActive(isTimerActive) {
  return {
    type: actionTypes.SET_IS_TIMER_ACTIVE,
    isTimerActive
  }
}
