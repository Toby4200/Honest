import * as actionTypes from '../constants/timerConstants';

const initialState = {
  isTimerActive: false,
  timeCount: 0,
  timestampStart: null,
  timestampEnd: null,
  isTaskEnd: false
};

export default function timerReducer(state = initialState, action) {
  const {
    type,
    isTimerActive,
    isTimerEnd,
    timeCount,
    timestampStart,
    timestampEnd
  } = action;

  switch (type) {
    case actionTypes.SET_TIMER: {
      return {
        ...state,
        isTimerActive,
        timeCount,
        timestampStart,
        timestampEnd
      }
    }
    case actionTypes.SET_TASK_END: {
      return {
        ...state,
        isTaskEnd: true
      }
    }

    default:
      return state;
  }
}
