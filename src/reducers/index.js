
import { combineReducers } from 'redux';
import colorListReducer from './colorList';
import spinnerReducer from './spinner';
import errorReducer from './error';

const rootReducer = combineReducers({
  colorListReducer,
  spinnerReducer,
  errorReducer
});

export default rootReducer;
