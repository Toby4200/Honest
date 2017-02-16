import * as actionTypes from '../constants/timerConstants';

const initialState = {
  isTimerActive: false,
  isTimerEnd: false
};

export default function timerReducer(state = initialState, action) {
  const {
    type,
    isTimerActive,
    isTimerEnd
  } = action;

  switch (type) {
    case actionTypes.SET_IS_TIMER_ACTIVE: {
      return {
        ...state,
        isTimerActive
      }
    }


    default:
      return state;
  }
}
