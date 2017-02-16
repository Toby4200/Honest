// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  counter,
  timerReducer,
  routing
});

export default rootReducer;
