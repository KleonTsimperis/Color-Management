import * as ACTION from '../actions/constants';

export const validateInput = ({ dispatch }) => next => action =>  {
  if (action.type === ACTION.FETCHCOLOR) {
    let isValidHex = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(action.value);
    if (!isValidHex) {
      dispatch({ type: ACTION.HASERROR });
    } else {
      dispatch({ type: ACTION.CLEARERROR})
    }
  }
  next(action);
};